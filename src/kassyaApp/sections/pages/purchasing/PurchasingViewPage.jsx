import { useParams } from "react-router-dom";
import { PurchasingLayout } from "../../../layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAsync } from "../../../../redux/thunks/purchasingThunks";
import { formatDate } from "../../../../helpers/formatDate";

const PurchasingViewPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.purchasing.order);
  const suppliers = useSelector((state) => state.supplier.data);
  const { items } = order;

  //TODO: Poner esta funcion en los helpers y tambien usarla en el listado de las 
  const findSupplier = (id, array) => {
    const supplierName = array.find(obj => obj._id === id);
    return supplierName;
  };

  useEffect(() => {
    dispatch(getOrderAsync(params.id));
  }, []);
  return (
    <PurchasingLayout>
      <>
        <div className="p-10 bg-white">
          <h3 className="mb-5">
            <span>ÓRDEN:</span> {order.orderNumber}
          </h3>
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
            {items.map((item) => (
              <div key={item._id} className="mb-5">
                <p>
                  <span className="font-bold">Nombre:</span> {item.name}
                </p>
                <p>
                  <span className="font-bold">Área de la requisición:</span>{" "}
                  {item.department}
                </p>
                <p>
                  <span className="font-bold">Referencia:</span> {item.ref}
                </p>
                <p>
                  {/* <span className="font-bold">Proveedor:</span> {findSupplier(item.supplier, suppliers )} */}
                </p>
                <p>
                  <span className="font-bold">Unidad:</span> {item.unit}
                </p>
                <p>
                  <span className="font-bold">Cantidad:</span> {item.amount}
                </p>
                <p>
                  <span className="font-bold">Costo Unitario:</span>{" "}
                  {item.unitCost}
                </p>
                <p>
                  <span className="font-bold">Subtotal:</span> {item.subTotal}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </>
    </PurchasingLayout>
  );
};

export default PurchasingViewPage;
