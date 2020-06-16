import Header from "../main/topnavbar";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
const ContentsBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Result = ({ children }) => (
  <div>
    <Header />
    <Row>
      <Col lg="4" md="2"></Col>
      <Col lg="4" md="8" xs="12">
        {children}
      </Col>
      <Col lg="4" md="2"></Col>
    </Row>
  </div>
);

export default Result;
