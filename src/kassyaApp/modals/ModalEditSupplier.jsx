import { useEffect, useState } from "react";
import styled from "styled-components";
import Alerta from "../components/Alerta";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSupplier } from "../../redux/thunks/supplierThunks";
import useForm from "../../helpers/useForm";
import { setMsg, setStatus } from "../../redux/slices/supplierSlice";

const ModalEditSupplier = ({ supplier, activeModal, setActiveModal }) => {
  const initialValues = {
    businessName: supplier.businessName,
    nif: supplier.nif,
    entity: supplier.entity,
    country: supplier.country,
    city: supplier.city,
    address: supplier.address,
    zipCode: supplier.zipCode,
    tel: supplier.tel,
    webSite: supplier.webSite,
    bank: supplier.bank,
    bankingAccount: supplier.bankingAccount,
    paymentTerms: supplier.paymentTerms,
    contactNumber: supplier.contactNumber,
    contactName: supplier.contactName,
    contactEmail: supplier.contactEmail,
  };
  const { formValues, resetForm, onInputChange } = useForm(initialValues);
  const status = useSelector((state) => state.supplier.status);
  const msg = useSelector((state) => state.supplier.msg);

  const params = useParams();
  const dispatch = useDispatch();

  const onClose = () => {
    setActiveModal(false);
    //? Me aseguro que al cerrar el modal no se vaya una alerta sin setear que me vaya a afectar en otro formulario
    dispatch(setMsg(""));
    dispatch(setStatus(""));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(editSupplier(params.id, formValues));

    setTimeout(() => {
      dispatch(setMsg(""));
      dispatch(setStatus(""));
      setActiveModal(false);
    }, 2000);
  };
  return (
    <div className="block fixed z-[60] left-0 right-0 bottom-0 top-0 overflow-auto pt-10  bg-black bg-opacity-80">
      {/* //TODO: AGREGAR EL COMPONENRTE DE LA ALERTA */}
      <form className=" w-full max-w-3xl m-auto bg-white" onSubmit={onSubmit}>
        {/* <Cerrar className="absolute"onClick={cerrarModal}>&times;</Cerrar> */}
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
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="w-full h-20  flex items-center justify-center uppercase text-cyan-100 bg-cyan-700">
          Editar: {supplier.businessName}
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
                  value={formValues.businessName || ""}
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
                  value={formValues.nif || ""}
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
                  value={formValues.entity || ""}
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
                  value={formValues.country || ""}
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
                  value={formValues.city || ""}
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
                  value={formValues.address || ""}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={formValues.zipCode || ""}
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
                  value={formValues.tel || ""}
                  onChange={(e) => setTel(e.target.value)}
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
                  value={formValues.webSite || ""}
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
                  value={formValues.bank || ""}
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
                  value={formValues.bankingAccount || ""}
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
                  value={formValues.paymentTerms || ""}
                  onChange={onInputChange}
                />
              </div>
              <div className="input-group"></div>
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
                  value={formValues.contactName || ""}
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
                  value={formValues.contactNumber || ""}
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
                  value={formValues.contactEmail || ""}
                  onChange={onInputChange}
                />
              </div>
              <div className="input-group"></div>
            </div>

            <button
              type="submit"
              className="w-3/4 md:w-1/2 max-w-md h-10 flex justify-center items-center m-auto mt-3 bg-customDeepBlue text-white hover:bg-customMainColor transition-colors duration-500 ease-linear font-bold"
            >
              EDITAR
            </button>
          </>
        </div>
      </form>
    </div>
  );
};

export default ModalEditSupplier;
