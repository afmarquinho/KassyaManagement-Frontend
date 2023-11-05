import { useEffect, useState } from "react";
import { PurchasingLayout } from "../../../layout";
import { ModalCompletePurch, ModalEditPurchasing, ModalNewPurchasing } from "../../../modals";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NewPurchasing = () => {
  const [actModal, setActModal] = useState(false);   //?  ModalNewPurchasing 
  const [actModalComplete, setActModalComplete] = useState(false); //?  ModalCpmpletePuchasing 
  const [actModalEdit, setactModalEdit] = useState(false); //?  ModalEditPuchasing 
  const [selectedItem, setSelectedItem] = useState(null); //? Almacenar el item a editar


  //? state que almacena de manera temporal la orden antes de envidarla al backend
  //TODO: poner este state en localstorage
  const [requirements, setRequirements] = useState({
    orderNumber: "",
    items: [],
    status: "",
    total: 0,
    paymentMethod: "",
    comments: "",
  });
  const count = useSelector((state) => state.purchasing.count);
  const itemArray = useSelector((state) => state.purchasing.itemArray);
  const order = `OC${count + 1}`;
  const { orderNumber, items, status, paymentMethod, comments, total } =
    requirements;

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

  const onNew = () => {
    //? actualiza el status con la nueva orden y status
    setRequirements((prevState) => ({
      ...prevState,
      status: "Creada",
      orderNumber: order,
    }));
  };

  return (
    <PurchasingLayout>
      <>
      {actModal && <ModalNewPurchasing setActModal={setActModal} />}
        {actModalComplete && (
          <ModalCompletePurch
            setActModalComplete={setActModalComplete}
            setRequirements={setRequirements}
            requirements={requirements}
          />
        )}

        {actModalEdit && <ModalEditPurchasing/>}
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
                      onClick={(e) => setActModalComplete(true)}
                    >
                      Cancelar
                    </button>
                    <button className="rounded-md p-2 mx-1 text-xs bg-green-600 text-white hover:bg-teal-700">
                      Procesar
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="w-full text-sm text-start mt-5">
              <caption className="text-start font-bold italic bg-customBlueGray text-white">
                Items de la Órden
              </caption>
              <caption>
                <div className="flex">
                  <button
                    className="text-sm flex gap-1 w-40 py-2 items-center justify-start font-bold"
                    onClick={(e) => setActModal(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Agregar
                  </button>
                </div>
              </caption>
              <thead>
                <tr>
                  <th className="text-start">Nombre</th>
                  <th className="text-start">Referencia</th>
                  <th className="text-start">Proveedor</th>
                  <th className="text-start">Cantiadad</th>
                  <th className="text-start">Unidad</th>
                  <th className="text-start">Costo Unitario</th>
                  <th className="text-start">Subtotal</th>
                  <th className="text-start">Departamento</th>
                  <th className="text-start"></th>
                  <th className="text-start"></th>
                  <th className="text-start"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.ref}>
                    <td>{item.name}</td>
                    <td>{item.ref}</td>
                    <td>{item.supplier}</td>
                    <td>{(item.amount).toLocaleString()}</td>
                    <td>{(item.unit).toLocaleString()}</td>
                    <td>{`$ ${item.unitCost.toLocaleString()}`}</td>
                    <td>{`$ ${item.subTotal.toLocaleString()}`}</td>
                    <td>{item.department}</td>
                    <td>
                      <button className="text-xs text-blue-600 font-bold">
                        Editar
                      </button>
                    </td>
                    <td>
                      <button className="text-xs text-red-600 font-bold">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
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
