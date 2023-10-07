import { useParams } from "react-router-dom";
import SupplierLayout from "../../../layout/SupplierLayout";
import { useEffect } from "react";
import { getOneSuppilerAsync } from "../../../../redux/thunks/supplierThunks";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const SupplierViewPage = () => {
  const params = useParams();
  const supplier = useSelector((state) => state.supplier.oneSupplier);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneSuppilerAsync(params.id));
  }, []);
  useEffect(() => {
    console.log(supplier);
  }, [supplier]);

  return (
    <SupplierLayout>
      <>
        <Container>
          <Row>
            <Col>
              <Card1>
                <h2>{supplier.businessName}</h2>
                <div>
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
                </div>
              </Card1>
              <Card2>
                <h3>Datos de Contacto</h3>
                <div>
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
                </div>
              </Card2>
            </Col>
          </Row>
        </Container>
      </>
    </SupplierLayout>
  );
};

export default SupplierViewPage;

const Card1 = styled.div`
  width: 90%;
  max-width: 30rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;

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
const Card2 = styled(Card1)`
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
