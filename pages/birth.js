import React, { useContext } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
} from "reactstrap";
import { observer } from "mobx-react-lite";
//import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { birthContext } from "../context/birth";
import { signinUpContext } from "../context/signinup";
import DayForm from "../component/birth/birthform_day";
import MonForm from "../component/birth/birthform_mon";
import YearForm from "../component/birth/birthform_year";
import TimeForm from "../component/birth/birthform_time";
import GenderForm from "../component/birth/birth_gender";
import GubunCalenderForm from "../component/birth/birth_gubuntime";
import { useRouter } from "next/router";
import Birth from "../component/birth/birth";
import Router from "next/router";
import axios from "axios";
import styles from "../component/birth/birth.module.css";

const birthform = observer((props) => {
  const birthInfo = useContext(birthContext);
  const signInfo = useContext(signinUpContext);
  const router = useRouter();

  const handleChangeName = (e) => {
    birthInfo.name = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (birthInfo.checkMonError === true || birthInfo.checkDayError === true) {
      alert("생년월일시를 다시확인해주세요!");
    } else {
      birthInfo.dbName = props.data[0].name;
      let gender;
      gender = birthInfo.gender;
      birthInfo
        .simpleResult()
        .then((response) => {
          signInfo
            .getBirthInputPerson(
              gender,
              birthInfo.birth_year,
              birthInfo.birth_month,
              birthInfo.birth_day,
              birthInfo.birth_time
            )
            .then((response) => {
              Router.push(
                "/result?month=" +
                  birthInfo.birth_month +
                  "&day=" +
                  birthInfo.birth_day +
                  "&dbname=" +
                  birthInfo.dbName
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Birth>
      {router.query.num == 7 ||
      router.query.num == 1 ||
      router.query.num == 6 ? (
        <div className={styles.image}>
          <img
            className={styles.imageShape}
            src={"/image/" + props.data[0].name + "_1.png"}
            alt=".."
          />
        </div>
      ) : (
        <div className={styles.image}>
          <img
            className={styles.imageShape}
            src={"/image/" + props.data[0].name + ".png"}
            alt=".."
          />
        </div>
      )}

      <div className={styles.card}>
        <Form onSubmit={handleSubmit}>
          <label for="lname">이름</label>
          <input
            type="text"
            className={styles.nameForm}
            id="lname"
            name="이름"
            placeholder="이름"
            value={birthInfo.name}
            onChange={handleChangeName}
          />
          <Row form>
            <Col xs="4">
              {/*년 input*/}
              <YearForm />
            </Col>
            <Col xs="4">
              {/*월 input*/}
              <MonForm />
            </Col>
            <Col xs="4">
              {/*일 input*/}
              <DayForm />
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              {/*시간 input*/}
              <TimeForm />
            </Col>
            <Col xs="4">
              {/*양음력윤달 input*/}
              <GubunCalenderForm />
            </Col>
            <Col xs="4">
              {/*성별 input*/}
              <GenderForm />
            </Col>
          </Row>

          <button className={styles.resultButton} type="submit">
            {props.data[0].title}??
          </button>
        </Form>
      </div>
    </Birth>
  );
});

birthform.getInitialProps = async function ({ query }) {
  //const url = require("url");
  //console.log(url);
  //  console.log(query.id);
  const res = await axios.get("https://hanstream.gabia.io/searchSimpleList", {
    params: {
      num: query.num,
    },
  });
  const data = await res.data;

  console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data,
  };
};
export default birthform;
//export default withRouter(birthform);
