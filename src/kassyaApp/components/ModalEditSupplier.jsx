import { useState } from "react";
import styled from "styled-components";

const ModalEditSupplier = () => {
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
        <ModalContenido>
          <Cerrar onClick={cerrarModal}>&times;</Cerrar>
          <h2>Formulario en el Modal</h2>
          <Formulario onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </Formulario>
        </ModalContenido>
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

const ModalContenido = styled.div`
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

const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
  }
`;
