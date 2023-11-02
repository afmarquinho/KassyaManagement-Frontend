import React, { useEffect, useState } from "react";
import { PurchasingLayout } from "../../../layout";
import { ModalNewPurchasing } from "../../../modals";
import { useSelector } from "react-redux";

const NewPurchase = () => {
  const [actModal, setActModal] = useState(false);
  // ! TODO: EN REALIDAD LA DATA SE CARGA CON LA BBDD NO EN EL FRONTEND
  const data = useSelector((state) => state.purchasing.data);
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <PurchasingLayout>
      <>
        <div className="w-full flex justify-end items-center">
          <button
            className="h-10 w-10 flex items-center justify-center mb-2 bg-customDeepBlueGray text-white hover:bg-green-900"
            onClick={(e) => setActModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        {actModal && <ModalNewPurchasing setActModal={setActModal} />}

        <h3 className="uppercase h-10 flex justify-center items-center bg-customDeepBlue text-slate-300">
          Nuevo pedido
        </h3>
        {data.length === 0 ? (
          <p>
            No hay pedidos, presiona "<span className="font-bold text-2xl">+</span>" para comenzar
          </p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start"></th>
                <th className="text-start">Nombre</th>
                <th className="text-start">Nombre</th>
                <th className="text-start">Referencia</th>
                <th className="text-start">Proveedor</th>
                <th className="text-start">Cantidad</th>
                <th className="text-start">Unidad</th>
                <th className="text-start">Precio Unitario</th>
                <th className="text-start">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.ref}>
                  <td className="text-start">{index + 1}</td>
                  <td className="text-start">{item.name}</td>
                  <td className="text-start">{item.ref}</td>
                  <td className="text-start">{item.supplier}</td>
                  <td className="text-start">{item.amount}</td>
                  <td className="text-start">{item.unit}</td>
                  <td className="text-start">{item.unitCost}</td>
                  <td className="text-start">{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    </PurchasingLayout>
  );
};

export default NewPurchase;
