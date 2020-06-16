import React, { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../component/Layout";
import FirstImage from "../component/main/image";
import axios from "axios";
import { Row, Col } from "reactstrap";
import { observer } from "mobx-react-lite";
import CardList from "../component/contents/cardlist";
import { signinUpContext } from "../context/signinup";
import LoginAfter from "../component/main/loginafter";

//index페이지
const Index = observer((props) => {
  const signInfo = useContext(signinUpContext);
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Index 페이지</title>
      </Head>
      <Layout>
        {" "}
        <Col md="12" xs="12">
          {signInfo.kakaoId === "" ? (
            <>
              <FirstImage />
              <hr />
              <Row>
                {" "}
                <br />
                {/*카드 정보 가지고오는 부분*/}
                {props.data.map((contents, num) => (
                  <>
                    <Col md="6" xs="6">
                      <CardList
                        title={contents.listtitle}
                        num={contents.num}
                        name={contents.name}
                        image={contents.imageLink}
                        props={props}
                      />{" "}
                    </Col>{" "}
                  </>
                ))}
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <LoginAfter />
                </Col>
                <Col md="3"></Col>
              </Row>
            </>
          )}
        </Col>
      </Layout>
    </div>
  );
});

//기본 List가지고 오는 것
Index.getInitialProps = async function ({ query }) {
  const res = await axios.get("https://hanstream.gabia.io/contentsList", {});
  const data = await res.data;

  console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data,
  };
};
export default Index;
