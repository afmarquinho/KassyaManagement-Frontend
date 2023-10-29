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
        <form
          className=" w-11/12 md:w-4/5 lg:w-1/3 max-w-lg m-auto bg-white"
          onSubmit={onCreateArticle}
        >
          <h3 className="bg-customDeepBlue w-full h-20  flex items-center justify-center uppercase text-white">
            Nuevo Artículo
          </h3>
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
