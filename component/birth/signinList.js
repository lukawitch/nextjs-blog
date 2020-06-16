import React, { useContext, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import GoogleLogin from "react-google-login";
import { signinUpContext } from "../context/signinup";
import { observer } from "mobx-react-lite";
import { birthContext } from "../context/birth";
import Layout from "../component/Layout";
import Link from "next/link";
import JoinImageLink from "../public/image/join.png";
import ReactPixel from "react-facebook-pixel";
import { IoLogoOctocat } from "react-icons/io";

import Router from "next/router";

const ButtonWidth = styled(Button)`
  width: 100%;
  margin-bottom: 2%;
`;
const kakaoKey = "79f4a4e9c21f0d6f7f2a173a3c9e130f";
const googleKey =
  "180058710840-gn5vuk2kpe80r3dgv0aecln9fnvm7lbg.apps.googleusercontent.com";
const signin = observer((props) => {
  const signInfo = useContext(signinUpContext);
  //const birthInfo = useContext(birthContext);
  useEffect(() => {
    console.log(signInfo.JoinOrNot);
    console.log(signInfo.kakaoId);
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init("712715535735010", options);
    if (signInfo.JoinOrNot === true) {
      // signInfo.JoinOrNot = "";
      Router.push("/snsjoin");
    } else if (signInfo.JoinOrNot === false && signInfo.kakaoId !== "") {
      //   signInfo.JoinOrNot = "";
      Router.push("/");
    }
  }, [signInfo.JoinOrNot, signInfo.kakaoId, props.history]);
  const kakaoSuccess = (response) => {
    ReactPixel.track("Result페이지에서 회원가입으로 유도하기");
    signInfo.kakaoId = "";
    signInfo.kakaoId = response.profile.id;
    signInfo.snsNumber = 1;
    // console.log(signInfo.kakaoId);
    //signInfo.JoinOrNot = true;
    signInfo.getKakaoLogin();
  };

  const failure = (error) => {
    console.log(error);
  };
  const googleSuccess = (response) => {
    console.log(response);
    signInfo.kakaoId = "";
    signInfo.kakaoId = response.googleId;
    signInfo.snsNumber = 2;
    // signInfo.JoinOrNot = true;
    console.log(signInfo.kakaoId);
    signInfo.name = "";
    signInfo.email = "";
    signInfo.password = "";
    signInfo.getGoogleLogin().then((response) => {
      console.log(response.data);
      console.log(response.data.length);
      if (response.data.length === 0) {
        signInfo.JoinOrNot = true;
        console.log(this.JoinOrNot);
      } else {
        signInfo.JoinOrNot = false;
        signInfo.name = response.data[0].name;
        signInfo.memberYear = response.data[0].year;
        signInfo.memberMon = response.data[0].mon;
        signInfo.memberDay = response.data[0].day;
        console.log(this.name);
        console.log(this.JoinOrNot);
      }
    });
  };

  const naverLogin = () => {
    signInfo.getNaverLogin();
  };

  const handleChangeEmail = (e) => {
    signInfo.email = e.target.value;
    console.log(signInfo.email);
  };
  const handleChangePassword = (e) => {
    signInfo.password = e.target.value;
    console.log(signInfo.email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInfo.getGeneralLogin();
  };

  const GoogleLoginButton = styled(GoogleLogin)`
    width: 100%;
    text-align: center;
  `;
  const KakaoLoginButton = styled(KakaoLogin)`
    width: 100%;
    text-align: center;
    background-color: #f9e000;
    padding: 1%;
    border: 0px;
    border-radius: 10px;
  `;
  const JoinButton = styled(Button)`
    width: 100%;
    text-align: center;
  `;
  const gotoJoin = () => {
    Router.push("/join");
  };
  const JoinImage = styled.div`
    position: relative;
    width: 100%;
  `;
  const ButtonPosition = styled(KakaoLoginButton)`
    position: absolute;
    top: 65%;
    left: 0;
    width: 100%;
  `;
  const ButtonList = styled(KakaoLoginButton)`
    width: 100%;
    margin-bottom: 5%;
    background-color: #c4c4c4;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16pt;
    border-radius: 5px;
    font-weight: bold;
  `;
  return (
    <>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat /> 나는 연상 연하 커플일까?
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        상대를 넘어오게 하는 고백법
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        부자지간 궁합! 나는 집을나와야 하는가
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        {" "}
        <IoLogoOctocat /> 내가 건물주가 될 사준가?
      </ButtonList>
      {/*<ButtonDesign color="btn-purple" size="lg" type="submit">
              {props.data[0].title}??
        </ButtonDesign>*/}

      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        {" "}
        <IoLogoOctocat /> 나의 꼰대스타일은?
      </ButtonList>
      {/*<ButtonDesign color="btn-purple" size="lg" type="submit">
              {props.data[0].title}??
        </ButtonDesign>*/}

      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        오늘의 데이트코스
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        오늘의 티켓팅 성공운
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        돌려돌려 돌림판,이벤트당첨
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        내가 호구라니....
      </ButtonList>

      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />돈 많은 백수가 되고싶다.
      </ButtonList>

      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        오늘의 시험 점수는?
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        오늘 면접 성공각?
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        주식 투자 할?말?
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        고백 성공 타이밍
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        나도 몰랐던 극복능력
      </ButtonList>

      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        나의 첫인상 점수는?
      </ButtonList>
      <ButtonList
        jsKey={kakaoKey}
        onSuccess={kakaoSuccess}
        onFailure={failure}
        getProfile="true"
        buttonText=""
      >
        <IoLogoOctocat />
        자기애 뿜뿜! 자뻑스타일
      </ButtonList>
    </>
  );
});

export default signin;
