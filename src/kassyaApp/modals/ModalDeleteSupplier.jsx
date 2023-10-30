import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteSupplier } from "../../redux/thunks/supplierThunks";
import { SpinnerDeleting } from "../components";

const ModalDeleteSupplier = ({
  setActModalDelete,
  mensaje = "Deseas eliminar proveedor",
  nombre = "",
}) => {
  const params = useParams();
  const dispatch = useDispatch();

  //? Mensaje de Alerta
  const status = useSelector((state) => state.supplier.status);
  const msg = useSelector((state) => state.supplier.msg);
  const loading = useSelector((state) => state.supplier.loading);

  const remove = () => {
    dispatch(deleteSupplier(params.id));
    setActModalDelete(false);
  };
  return (
    <>
      {loading ? (
        <SpinnerDeleting />
      ) : (
        <div className="fixed z-[60] left-0 right-0 bottom-0 top-0 overflow-auto pt-10 bg-customDeepBlueGray bg-opacity-90 flex justify-center items-center">
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
              ¿{mensaje} <br />
              <span className="font-bold">{nombre}</span>?
            </h4>
            <p className="w-100 text-center text-red-500">
              Una vez <span className="font-bold">confirmes</span> la
              eliminación no podrás recuperar los datos.
            </p>
            <div className="w-full flex justify-evenly items-center">
              <button
                className="bg-teal-500 text-white w-28 h-8 font-medium hover:bg-teal-600 text-sm"
                onClick={remove}
              >
                Confirmar
              </button>
              <button
                className="bg-red-500 text-white w-28 h-8 font-medium hover:bg-red-600 text-sm"
                onClick={(e) => setActModalDelete(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDeleteSupplier;
