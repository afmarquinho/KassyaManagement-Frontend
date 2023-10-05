import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SupplierLayout = ({ children }) => {
  const [mostrarMenu, setMostarMenu] = useState(false);

  return (
    <>
      <Menu
        onClick={(e) => setMostarMenu(!mostrarMenu)}
      >
        Menú
      </Menu>
      <NAV  $mostrarMenu={mostrarMenu}>
        <div className="nav__content">
          <h5 className="supplier">PROVEEDORES</h5>
          <BtnMenu1
            to="/supplier/add-supplier"
            className={
              location.pathname === "/supplier/add-supplier" ? "active" : ""
            }
          >
            Añadir Proveedor
          </BtnMenu1>
          <BtnMenu to="/supplier" className={location.pathname === "/" ? "active" : ""}>
            Ver Proveedores
          </BtnMenu>
        </div>
      </NAV>
      <Content className="content">{children}</Content>
    </>
  );
};

export default SupplierLayout;

const NAV = styled.nav`
  width: 12rem;
  background-color: ${(props) => props.theme.blueGray};
  position: fixed;
  z-index: 100;
  top: 4rem;
  bottom: 0;
  left: 0;
  .nav__content {
    position: sticky;
  }
  .nav__content h5 {
    padding: 1.2rem 0 1.2rem 0.5rem;
    margin: 0;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.black};
  }
  .active {
    background-color: ${(props) => props.theme.deepGray};
  }
  @media (max-width: 768px) {
    transition: transform 0.5s ease;
    transform-origin: left;
    transform: ${props => props.$mostrarMenu ? "scaleX(1)" : "scaleX(0)"};
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
  border-top: 1px solid #95d1f0;
`;

const Content = styled.div`
  width: calc(100vw - 14rem);
  margin: 1rem 1rem 1rem 13rem;
  @media (max-width: 768px) {
    margin: 1rem auto;

    width: 100%;
  }
`;
const Menu = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  width: 6rem;
  height: 3rem;
  border-radius: 4px;
  position: fixed;
  top: 0.5rem;
  right: 50%;
  transform: translateX(100%);
  @media (min-width: 768px) {
    display: none;
  }
 
`;
