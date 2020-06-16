import React from "react";
import { Row, Col } from "reactstrap";

const loadingPage = () => {
  return (
    <div>
      <Row>
        <Col md="3"></Col>
        <Col md="6" xs="12">
          <h3>일부러 안보이는척 하는중...</h3>
          <img src={"/image/loading.gif"} class="card-img-top" alt="..." />
        </Col>
        <Col md="3"></Col>
      </Row>
    </div>
  );
};

export default loadingPage;
