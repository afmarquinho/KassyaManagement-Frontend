import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const InventoryLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <StyledCol xs={12} md={2} lg={1}>
            <h2 className="inventory">INVENTARIO</h2>
            <BtnMenu1
              to="/inventory/add-item"
              className={
                location.pathname === "/inventory/add-item" ? "active" : ""
              }
            >
              Añadir Ítem
            </BtnMenu1>
            <BtnMenu
              to="/inventory/add-supplier"
              className={
                location.pathname === "/inventory/add-supplier" ? "active" : ""
              }
            >
              Añadir Proveedor
            </BtnMenu>
            <BtnMenu
              to="/"
              className={
                location.pathname === "/inventory" ? "active" : ""
              }
            >
              Ver Inventario
            </BtnMenu>
          </StyledCol>
          <Col xs={12} md={10} lg={11} className="pt-4">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InventoryLayout;

const StyledCol = styled(Col)`
  height: 100vh;
  padding: 0;
  background-color: ${(props) => props.theme.blueGray};
  h2 {
    padding: 1.2rem 0 1.2rem 0.5rem;
    margin: 0;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.black};
  }
  .active {
    background-color: ${(props) => props.theme.deepGray};
  }
`;
const BtnMenu = styled(Link)`
  width: 100%;
  padding: 1rem 0 1rem 0.5rem;
  font-size: 1.3rem;
  border: none;
  border-bottom: 1px solid #37474f;
  background-color: transparent;
  color: ${(props) => props.theme.secondaryText};
  transition: background-color 0.5s ease;
  display: flex;
  &:hover {
    background-color: ${(props) => props.theme.deepGray};
  }
`;
const BtnMenu1 = styled(BtnMenu)`
  border-top: 1px solid #37474f;
`;
