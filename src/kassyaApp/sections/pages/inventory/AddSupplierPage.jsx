import styled from "styled-components";
import InventoryLayout from "../../../layout/InventoryLayout";

const AddSupplierPage = () => {
  return (
    <InventoryLayout>
      <>
        <Form>
          <h3 className="titulo">Registrar Nuevo Proveedor</h3>
          <div className="container">
            <h4>Información del Proveedor</h4>
            <div className="group group1">
              <div className="input-group">
                <label htmlFor="name">Razón Social</label>
                <input
                  type="text"
                  name="name"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="nif">
                  Identificación(ID, NIT, NIF, RIF, ETC)
                </label>
                <input
                  type="text"
                  name="nif"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
            </div>
            <div className="group group2">
              <div className="input-group">
                <label htmlFor="entity">Contribuyente</label>
                <select name="entity" id="">
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
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
            </div>

            <div className="group group3">
              <div className="input-group">
                <label htmlFor="address">Dirección</label>
                <input
                  name="address"
                  type="text"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="zipCode">Código Postal</label>
                <input
                  name="zipCode"
                  type="number"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
            </div>

            <div className="group group4">
            <div className="input-group">
                <label htmlFor="tel">Teléfono</label>
                <input
                  name="tel"
                  type="tel"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="webSite">Sitio Web</label>
                <input
                  name="webSite"
                  type="tel"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
            </div>

            <h4>Información Bancaria</h4>
            <div className="group group5">
              <div className="input-group">
                <label htmlFor="bank">Banco</label>
                <input
                  name="banck"
                  type="text"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="bankingAccount">
                  Número de cuenta bancaria
                </label>
                <input
                  name="bankingAccount"
                  type="text"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
                />
              </div>
            </div>

            <div className="group group6">
              <div className="input-group">
                <label htmlFor="paymentTerms">Plazo de pago en días</label>
                <input
                  name="paymentTerms"
                  type="number"
                  // value={formValues.nombre}
                  // onChange={onInputChange}
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
                  // value={formValues.descripcion}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="contactNumber">Teléfono de Contacto</label>
                <input
                  name="contactNumber"
                  type="tel"
                  // value={formValues.descripcion}
                  // onChange={onInputChange}
                />
              </div>
            </div>

            <div className="group group7">
              <div className="input-group">
                <label htmlFor="contactEmail">Email de Contacto</label>
                <input
                  name="contactEmail"
                  type="email"
                  // value={formValues.descripcion}
                  // onChange={onInputChange}
                />
              </div>
              <div className="input-group"></div>
            </div>

            <div className="input-btn">
              <BtnSubmmit type="submit" className="btn-crear">
                CREAR
              </BtnSubmmit>
            </div>
          </div>
        </Form>
      </>
    </InventoryLayout>
  );
};

export default AddSupplierPage;
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
