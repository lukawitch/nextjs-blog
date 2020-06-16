/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import { birthContext } from "../../context/birth";
import { observer } from "mobx-react-lite";
import { signinUpContext } from "../../context/signinup";
import Router from "next/router";
import styles from "./card.module.css";
const cardlist = observer((title, index) => {
  console.log(index);
  const birthInfo = useContext(birthContext);
  const signInfo = useContext(signinUpContext);
  console.log();
  const inputBirthNumber = (num) => {
    birthInfo.postNumber = num;
    birthInfo
      .simpleContentsSearch()
      .then((response) => {
        Router.push("/birth?num=" + birthInfo.postNumber);
      })
      .catch((error) => {
        console.log(error);
      });
    birthInfo.title = "";
    birthInfo.subtitle = "";
    birthInfo.contents = "";
  };

  const loginState = () => {
    /* birthInfo.postNumber = title.num;
    birthInfo.dbContentsName = title.title;
    console.log(birthInfo.postNumber);
    console.log(title.num);
    birthInfo.title = "";
    birthInfo.subtitle = "";
    birthInfo.contents = "";
    birthInfo.birth_year = signInfo.memberYear;
    birthInfo.birth_month = signInfo.memberMon;
    birthInfo.birth_day = signInfo.memberDay;
    birthInfo.getContentsSearch();*/
  };
  //무료테스트 링크
  return (
    <div>
      <div>
        {signInfo.kakaoId === "" ? (
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
            </div>
          </>
        ) : (
          <>
            <div className={styles.card} onClick={loginState}>
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
