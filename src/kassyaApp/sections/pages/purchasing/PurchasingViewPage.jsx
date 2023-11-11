import { useParams } from "react-router-dom";
import { PurchasingLayout } from "../../../layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderAsync,
  updateOrderAsync,
} from "../../../../redux/thunks/purchasingThunks";
import { formatDate } from "../../../../helpers/formatDate";
import styled from "styled-components";

const PurchasingViewPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.purchasing.order);
  const suppliers = useSelector((state) => state.supplier.data);
  const [editedOrder, setEditedOrder] = useState(order); //? State que guardael nuevo objeto que voy a actualizar o editar
  const [disbleButton, setDisbleButtons] = useState({
    rejected: false,
    approved: false,
    inPayment: false,
    pending: false,
    inWarehouse: false,
  });

  //TODO: Poner esta funcion en los helpers y tambien usarla en el listado de las
  //TODO: Verificar la validaci´+on de crear
  const findSupplier = (id, array) => {
    const supplierName = array.find((obj) => obj._id === id);
    return supplierName.businessName;
  };

  useEffect(() => {
    dispatch(getOrderAsync(params.id));
  }, []);
  //? Función para colocar la clase de activo
  const getStatusClass = (status) => {
    return order.status === status ? "activo" : "";
  };
  const getStatusRejected = (status) => {
    return order.status === status ? "rechazada" : "";
  };

//* BLOQUE DE CAMBIOS DE ESTADOS
  const onReject = () => {
    const newStatus = "Rechazada";
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
    setDisbleButtons({
      rejected: true,
      approved: true,
      inPayment: true,
      pending: true,
      inWarehouse: true,
    });

    dispatch(updateOrderAsync(params.id, editedOrder));
  };

  const onApprove = () => {
    const newStatus = "Aprobada";
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
    setDisbleButtons((prevOrder) => ({
      ...prevOrder,
      rejected: true,
      approved: true,
    }));
    dispatch(updateOrderAsync(params.id, editedOrder));
  };
  const onPayment = () => {
    //? Si el boton anterior esta en true, quiere decir que no se actualizó el paso anterior, no puedo indicar en pago sin antes ser aprobado
    if(!disbleButton.approved){
      alert("No puedes cambiar el estado a 'En pago' sin antes estar aprobada la ordem")
      return
    }
    const newStatus = "En pago";
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
    setDisbleButtons((prevOrder) => ({
      ...prevOrder,
      inPayment: true,
    }));
    dispatch(updateOrderAsync(params.id, editedOrder));
    
  };
  const onPending = () => {
    //? Si el boton anterior esta en true, quiere decir que no se actualizó el paso anterior, no puedo indicar en pago sin antes ser aprobado
    if(!disbleButton.inPayment){
      alert("No puedes cambiar el estado a 'En Espera' sin antes estar pagada la orden")
      return
    }
    const newStatus = "En espera";
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
    setDisbleButtons((prevOrder) => ({
      ...prevOrder,
      pending: true,
    }));
    dispatch(updateOrderAsync(params.id, editedOrder));
    
  };
  const onWarehouse = () => {
    //? Si el boton anterior esta en true, quiere decir que no se actualizó el paso anterior, no puedo indicar en pago sin antes ser aprobado
    if(!disbleButton.pending){
      alert("No puedes cambiar el estado a 'En Bodega' sin antes estar en espera la orden")
      return
    }
    const newStatus = "En bodega";
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
    setDisbleButtons((prevOrder) => ({
      ...prevOrder,
      inWarehouse: true,
    }));
    dispatch(updateOrderAsync(params.id, editedOrder));
    
  };
  return (
    <PurchasingLayout>
      <>
        <div className="p-10 bg-white">
          <h3 className="px-5 mb-10 italic bg-customBlueGray text-white">
            <span>ÓRDEN:</span> {order.orderNumber}
          </h3>
          <DIV className="mb-5 w-full flex gap-5 justify-evenly items-center relative text-xs md:text-sm">
            <p className={`relative ${getStatusClass("Creada")}`}>
              {" "}
              <button disabled className="p-3">
                Creada
              </button>
            </p>
            <p className={`relative ${getStatusRejected("Rechazada")}`}>
              <button
                disabled={disbleButton.rejected}
                className="p-3"
                onClick={onReject}
              >
                Rechazada
              </button>
            </p>
            <p className={`relative ${getStatusClass("Aprobada")}`}>
              <button
                disabled={disbleButton.approved}
                className="p-3"
                onClick={onApprove}
              >
                Aprobada
              </button>
            </p>
            <p className={`relative ${getStatusClass("En pago")}`}>
              <button disabled={disbleButton.inPayment} className="p-3" onClick={onPayment}>
                En pago
              </button>
            </p>
            <p className={`relative ${getStatusClass("En espera")}`}>
              <button disabled={disbleButton.pending} className="p-3" onClick={onPending}>
                En espera
              </button>
            </p>
            <p className={`relative ${getStatusClass("En Bodega")}`}>
              <button disabled={disbleButton.inWarehouse} className="p-3">
                En Bodega
              </button>
            </p>
          </DIV>

          <div className="mb-4 w-full flex flex-col md:flex-row gap-5 items-center justy justify-between">
            <p className="w-full md:w-1/2 font-bold">
              Estado de la Órden:{" "}
              <span className="font-normal">{order.status}</span>
            </p>
            <p className="w-full md:w-1/2 font-bold">
              Información adicional:{" "}
              <span className="font-normal uppercase">{order.comments}</span>
            </p>
          </div>
          <div className="mb-4 w-full flex flex-col md:flex-row gap-5 items-center justy justify-between">
            <p className="w-full md:w-1/2 font-bold">
              Método de pago:{" "}
              <span className="font-normal">{order.paymentMethod}</span>
            </p>
            <p className="w-full md:w-1/2 font-bold">
              {" "}
              Monto de la compra:{" "}
              <span className="font-normal uppercase">${order.total}</span>
            </p>
          </div>
          <div className="mb-4 w-full flex flex-col md:flex-row gap-5 items-center justy justify-between">
            <p className="w-full md:w-1/2 font-bold">
              Creado en:{" "}
              <span className="font-normal">{formatDate(order.createdAt)}</span>
            </p>
            <p className="w-full md:w-1/2 font-bold"></p>
          </div>
          <div>
            <h3 className="px-5 uppercase italic bg-customDeepBlue text-customMainColor">
              Artículos de la órden
            </h3>
            {order.items &&
              order.items.map((item) => (
                <div key={item._id}>
                  <p>
                    <span className="font-bold">Nombre: </span>
                    {item.name}
                  </p>
                  <p>
                    <span className="font-bold">Referencia: </span>
                    {item.ref}
                  </p>
                  <p>
                    <span className="font-bold">Proveedor: </span>
                    {findSupplier(item.supplier, suppliers)}
                  </p>
                  <p>
                    <span className="font-bold">Unidad: </span>
                    {item.unit}
                  </p>
                  <p>
                    <span className="font-bold">Cantidad: </span>
                    {item.amount.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-bold">Costo Unitario: </span>
                    {`$ ${item.unitCost.toLocaleString()}`}
                  </p>
                  <p>
                    <span className="font-bold">Área de la requisicón: </span>
                    {item.department}
                  </p>
                  <p>
                    <span className="font-bold">Subtotal: </span>
                    {`$ ${item.subTotal.toLocaleString()}`}
                  </p>
                  <hr className="mb-5" />
                </div>
              ))}
          </div>
        </div>
      </>
    </PurchasingLayout>
  );
};

export default PurchasingViewPage;

const DIV = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 85%;
    top: -10px;
    background-color: #ececec;
    z-index: 1;
  }

  p {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      border: 4px solid #ececec;
      background: white;
    }

    &.activo {
      &:before {
        border: 4px solid #2196f3;
        background: radial-gradient(
          circle at center,
          #2196f3 0%,
          #2196f3 50%,
          white 50%,
          white 100%
        );
      }
    }
    &.rechazada {
      &:before {
        border: 4px solid #f44336;
        background: radial-gradient(
          circle at center,
          #f44336 0%,
          #f44336 50%,
          white 50%,
          white 100%
        );
      }
    }
  }
`;
