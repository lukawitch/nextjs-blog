import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { observer } from "mobx-react-lite";
import { signinUpContext } from "../context/signinup";
import axios from "axios";
import CardList from "../component/contents/simpleTestList";
import FirstImage from "../component/main/image";
import Layout from "../component/Layout";

const simple = observer((props) => {
  const signInfo = useContext(signinUpContext);
  useEffect(() => {
    signInfo.email = "";
  }, []);
  //무료테스트
  return (
    <Layout>
      <Col md="12" xs="12">
        <FirstImage />
        <hr />
        <Row>
          {/*cardlist보여주는것*/}
          {props.data.map((contents, num) => (
            <>
              <Col md="6" xs="6">
                <CardList
                  title={contents.title}
                  num={contents.num}
                  name={contents.name}
                  image={contents.imageLink}
                  props={props}
                />{" "}
              </Col>{" "}
            </>
          ))}
        </Row>
      </Col>
    </Layout>
  );
});
simple.getInitialProps = async function ({ query }) {
  const res = await axios.get("https://hanstream.gabia.io/simpleTest", {});
  const data = await res.data;

  console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data,
  };
};
export default simple;
