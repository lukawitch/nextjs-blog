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
  return (
    <>
      <Row>
        <Col md="3"></Col>
        <Col md="6" xs="12">
          <JoinImage>
            {/**/}
            <ButtonPosition
              jsKey={kakaoKey}
              onSuccess={kakaoSuccess}
              onFailure={failure}
              getProfile="true"
              buttonText=""
            >
              <img src={JoinImageLink} alt=".." class="card-img-top" />
            </ButtonPosition>
          </JoinImage>
        </Col>
        <Col md="3"></Col>
      </Row>
    </>
  );
});

export default signin;
