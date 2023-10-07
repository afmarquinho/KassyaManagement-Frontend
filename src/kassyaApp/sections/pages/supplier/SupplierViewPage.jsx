import { useParams } from "react-router-dom";
import SupplierLayout from "../../../layout/SupplierLayout";
import { useEffect } from "react";
import { getOneSuppilerAsync } from "../../../../redux/thunks/supplierThunks";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ModalEditSupplier } from "../../../components";

const SupplierViewPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneSuppilerAsync(params.id));
  }, []);
  const supplier = useSelector((state) => state.supplier.oneSupplier);

  return (
    <SupplierLayout>
      <>
        <Container>
          <Row>
            <Col xs={12} className="mb-5 d-flex">
              <ModalEditSupplier /> 
              <Button className="btn btn-danger">
                {" "}
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Eliminar
              </Button>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <Card1>
                <h2>{supplier.businessName}</h2>
                <div>
                  <p>
                    ID/NIT: <span>{supplier.nif}</span>
                  </p>
                  <p>
                    Persona: <span>{supplier.entity}</span>
                  </p>
                  <p>
                    País: <span>{supplier.country}</span>
                  </p>
                  <p>
                    Ciudad: <span>{supplier.city}</span>
                  </p>
                  <p>
                    Dirección: <span>{supplier.address}</span>
                  </p>
                  <p>
                    Código Postal: <span>{supplier.zipCode}</span>
                  </p>
                  <p>
                    Teléfono: <span>{supplier.tel}</span>
                  </p>
                  <p>
                    Sitio Web: <span>{supplier.webSite}</span>
                  </p>
                </div>
              </Card1>
            </Col>
            <StyledCol xs={12} md={6} lg={7}>
              <Card2>
                <h3>Información Bancanria</h3>
                <div>
                  <p>
                    Banco: <span>{supplier.bank}</span>
                  </p>
                  <p>
                    N° de Cuenta: <span>{supplier.bankingAccount}</span>
                  </p>
                  <p>
                    Plazo de Pago: <span>{supplier.paymentTerms}</span> días
                  </p>
                </div>
              </Card2>
              <Card2>
                <h3>Datos de Contacto</h3>
                <div>
                  <p>
                    Nombre: <span>{supplier.contactName}</span>
                  </p>
                  <p>
                    Teléfono: <span>{supplier.contactNumber}</span>
                  </p>
                  <p>
                    email: <span>{supplier.contactEmail}</span>
                  </p>
                </div>
              </Card2>
            </StyledCol>
          </Row>
        </Container>
      </>
    </SupplierLayout>
  );
};

export default SupplierViewPage;

const Card1 = styled.div`
  width: 90%;
  max-width: 50rem;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;

  h2 {
    font-size: 2rem;
    width: 100%;
    margin: 0;
    background-color: ${(props) => props.theme.deepBlue};
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  div {
    padding: 1rem;
  }
  div p {
    margin: 1rem 0;
    span {
      font-weight: bold;
    }
  }
`;
const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Card2 = styled(Card1)`
  max-width: 30rem;
  margin: 0;
  flex-basis: 48%;
  h3 {
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.deepBlue};
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
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
