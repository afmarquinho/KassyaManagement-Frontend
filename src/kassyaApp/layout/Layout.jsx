import { Container, Row, Col } from "react-bootstrap";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container fluid className="p-0">
      <Row>
        <StyledCol xs={12}>
          <h1>Kassya Management</h1>
        </StyledCol>
        <Col xs={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

const StyledCol = styled(Col)`
  height: 4rem;
  background-color: ${(props) => props.theme.deepBlue};
  display: flex;
  justify-content: start;
  align-items: center;
`;
