import { useEffect, useState } from "react";
import styled from "styled-components";
import Alerta from "./Alerta";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSupplier } from "../../redux/thunks/supplierThunks";

const ModalEditSupplier = ({ supplier, activeModal, setActiveModal }) => {
  const [businessName, setBusinessName] = useState(supplier.businessName);
  const [nif, setNif] = useState(supplier.nif);
  const [entity, setEntity] = useState(supplier.entity);
  const [country, setCountry] = useState(supplier.country);
  const [city, setCity] = useState(supplier.city);
  const [address, setAddress] = useState(supplier.address);
  const [zipCode, setZipCode] = useState(supplier.zipCode);
  const [tel, setTel] = useState(supplier.tel);
  const [webSite, setWebSite] = useState(supplier.webSite);
  const [bank, setBank] = useState(supplier.bank);
  const [bankingAccount, setBankingAccount] = useState(supplier.bankingAccount);
  const [paymentTerms, setPaymentTerms] = useState(supplier.paymentTerms);
  const [contactName, setContactName] = useState(supplier.contactName);
  const [contactNumber, setContactNumber] = useState(supplier.contactNumber);
  const [contactEmail, setContactEmail] = useState(supplier.contactEmail);

  const params = useParams();
  const dispatch = useDispatch();

  const cerrarModal = () => {
    setActiveModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      businessName,
      nif,
      entity,
      country,
      city,
      address,
      zipCode,
      tel,
      webSite,
      bank,
      bankingAccount,
      paymentTerms,
      contactName,
      contactNumber,
      contactEmail,
    };

    dispatch(editSupplier(params.id, formData));
  };
  return (
    <ModalWrapper $activeModal={activeModal}>
      <ModalContent>
        <Cerrar onClick={cerrarModal}>&times;</Cerrar>
        {/* //TODO: AGREGAR EL COMPONENRTE DE LA ALERTA */}
        <form className=" w-full max-w-3xl m-auto bg-white" onSubmit={onSubmit}>
          <h3 className="bg-customDeepBlue w-full h-20  flex items-center justify-center uppercase text-white">
            Editar Proveedor: {supplier.businessName}
          </h3>
          <div className="contenedor w-full p-10 pt-6">
            {/* <Alerta status={status} msg={msg} />  */}

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
                    value={businessName || ""}
                    onChange={(e) => setBusinessName(e.target.value)}
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
                    value={nif || ""}
                    onChange={(e) => setNif(e.target.value)}
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
                    value={entity || ""}
                    onChange={(e) => setEntity(e.target.value)}
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
                    value={country || ""}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={city || ""}
                    onChange={(e) => setCity(e.target.value)}
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
                    value={address || ""}
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
                    value={zipCode || ""}
                    onChange={(e) => setZipCode(e.target.value)}
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
                    value={tel || ""}
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
                    value={webSite || ""}
                    onChange={(e) => setWebSite(e.target.value)}
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
                    value={bank || ""}
                    onChange={(e) => setBank(e.target.value)}
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
                    value={bankingAccount || ""}
                    onChange={(e) => setBankingAccount(e.target.value)}
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
                    value={paymentTerms || ""}
                    onChange={(e) => setPaymentTerms(e.target.value)}
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
                    value={contactName || ""}
                    onChange={(e) => setContactName(e.target.value)}
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
                    value={contactNumber || ""}
                    onChange={(e) => setContactNumber(e.target.value)}
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
                    value={contactEmail || ""}
                    onChange={(e) => setContactEmail(e.target.value)}
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalEditSupplier;

const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  z-index: 400;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  // background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  // border: 1px solid #888;
  width: 80%;
`;

const Cerrar = styled.span`
  color: white;
  float: right;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;
