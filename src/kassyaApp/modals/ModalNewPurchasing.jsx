import { useDispatch, useSelector } from "react-redux";
import useForm from "../../helpers/useForm";
import { Alerta } from "../components";
import { hasNonEmptyValues } from "../../helpers/hasNonEmptyValues";
import { setMsg, setStatus, addNew } from "../../redux/slices/purchasingSlice";

const intialValues = {
  name: "",
  ref: "",
  supplier: "",
  amount: "",
  unit: "",
  unitPrice: "",
};
const ModalNewPurchasing = ({ setActModal }) => {
  const { formValues, resetForm, onInputChange } = useForm(intialValues);
  const suppliers = useSelector((state) => state.supplier.data);
  const msg = useSelector((state) => state.purchasing.msg);
  const status = useSelector((state) => state.purchasing.status);

  const dispatch = useDispatch();

  const onClose = () => {
    setActModal(false);
    //? Me aseguro que al cerrar el modal no se vaya una alerta sin setear que me vaya a afectar en otro formulario
    dispatch(setMsg(""));
    dispatch(setStatus(""));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!hasNonEmptyValues(formValues)) {
      dispatch(setMsg("Diligencie todos los campos del artículo"));
      dispatch(setStatus("error"));
      return;
    }
    dispatch(addNew(formValues));
    dispatch(setMsg(""));
    dispatch(setStatus(""));
    resetForm(intialValues);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 pt-20 bg-black bg-opacity-80">
      <form
        className=" w-11/12 md:w-4/5 lg:w-1/3 max-w-lg m-auto bg-white"
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
          Agregar artículo
        </h3>
        {msg && <Alerta status={status} msg={msg} />}

        <div className="contenedor w-full p-10 pt-6">
          <div className="w-full flex flex-col">
            <label className="w-full" htmlFor="name">
              Nombre del Item
            </label>
            <input
              className="w-full h-7 focus:outline-none bg-slate-200"
              type="text"
              name="name"
              value={formValues.name}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="w-full" htmlFor="ref">
              Referencia
            </label>
            <input
              className="w-full h-7 focus:outline-none bg-slate-200"
              name="ref"
              type="text"
              value={formValues.ref}
              onChange={onInputChange}
            />
          </div>

          <div className="input-group">
            <label className="w-full" htmlFor="supplier">
              Proveedor
            </label>
            <select
              className="w-full h-7 focus:outline-none bg-slate-200"
              name="supplier"
              id=""
              value={formValues.supplier}
              onChange={onInputChange}
            >
              <option value="">-- Seleccione --</option>
              {suppliers.map((supplier) => (
                <option key={supplier.nif} value={supplier.businessName}>
                  {supplier.businessName}
                </option>
              ))}
            </select>
            {/* //TODO: CAMBIAR EN EL VALUE EL ID DE ACUERDO CON EL SCHEMA */}
          </div>
          <div className="input-group">
            <label className="w-full" htmlFor="amount">
              Cantidad
            </label>
            <input
              className="w-full h-7 focus:outline-none bg-slate-200"
              name="amount"
              type="number"
              value={formValues.amount}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="w-full" htmlFor="unit">
              Unidad
            </label>
            <select
              className="w-full h-7 focus:outline-none bg-slate-200"
              name="unit"
              id=""
              value={formValues.unit}
              onChange={onInputChange}
            >
              <option value="">-- Seleccione --</option>
              <option value="unidad">Unidad</option>
              <option value="g">Gramos</option>
              <option value="l">Litros</option>
              <option value=",k">Kilogramos</option>
            </select>
          </div>
          <div className="input-group">
            <label className="w-full" htmlFor="unitPrice">
              Precio Unitario en COP
            </label>
            <input
              className="w-full h-7 focus:outline-none bg-slate-200"
              name="unitPrice"
              type="number"
              value={formValues.unitPricet}
              onChange={onInputChange}
            />
          </div>
          <div className="input-btn">
            <button
              className="w-full max-w-md h-10 flex justify-center items-center m-auto mt-3 bg-customDeepBlue text-white hover:bg-customMainColor transition-colors duration-500 ease-linear font-bold"
              type="submit"
            >
              CREAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalNewPurchasing;
