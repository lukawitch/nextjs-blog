import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Header from "../main/topnavbar";

const birth = ({ children }) => {
  const ContentsBody = styled(Col)`
    width: 100%;
    margin: 0;
    padding: 0;
  `;
  return (
    <div>
      <Header />

      <Row>
        <ContentsBody lg="4" md="2" xs="1"></ContentsBody>
        <ContentsBody lg="4" md="8" xs="10">
          {children}
        </ContentsBody>
        <ContentsBody lg="4" md="2" xs="1"></ContentsBody>
      </Row>
    </div>
  );
};

export default birth;
