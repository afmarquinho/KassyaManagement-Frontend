import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchTerm } from "../../redux/slices/supplierSlice";

const SearchSupplier = () => {
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <form className="flex items-center px-3 w-72 mb-3 bg-customSoftGray h-8">
      <input
        className="bg-transparent h-full w-full focus:outline-none"
        type="search"
        placeholder="Buscar..."
        onChange={onInputChange}
      />

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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </form>
  );
};

export default SearchSupplier;

const Form = styled.form`
  display: flex;
  width: 25rem;
  border: 1px solid gray;
  background-color: ${(props) => props.theme.softGray};
  margin-bottom: 1rem;
  padding: 0.5rem;

  input {
    border: none;
    padding: 0;
    background-color: ${(props) => props.theme.softGray};
    outline: none;
    flex-basis: 90%;
  }
  svg {
    width: 2rem;
    margin: 0;
    flex-basis: 10%;
  }
`;
