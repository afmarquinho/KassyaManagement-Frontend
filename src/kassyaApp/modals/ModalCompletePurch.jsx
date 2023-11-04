import { useDispatch, useSelector } from "react-redux";
import { Alerta } from "../components";
import { hasNonEmptyValues } from "../../helpers/hasNonEmptyValues";
import { setMsg, setStatus } from "../../redux/slices/purchasingSlice";
import useForm from "../../helpers/useForm";
import { paymentMethods } from "../../db/db";

const ModalNewPurchasing = ({
  setActModalComplete,
  setRequirements,
  requirements,
}) => {
  const intialState = {
    comments: requirements.comments,
    paymentMethod: requirements.paymentMethod,
  };
  const { formValues, resetForm, onInputChange } = useForm(intialState);
  const msg = useSelector((state) => state.purchasing.msg);
  const status = useSelector((state) => state.purchasing.status);
  const dispatch = useDispatch();

  const onClose = () => {
    setActModalComplete(false);
    //? Me aseguro que al cerrar el modal no se vaya una alerta sin setear que me vaya a afectar en otro formulario
    dispatch(setMsg(""));
    dispatch(setStatus(""));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    if (!hasNonEmptyValues(formValues)) {
      dispatch(setMsg("Diligencie todos los campos del artículo"));
      dispatch(setStatus("error"));
      return;
    }
    setRequirements((prevValues) => ({
      ...prevValues,
      comments: formValues.comments,
      paymentMethod: formValues.paymentMethod,
    }));
    dispatch(setMsg("Datos envidados al pedido"));
    dispatch(setStatus("success"));

    setTimeout(() => {
      onClose()
    }, 2000);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 pt-20 overflow-auto bg-black bg-opacity-80">
      <form
        className="w-11/12 md:w-4/5 lg:w-1/3 max-w-lg m-auto bg-white"
        onSubmit={onSubmit}
      >
        <div
          className="btn-cerrar absolute top-4 right-4 cursor-pointer text-white"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={6}
            stroke="currentColor"
            className="w-10 h-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="w-full h-20  flex items-center justify-center uppercase text-cyan-100 bg-cyan-700">
          Completar Pedido
        </h3>
        {status === "error" && <Alerta status={status} msg={msg} />}
        {status === "success" ? (
          <Alerta status={status} msg={msg} />
        ) : (
          <div className="contenedor w-full p-10 pt-6">
            <div className="w-full flex flex-col">
              <label className="w-full text-sm" htmlFor="paymentMethod">
                Método de Pago
              </label>
              <select
                className="w-full h-7 focus:outline-none bg-slate-200 text-sm"
                name="paymentMethod"
                id="paymentMethod"
                value={formValues.paymentMethod}
                onChange={onInputChange}
              >
                <option value="">--Seleccione--</option>
                {paymentMethods.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label className="w-full block text-sm" htmlFor="comments">
                Comentarios
              </label>
              <textarea
                className="bg-slate-200 focus:outline-none w-full h-28 resize-none"
                name="comments"
                id="comments"
                value={formValues.comments}
                onChange={onInputChange}
              />
            </div>
            <div className="input-btn">
              <button
                className="w-full max-w-md h-10 flex justify-center items-center m-auto mt-3 bg-customDeepBlue text-white hover:bg-customMainColor transition-colors duration-500 ease-linear font-bold"
                type="submit"
              >
                COMPLETAR
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ModalNewPurchasing;
