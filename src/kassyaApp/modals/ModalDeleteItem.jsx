import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alerta } from "../components";
import { deleteItem } from "../../redux/slices/purchasingSlice";

const ModalDeleteItem = ({ setActModalDelete, selectedItem }) => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const onCancel = () => {
    setActModalDelete(false);
    setMsg("");
    setStatus("");
  };
  const onDelete = () => {
    dispatch(deleteItem(selectedItem.id));
    setMsg(`${selectedItem.name} eliminado/a con éxito de tu lista`);
    setStatus("success");

    setTimeout(() => {
      setActModalDelete(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed z-[60] left-0 right-0 bottom-0 top-0 overflow-auto pt-10 bg-black bg-opacity-80 flex justify-center items-center">
        <div className="bg-white p-6 w-96 max-w-96 h-60 flex flex-col justify-center items-center text-md">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 text-center text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h4 className="text-center">
            ¿Desea eliminar el artículo <br />
            <span className="font-bold">{selectedItem.name}</span>?
          </h4>

          {msg ? (
            <Alerta status={status} msg={msg} />
          ) : (
            <>
              <p className="w-100 text-center text-red-500">
                Una vez <span className="font-bold">confirmes</span> la
                eliminación no podrás recuperar los datos.
              </p>

              <div className="w-full flex justify-evenly items-center">
                <button
                  className="bg-teal-500 text-white w-28 h-8 font-medium hover:bg-teal-600 text-sm"
                  onClick={onDelete}
                >
                  Confirmar
                </button>
                <button
                  className="bg-red-500 text-white w-28 h-8 font-medium hover:bg-red-600 text-sm"
                  onClick={onCancel}
                >
                  Cancelar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalDeleteItem;
