import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Header from "../main/topnavbar";

const birth = ({ children }) => {
  return (
    <div>
      <Header />

      <Row>
        <Col lg="4" md="2" xs="1"></Col>
        <Col lg="4" md="8" xs="10">
          {children}
        </Col>
        <Col lg="4" md="2" xs="1"></Col>
      </Row>
    </div>
  );
};

export default birth;
