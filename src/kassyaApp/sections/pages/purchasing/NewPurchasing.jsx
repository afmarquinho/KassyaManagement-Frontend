import { useEffect, useState } from "react";
import { PurchasingLayout } from "../../../layout";
import {
  ModalCancelOrder,
  ModalCompletePurch,
  ModalDeleteItem,
  ModalEditPurchasing,
  ModalNewPurchasing,
} from "../../../modals";
import { Alerta, Spinner2, TableListOrder } from "../../../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNewAsync } from "../../../../redux/thunks/purchasingThunks";
import { dataValidation } from "../../../../helpers/hasNonEmptyValues";

const NewPurchasing = () => {
  const [actModal, setActModal] = useState(false); //?  ModalNewPurchasing
  const [actModalComplete, setActModalComplete] = useState(false); //?  ModalCpmpletePuchasing
  const [actModalEdit, setActModalEdit] = useState(false); //?  ModalEditPuchasing
  const [actModalDelete, setActModalDelete] = useState(false); //?  ModalDelete
  const [actModalCancel, setActModalCancel] = useState(false); //?  ModalCancelOrder
  const [estado, setEstado] = useState("");
  const [mensaje, setMensaje] = useState("");

  //? state que almacena de manera temporal la orden antes de envidarla al backend
  //TODO: poner este state en localstorage
  const initalValues = {
    orderNumber: "",
    items: [],
    status: "",
    total: 0,
    paymentMethod: "",
    comments: "",
  };

  const [requirements, setRequirements] = useState(initalValues);
  const count = useSelector((state) => state.purchasing.count);
  const itemArray = useSelector((state) => state.purchasing.itemArray);
  const statusAlert = useSelector((state) => state.purchasing.status);
  const msg = useSelector((state) => state.purchasing.msg);
  const order = `OC${count + 1}`;
  const { orderNumber, items, status, paymentMethod, comments, total } =
    requirements;
  const [selectedItem, setSelectedItem] = useState({}); //? Almacenar el item a editar
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //? consolida los subtotales es un variable para asignarlos al state
    const totalSubtotals = itemArray.reduce(
      (acc, item) => acc + item.subTotal,
      0
    );

    setRequirements((prevState) => ({
      ...prevState,
      items: itemArray,
      total: totalSubtotals,
    }));
  }, [itemArray]);

  const onCancel = () => {
    setActModalCancel(true);
  };

  const onNew = () => {
    //? actualiza el status con la nueva orden y status
    setRequirements((prevState) => ({
      ...prevState,
      status: "Creada",
      orderNumber: order,
    }));
  };

  const onProcess = () => {
    //? antes de mandar al backend debo eliminar el k,ey id de items, eso solo no necesité en el front
    const newItemArray = itemArray.map(({ id, ...restOfKeys }) => {
      return restOfKeys;
    });
    setRequirements((prevState) => ({
      ...prevState,
      items: newItemArray,
    }));
    const errorAlert = dataValidation(requirements);
    if (errorAlert) {
      alert(errorAlert);
      return;
    }

    if (requirements.items.length === 0) {
      alert("Debe haber al menos 1 (un) arrtículo en el pedido");
      return;
    }

    dispatch(addNewAsync(requirements));
    setLoading(true);
    setMensaje("Orden creada con éxito");
    setEstado("success");

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      setMensaje("");
      setEstado("");
    }, 5000);
    setTimeout(() => {
      setRequirements(initalValues);
    }, 6000);
  };

  return (
    <PurchasingLayout>
      <>
        {actModal && (
          <ModalNewPurchasing
            setActModal={setActModal}
            selectedItem={selectedItem}
          />
        )}
        {actModalComplete && (
          <ModalCompletePurch
            setActModalComplete={setActModalComplete}
            setRequirements={setRequirements}
            requirements={requirements}
          />
        )}

        {actModalEdit && (
          <ModalEditPurchasing
            setActModalEdit={setActModalEdit}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
        {actModalDelete && (
          <ModalDeleteItem
            setActModalDelete={setActModalDelete}
            selectedItem={selectedItem}
          />
        )}
        {actModalCancel && (
          <ModalCancelOrder
            setActModalCancel={setActModalCancel}
            setRequirements={setRequirements}
          />
        )}
        <button
          className="h-10 px-5 flex items-center justify-center mb-2 bg-customDeepBlueGray text-white hover:bg-green-900"
          onClick={onNew}
        >
          Nuevo Pedido
        </button>

        <h3 className="uppercase h-10 flex justify-center items-center bg-customDeepBlue text-slate-300">
          Nuevo pedido
        </h3>
        {requirements.orderNumber.length === 0 ? (
          <p>
            No hay pedidos, presiona "
            <span className="font-bold text-lg">Nuevo Pedido</span>" para
            comenzar
          </p>
        ) : (
          <>
            <Table className="w-full text-sm text-start">
              <thead>
                <tr>
                  <th className="text-start">Órden</th>
                  <th className="text-start">Status</th>
                  <th className="text-start">Pago</th>
                  <th className="text-start">Comentarios</th>
                  <th className="text-start">total</th>
                  <th className="text-start"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderNumber}</td>
                  <td>{status}</td>
                  <td>{paymentMethod}</td>
                  <td>{comments}</td>
                  <td className="font-bold">{`$ ${total.toLocaleString()}`}</td>
                  <td className="w-52">
                    <button
                      className="rounded-md p-2 mx-1 text-xs bg-blue-600 text-white hover:bg-teal-700"
                      onClick={(e) => setActModalComplete(true)}
                    >
                      Editar
                    </button>
                    <button
                      className="rounded-md p-2 mx-1 text-xs bg-red-500 text-white hover:bg-teal-700"
                      onClick={onCancel}
                    >
                      Cancelar
                    </button>
                    <button
                      className="rounded-md p-2 mx-1 text-xs bg-green-600 text-white hover:bg-teal-700"
                      onClick={onProcess}
                    >
                      Procesar
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>

            {loading ? (
              <Spinner2 />
            ) : mensaje ? (
              <Alerta status={estado} msg={mensaje} />
            ) : (
              <TableListOrder
                setActModal={setActModal}
                setSelectedItem={setSelectedItem}
                items={items}
                setActModalDelete={setActModalDelete}
              />
            )}
          </>
        )}
      </>
    </PurchasingLayout>
  );
};

export default NewPurchasing;

const Table = styled.table`
  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.softGray};
  }
`;
