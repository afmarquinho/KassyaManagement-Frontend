import SupplierLayout from "../../../layout/SupplierLayout";
import useForm from "../../../../helpers/useForm";
import { addSupplierAsync } from "../../../../redux/thunks/supplierThunks";
import { useDispatch, useSelector } from "react-redux";
import Alerta from "../../../components/Alerta";
import Spinner from "../../../components/Spinner";
import { categories } from "../../../../db/db";
import { useState } from "react";
import { setMsg, setStatus } from "../../../../redux/slices/supplierSlice";

const initialValues = {
  businessName: "",
  nif: "",
  entity: "",
  country: "",
  city: "",
  address: "",
  zipCode: "",
  tel: "",
  webSite: "",
  bank: "",
  bankingAccount: "",
  paymentTerms: "",
  contactName: "",
  contactNumber: "",
  contactEmail: "",
  category: "",
};

const AddSupplierPage = () => {
  const { formValues, onInputChange, resetForm } = useForm(initialValues);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.supplier.status);
  const msg = useSelector((state) => state.supplier.msg);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addSupplierAsync(formValues));
    setLoading(true);
    resetForm(initialValues);

    //? setear a false el spinner loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      dispatch(setMsg(""));
      dispatch(setStatus(""));
      
    }, 4000);
  };
  //TODO: PENDIENTE la validacion del forumario
  return (
    <SupplierLayout>
      <>
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={onSubmit}
            className=" w-11/12 md:w-4/5 lg:w-3/5 max-w-3xl m-auto bg-white"
          >
            <h3 className="bg-customDeepBlue w-full h-20  flex items-center justify-center uppercase text-white">
              Nuevo Proveedor
            </h3>
            {msg && <Alerta status={status} msg={msg} />}
            <div className="contenedor w-full p-10 pt-6">
              <>
                <h4 className="bg-customDeepBlueGray w-full h-10 flex items-center justify-center mb-3 font-semibold text-white">
                  Información del Proveedor
                </h4>
                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="businessName">
                      Razón Social
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      type="text"
                      name="businessName"
                      value={formValues.businessName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="nif">
                      Identificación(ID, NIT, NIF, RIF, ETC)
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      type="text"
                      name="nif"
                      value={formValues.nif}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="category">
                      Categoría
                    </label>
                    <select
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="category"
                      id="category"
                      value={formValues.category}
                      onChange={onInputChange}
                    >
                      <option value="">--Seleccione</option>
                      {categories.map((category) => (
                        <option value={category} ker={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="entity">
                      Contribuyente
                    </label>
                    <select
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="entity"
                      id=""
                      value={formValues.entity}
                      onChange={onInputChange}
                    >
                      <option value="">-- Seleccione --</option>
                      <option value="natural">Persona Natural</option>
                      <option value="legal">Persona Jurídica</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/3 flex flex-col">
                    <label className="w-full" htmlFor="country">
                      País
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="country"
                      type="text"
                      value={formValues.country}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col">
                    <label className="w-full" htmlFor="city">
                      Ciudad
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="city"
                      type="text"
                      value={formValues.city}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col">
                    <label className="w-full" htmlFor="zipCode">
                      Código Postal
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="zipCode"
                      type="number"
                      value={formValues.zipCode}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="address">
                      Dirección
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="address"
                      type="text"
                      value={formValues.address}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="tel">
                      Teléfono
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="tel"
                      type="tel"
                      value={formValues.tel}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="webSite">
                      Sitio Web
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="webSite"
                      type="tel"
                      value={formValues.webSite}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col"></div>
                </div>

                <h4 className="bg-customDeepBlueGray w-full h-10 flex items-center justify-center my-3 font-semibold text-white">
                  Información Bancaria
                </h4>
                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="bank">
                      Banco
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="bank"
                      type="text"
                      value={formValues.bank}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="bankingAccount">
                      Número de cuenta bancaria
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="bankingAccount"
                      type="text"
                      value={formValues.bankingAccount}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="paymentTerms">
                      Plazo de pago en días
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="paymentTerms"
                      type="number"
                      value={formValues.paymentTerms}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col"></div>
                </div>

                <h4 className="bg-customDeepBlueGray w-full h-10 flex items-center justify-center my-3 font-semibold text-white">
                  Información del Contacto
                </h4>
                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="contactName">
                      Nombre de Contacto
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="contactName"
                      type="text"
                      value={formValues.contactName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="contactNumber">
                      Teléfono de Contacto
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="contactNumber"
                      type="tel"
                      value={formValues.contactNumber}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="w-full" htmlFor="contactEmail">
                      Email de Contacto
                    </label>
                    <input
                      className="w-full h-7 focus:outline-none bg-slate-200"
                      name="contactEmail"
                      type="email"
                      value={formValues.contactEmail}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col"></div>
                </div>

                <button
                  type="submit"
                  className="w-3/4 md:w-1/2 max-w-md h-10 flex justify-center items-center m-auto mt-3 bg-customDeepBlue text-white hover:bg-customMainColor transition-colors duration-500 ease-linear font-bold"
                >
                  CREAR
                </button>
              </>
            </div>
          </form>
        )}
      </>
    </SupplierLayout>
  );
};

export default AddSupplierPage;
