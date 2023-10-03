import { Container, Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <StyledCol xs={12}>
            <div>
              <h1>Kassya Management</h1>
              <span>Signed in as: Mark Otto</span>
            </div>
            <Navbar />
          </StyledCol>
          <ChildrenCol xs={12}>{children}</ChildrenCol>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

const StyledCol = styled(Col)`
  height: 4rem;
  background-color: ${(props) => props.theme.deepBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    position: fixed; 
    z-index: 100;
  }

  div {
    display: flex;
    gap: 2rem;
  }
  span {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.secondaryText};
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    @media (min-width: 576px) {
      display: flex;
      
    }
  }
`;
const ChildrenCol = styled(Col)`
padding-top: 6rem;`
