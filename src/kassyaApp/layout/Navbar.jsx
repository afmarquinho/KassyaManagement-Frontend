import { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [menuAct, setMenuAct] = useState(false);

  return (
    <>
      <Button onClick={(e) => setMenuAct(!menuAct)} $menuAct={menuAct}>
        <span>Menú Principal</span>
        {menuAct ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </Button>
      <Menu $menuAct={menuAct}>
        <div className="btn_group">
          <BtnMenu1
            to="/"
            className={
              location.pathname === "/inventory/add-supplier" ? "active" : ""
            }
          >
            Inventarios
          </BtnMenu1>
          <BtnMenu
            to="/supplier"
            className={
              location.pathname === "/inventory/add-supplier" ? "active" : ""
            }
          >
            Proveedores
          </BtnMenu>
        </div>
      </Menu>
    </>
  );
};

export default Navbar;

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 5rem;
  position: ${props => props.$menuAct ? "fixed" : ""};
  right: 0;
  z-index: 300;
  right: 2rem;
  display: flex;
  justify-content: end;
  padding: 0;
  margin: 0;
  @media (min-width: 576px) {
    width: 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    transition: transform 0.5s ease-out;
    transform-origin: right;
    transform: ${(props) => (props.$menuAct ? "scaleX(0)" : "scaleX(1)")};
    @media (max-width: 576px) {
      display: none;
    }
  }

  svg {
    color: ${(props) => props.theme.main};
    height: 100%;
    padding: 0.2rem;
    border: 2px solid ${(props) => props.theme.main};
    border-radius: 3px;
  }
`;
const Menu = styled.div`
  width: 20rem;
  height: 100vh;
  position: fixed;
  z-index: 250;
  padding-top: 6rem;
  background-color: ${(props) => props.theme.deepGray};
  top: 0;
  right: 0;
  transition: transform 0.5s ease-out;
  transform-origin: right;
  transform: ${(props) => (props.$menuAct ? "scaleX(1)" : "scaleX(0)")};
  div {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const BtnMenu = styled(Link)`
  font-size: 1.3rem;
  width: 100%;
  height: 4rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  border-bottom: 1px solid ${props => props.theme.main};;
  background-color: transparent;
  color: ${(props) => props.theme.secondaryText};
  transition: background-color 0.5s ease;
  &:hover {
      background-color: ${(props) => props.theme.main};
      color: ${props => props.theme.primaryText};
    }
    `;
const BtnMenu1 = styled(BtnMenu)`
border-top: 1px solid ${props => props.theme.main};;
`
