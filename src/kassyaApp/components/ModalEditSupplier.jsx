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

        <Form onSubmit={onSubmit}>
          <h3 className="titulo">Editar: {supplier.businessName}</h3>
          <div className="container">
            {/* <Alerta status={status} msg={msg} />  */}

            <>
              <h4>Información del Proveedor</h4>
              <div className="group group1">
                <div className="input-group">
                  <label htmlFor="businessName">Razón Social</label>
                  <input
                    type="text"
                    name="businessName"
                    value={businessName || ""}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="nif">
                    Identificación(ID, NIT, NIF, RIF, ETC)
                  </label>
                  <input
                    type="text"
                    name="nif"
                    value={nif || ""}
                    onChange={(e) => setNif(e.target.value)}
                  />
                </div>
              </div>
              <div className="group group2">
                <div className="input-group">
                  <label htmlFor="entity">Contribuyente</label>
                  <select
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
                <div className="input-group">
                  <label htmlFor="country">País</label>
                  <input
                    name="country"
                    type="text"
                    value={country || ""}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    name="city"
                    type="text"
                    value={city || ""}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="group group3">
                <div className="input-group">
                  <label htmlFor="address">Dirección</label>
                  <input
                    name="address"
                    type="text"
                    value={address || ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="zipCode">Código Postal</label>
                  <input
                    name="zipCode"
                    type="number"
                    value={zipCode || ""}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="group group4">
                <div className="input-group">
                  <label htmlFor="tel">Teléfono</label>
                  <input
                    name="tel"
                    type="tel"
                    value={tel || ""}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="webSite">Sitio Web</label>
                  <input
                    name="webSite"
                    type="tel"
                    value={webSite || ""}
                    onChange={(e) => setWebSite(e.target.value)}
                  />
                </div>
              </div>

              <h4>Información Bancaria</h4>
              <div className="group group5">
                <div className="input-group">
                  <label htmlFor="bank">Banco</label>
                  <input
                    name="bank"
                    type="text"
                    value={bank || ""}
                    onChange={(e) => setBank(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="bankingAccount">
                    Número de cuenta bancaria
                  </label>
                  <input
                    name="bankingAccount"
                    type="text"
                    value={bankingAccount || ""}
                    onChange={(e) => setBankingAccount(e.target.value)}
                  />
                </div>
              </div>

              <div className="group group6">
                <div className="input-group">
                  <label htmlFor="paymentTerms">Plazo de pago en días</label>
                  <input
                    name="paymentTerms"
                    type="number"
                    value={paymentTerms || ""}
                    onChange={(e) => setPaymentTerms(e.target.value)}
                  />
                </div>
                <div className="input-group"></div>
              </div>

              <h4>Información del Contacto</h4>
              <div className="group group7">
                <div className="input-group">
                  <label htmlFor="contactName">Nombre de Contacto</label>
                  <input
                    name="contactName"
                    type="text"
                    value={contactName || ""}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="contactNumber">Teléfono de Contacto</label>
                  <input
                    name="contactNumber"
                    type="tel"
                    value={contactNumber || ""}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="group group8">
                <div className="input-group">
                  <label htmlFor="contactEmail">Email de Contacto</label>
                  <input
                    name="contactEmail"
                    type="email"
                    value={contactEmail || ""}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div className="input-group"></div>
              </div>

              <div className="input-btn">
                <BtnSubmmit type="submit" className="btn-crear">
                  EDITAR
                </BtnSubmmit>
              </div>
            </>
          </div>
        </Form>
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
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const Cerrar = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const Form = styled.form`
  background-color: ${(props) => props.theme.white};
  width: 90%;
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
