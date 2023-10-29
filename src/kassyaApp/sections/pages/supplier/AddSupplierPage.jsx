import styled from "styled-components";
import SupplierLayout from "../../../layout/SupplierLayout";
import useForm from "../../../../helpers/useForm";
import { addSupplierAsync } from "../../../../redux/thunks/supplierThunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Alerta from "../../../components/Alerta";
import Spinner from "../../../components/Spinner";
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
};

const AddSupplierPage = () => {
  const { formValues, onInputChange, resetForm } = useForm(initialValues);
  const dispatch = useDispatch();

  const status = useSelector((state) => state.supplier.status);
  const msg = useSelector((state) => state.supplier.msg);
  const loading = useSelector((state) => state.supplier.loading);

  const onCreateSupplier = async (e) => {
    e.preventDefault();
    dispatch(addSupplierAsync(formValues));

    //setear a null la alerta
    setTimeout(() => {
      dispatch(setStatus("ok"));
      dispatch(setMsg(null));
    }, 3000);
    if (status === "ok") {
      resetForm();
    }
  };
  //TODO: PENDIENTE ARREGLAR EL RESETEO  DEL FORMULARIO

  return (
    <SupplierLayout>
      <>
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={onCreateSupplier}
            className=" w-11/12 md:w-4/5 lg:w-3/5 max-w-3xl m-auto bg-white"
          >
            <h3 className="bg-customDeepBlue w-full h-20  flex items-center justify-center uppercase text-white">
              Nuevo Proveedor
            </h3>
            <div className="contenedor w-full p-10 pt-6">
              <Alerta status={status} msg={msg} />
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
                  <div className="w-full md:w-1/3 flex flex-col">
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
const Form = styled.form`
  max-width: 90rem;
  margin: 0 auto;
  h3 {
    background-color: ${(props) => props.theme.deepBlue};
    color: ${(props) => props.theme.white};
    padding: 2rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    @media (min-width: 576px) {
      padding: 3rem;
    }
    @media (min-width: 768px) {
      padding: 3.5rem;
    }
  }
  .container {
    width: 100%;
    padding: 1rem 2rem;
    position: relative;
    @media (min-width: 576px) {
      padding: 1.2rem 3rem;
    }
    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
  }
  .container h4 {
    margin-top: 1rem;
    padding: 0.8rem 0 0.8rem 1rem;
    background-color: ${(props) => props.theme.deepGray};
    color: ${(props) => props.theme.white};
  }
  .container .group {
    display: flex;
    flex-direction: column;
    gap: 0;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 1rem;
    }
  }
  .container .group .input-group {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .container .group .input-group input {
    border: none;
    background-color: ${(props) => props.theme.softGray};
    outline: none;
    height: 3rem;
  }
  .container .group .input-group select {
    border: none;
    background-color: ${(props) => props.theme.softGray};
    outline: none;
    height: 3rem;
  }

  .container .input-btn {
    width: 100%;
    padding: 2rem 0 0 0;
  }
`;

const BtnSubmmit = styled.button`
  width: 100%;
  max-width: 25rem;
  margin: auto;
  background-color: ${(props) => props.theme.deepBlue};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.5rem;
  display: block;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.deepGray};
  }
`;
