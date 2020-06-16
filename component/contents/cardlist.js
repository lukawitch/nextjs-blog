/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext } from "react";
import {
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Row,
  Col,
  Card,
} from "reactstrap";
import styled from "styled-components";
import Link from "next/link";
import { birthContext } from "../../context/birth";
import { observer } from "mobx-react-lite";
import { signinUpContext } from "../../context/signinup";
import Router from "next/router";
import styles from "./card.module.css";
const cardlist = observer((title, index, props) => {
  console.log(index);
  console.log(title.image);
  const birthInfo = useContext(birthContext);
  const signInfo = useContext(signinUpContext);

  const inputBirthNumber = (num) => {
    const d = new Date();
    let resultLink = console.log(d);
    birthInfo.postNumber = num;
    birthInfo.dbContentsName = title.title;
    console.log(birthInfo.postNumber);
    console.log(title.num);
    birthInfo.title = "";
    birthInfo.subtitle = "";
    birthInfo.contents = "";
    birthInfo.birth_year = signInfo.memberYear;
    birthInfo.birth_month = signInfo.memberMon;
    birthInfo.birth_day = signInfo.memberDay;
    birthInfo
      .getContentsSearch()
      .then((response) => {
        Router.push(
          "/result?month=" +
            birthInfo.birth_month +
            "&day=" +
            birthInfo.birth_day +
            "&dbname=" +
            birthInfo.dbName
        );
        // console.log(this.birth_result);
      })
      .catch((error) => {
        console.log(error);
      });

    // setLoading(true);
  };
  const CardTitleSize = styled(CardTitle)`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: -1%;
  `;
  const LinkFontStyle = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover {
      color: black;
      text-decoration: none !important;
    }
  `;
  //console.log(contents.contents.num);
  //console.log(contents.contents.title);
  console.log(title.title);
  console.log(title.num);
  // console.log(key);
  const pleaseLogin = () => {
    alert("로그인을 해야 이용가능한 서비스입니다.");
  };
  return (
    <div>
      {/*첫번째 요소*/}

      <div>
        {signInfo.kakaoId === "" ? (
          <>
            <div className={styles.card} onClick={pleaseLogin}>
              <img
                src={"/image/" + title.name + ".png"}
                alt="..."
                className={styles.imgShape}
              />
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.card}
              onClick={() => inputBirthNumber(title.num)}
            >
              <img
                src={"/image/" + title.name + ".png"}
                alt="..."
                className={styles.imgShape}
              />
              <div className={styles.fontPosition}>{title.title}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default cardlist;
