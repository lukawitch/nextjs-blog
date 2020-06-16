import Header from "./main/topnavbar";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
const ContentsBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ColPosition = styled(Col)`
  width: 100%;
  margin: 0;
  padding: 0;
`;

//기본적인 layout틀
const Layout = ({ children }) => (
  <div>
    <Header />

    <Row>
      <ColPosition lg="4" md="2"></ColPosition>
      <ColPosition lg="4" md="8" xs="12">
        <ContentsBody>{children}</ContentsBody>
      </ColPosition>
      <ColPosition lg="4" md="2"></ColPosition>
    </Row>
  </div>
);

export default Layout;
