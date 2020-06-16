import React, { useContext, useEffect, useState } from "react";
import { Row, Col, CustomInput } from "reactstrap";
import { birthContext } from "../context/birth";
import Result from "../component/result/result";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../component/result/result.module.css";
import ShareButton from "../component/result/shareButton";
import LoadingPage from "../component/result/loadingPage";

const resultContents = (props) => {
  let testValue = 0;
  const BirthInfo = useContext(birthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);
  const [countNumber, setCountNumber] = useState(0);

  //초기설정
  useEffect(() => {
    setCountNumber(props.data[0].goodButton);
    BirthInfo.postGoodOrNot = false;
    const interval = setInterval(() => {
      testValue++;
      setLoadingTime(testValue);
    }, 380);
    setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 3800);
  }, []);
  //조아요 버튼 눌렀을때
  const handleChangeGoodOrNot = (e) => {
    BirthInfo.postGoodOrNot = !BirthInfo.postGoodOrNot;
    let value;
    if (BirthInfo.postGoodOrNot === true) {
      value = countNumber + 1;
    } else {
      value = countNumber - 1;
    }
    axios
      .get("https://hanstream.gabia.io/goodCount", {
        params: {
          count: value,
          dbName: router.query.dbname,
        },
      })
      .then((response) => {
        setCountNumber(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loading) return <LoadingPage />;

  //Layout
  return (
    <Result>
      <div className={styles.card}>
        <div class="card">
          <img
            src={
              "/image/" +
              router.query.dbname +
              "/" +
              props.data[0].title +
              ".png"
            }
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <hr />
      <div className={styles.MoreInfoText}> 복채는 하트와 공유로! </div>
      {/*공유버튼*/}
      <ShareButton
        num={props.data[0].num}
        dbname={router.query.dbname}
        countNumber={countNumber}
      />

      <div className={styles.card}>
        {/*좋아요버튼 나중에 수정할 예정. */}
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="customSwitch"
          label={countNumber + "명이 이테스트를 좋아합니다"}
          onChange={handleChangeGoodOrNot}
        />
        {/*타이틀 */}
        <div className={styles.TitlePosition}>{props.data[0].subtitle}</div>
        {/*내용 */}
        {props.data[0].contents.split("\n").map((line) => {
          return (
            <span>
              {line}
              <br />
            </span>
          );
        })}
      </div>
    </Result>
  );
};
resultContents.getInitialProps = async function ({ query }) {
  const res = await axios.get("https://hanstream.gabia.io/birth", {
    params: {
      month: query.month,
      day: query.day,
      dbName: query.dbname,
    },
  });
  const data = await res.data;

  console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data,
  };
};
export default resultContents;
