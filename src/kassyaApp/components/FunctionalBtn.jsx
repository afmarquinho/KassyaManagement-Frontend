import styled from "styled-components";

const FunctionalBtn = ({ name = "Nombre", color1="#9c27b0", color2="#673ab7"}) => {
  return <Button className="btn" $color1={color1} $color2={color2}>{name}</Button>;
};

export default FunctionalBtn;

const Button = styled.button`
  font-size: 1.4rem;
  width: 7rem;
  height: 7rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: none;
  color: ${(props) => props.theme.secondaryText};
  @media (min-width: 768px) {
    padding: 1rem;
    width: 10rem;
    height: 10rem;
  }
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  z-index: 100;
  background: linear-gradient(45deg, ${props => props.$color1}, ${props => props.$color2});
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
    color: ${(props) => props.theme.secondaryText};
  }
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 15px;
    background-color: transparent;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.459);
    z-index: -1;
  }

  
`;
