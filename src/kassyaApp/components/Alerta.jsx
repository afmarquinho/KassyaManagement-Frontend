import styled from "styled-components";

const Div = styled.div`
  margin: 0;
  .warning {
    margin: 0;
    color: #b71c1c;
    font-size: 1.3rem;
  }
  .success {
    margin: 0;
    background-color: #2196f3;
    font-size: 1.4rem;
    color: white;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0 1rem 0 1rem;
  }
  .error {
    font-size: 1.4rem;
    margin: 0;
    background-color: red;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
`;

const Alerta = ({ mensajeAlerta }) => {
  return (
    <Div>
      <p
        className={`${
          mensajeAlerta.warning
            ? "warning"
            : mensajeAlerta.ok
            ? "success"
            : "error"
        }`}
      >
        {mensajeAlerta.msg}
      </p>
    </Div>
  );
};

export default Alerta;
