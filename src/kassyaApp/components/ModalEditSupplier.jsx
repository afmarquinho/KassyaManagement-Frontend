import { useState } from "react";
import styled from "styled-components";
import Alerta from "./Alerta";
import { useSelector } from "react-redux";
import useFormData from "../../helpers/useFormData";


const ModalEditSupplier = () => {
  // const supplier = useSelector((state) => state.supplier.oneSupplier);
 
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

  // const initialValues = {
  //   businessName: supplier.businessName,
  //   nif: supplier.nif,
  //   entity: supplier.entity,
  //   country: supplier.country,
  //   city: supplier.city,
  //   address: supplier.address,
  //   zipCode: supplier.zipCode,
  //   tel: supplier.tel,
  //   webSite: supplier.webSite,
  //   bank: supplier.bank,
  //   bankingAccount: supplier.bankingAccount,
  //   paymentTerms: supplier.paymentTerms,
  //   contactName: supplier.contactName,
  //   contactNumber: supplier.contactNumber,
  //   contactEmail: supplier.contactEmail,
  // };
   const { formData, handleChange, resetForm } = useFormData(initialValues);

   const [activeModal, setActiveModal] = useState(false);

  const abrirModal = () => {
    setActiveModal(true);

  };

  const cerrarModal = () => {
    setActiveModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };
  return (
    <div className="App">
      <Button className="btn btn-primary me-5" onClick={abrirModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        Editar
      </Button>

       <ModalWrapper visible={activeModal}>
        <ModalContent>
          <Cerrar onClick={cerrarModal}>&times;</Cerrar>

          <Form onSubmit={handleSubmit}>
            <h3 className="titulo">Editar</h3>
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
                      // value={formData.businessName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="nif">
                      Identificación(ID, NIT, NIF, RIF, ETC)
                    </label>
                    <input
                      type="text"
                      name="nif"
                      // value={formData.nif}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="group group2">
                  <div className="input-group">
                    <label htmlFor="entity">Contribuyente</label>
                    <select
                      name="entity"
                      id=""
                      // value={formData.entity}
                      onChange={handleChange}
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
                      // value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="city">Ciudad</label>
                    <input
                      name="city"
                      type="text"
                      // value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="group group3">
                  <div className="input-group">
                    <label htmlFor="address">Dirección</label>
                    <input
                      name="address"
                      type="text"
                      // value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="zipCode">Código Postal</label>
                    <input
                      name="zipCode"
                      type="number"
                      // value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="group group4">
                  <div className="input-group">
                    <label htmlFor="tel">Teléfono</label>
                    <input
                      name="tel"
                      type="tel"
                      // value={formData.tel}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="webSite">Sitio Web</label>
                    <input
                      name="webSite"
                      type="tel"
                      // value={formData.webSite}
                      onChange={handleChange}
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
                      // value={formData.bank}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="bankingAccount">
                      Número de cuenta bancaria
                    </label>
                    <input
                      name="bankingAccount"
                      type="text"
                      // value={formData.bankingAccount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="group group6">
                  <div className="input-group">
                    <label htmlFor="paymentTerms">Plazo de pago en días</label>
                    <input
                      name="paymentTerms"
                      type="number"
                      // value={formData.paymentTerms}
                      onChange={handleChange}
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
                      // value={formData.contactName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="contactNumber">Teléfono de Contacto</label>
                    <input
                      name="contactNumber"
                      type="tel"
                      // value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="group group8">
                  <div className="input-group">
                    <label htmlFor="contactEmail">Email de Contacto</label>
                    <input
                      name="contactEmail"
                      type="email"
                      // value={formData.contactEmail}
                      onChange={handleChange}
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
    </div>
  );
};

export default ModalEditSupplier;
const Button = styled.button`
  border-radius: 0;
  width: 10rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  svg {
    width: 2rem;
  }
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
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
