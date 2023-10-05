import styled from "styled-components";
import InventoryLayout from "../../../layout/InventoryLayout";
import { suppliers } from "../../../../db/db";
import useForm from "../../../../helpers/useForm";
import { addItemAsync } from "../../../../redux/thunks/inventoryThunks";
import { useDispatch } from "react-redux";
const initialValues = {
  name: "",
  ref: "",
  supplier: "",
  amount: "",
  unit: "",
  unitPrice: "",
};

const AddItemPage = () => {
  const { formValues, onInputChange, onReset } = useForm(initialValues);
  const dispatch = useDispatch();

  const onCreateArticle = async (e) => {
    e.preventDefault();
    console.log(formValues);
    await dispatch(addItemAsync(formValues));
  };

  return (
    <InventoryLayout>
      <>
        <Form onSubmit={onCreateArticle}>
          <h3 className="titulo">Registrar Nuevo Ítem</h3>
          <div className="container">
            <div className="input-group">
              <label htmlFor="name">Nombre del Item</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={onInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="ref">Referencia</label>
              <input
                name="ref"
                type="text"
                value={formValues.ref}
                onChange={onInputChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="supplier">Proveedor</label>
              <select
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
              <label htmlFor="amount">Cantidad</label>
              <input
                name="amount"
                type="number"
                value={formValues.amount}
                onChange={onInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="unit">Unidad</label>
              <select
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
              <label htmlFor="unitPrice">Precio Unitario en COP</label>
              <input
                name="unitPrice"
                type="number"
                value={formValues.unitPricet}
                onChange={onInputChange}
              />
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

export default AddItemPage;

const Form = styled.form`
  background-color: ${(props) => props.theme.white};
  width: 90%;
  max-width: 50rem;
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
    padding: 1rem 2rem;
    position: relative;
    @media (min-width: 576px) {
      padding: 1.2rem 3rem;
    }
    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
  }
  .container .input-group {
    display: flex;
    flex-direction: column;
  }

  .container .input-group input {
    border: none;
    background-color: ${(props) => props.theme.softGray};
    outline: none;
    height: 3rem;
  }
  .container .input-group select {
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
