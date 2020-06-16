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
import Layout from "../component/signinup/sign";
import Link from "next/link";
import Router from "next/router";
import ReactPixel from "react-facebook-pixel";
import styles from "../component/signinup/signinup.module.css";

const kakaoKey = "79f4a4e9c21f0d6f7f2a173a3c9e130f";
const googleKey =
  "180058710840-gn5vuk2kpe80r3dgv0aecln9fnvm7lbg.apps.googleusercontent.com";
const signin = observer((props) => {
  const signInfo = useContext(signinUpContext);
  useEffect(() => {
    if (signInfo.JoinOrNot === true) {
      // signInfo.JoinOrNot = "";
      Router.push("/snsjoin");
    } else if (signInfo.JoinOrNot === false && signInfo.kakaoId !== "") {
      //   signInfo.JoinOrNot = "";
      Router.push("/");
    }
  }, [signInfo.JoinOrNot, signInfo.kakaoId, props.history]);
  const kakaoSuccess = (response) => {
    signInfo.kakaoId = "";
    signInfo.kakaoId = response.profile.id;
    signInfo.snsNumber = 1;
    signInfo.getKakaoLogin();
  };

  const failure = (error) => {
    console.log(error);
  };
  const googleSuccess = (response) => {
    signInfo.kakaoId = "";
    signInfo.kakaoId = response.googleId;
    signInfo.snsNumber = 2;
    signInfo.name = "";
    signInfo.email = "";
    signInfo.password = "";
    signInfo.getGoogleLogin().then((response) => {
      if (response.data.length === 0) {
        signInfo.JoinOrNot = true;
      } else {
        signInfo.JoinOrNot = false;
        signInfo.name = response.data[0].name;
        signInfo.memberYear = response.data[0].year;
        signInfo.memberMon = response.data[0].mon;
        signInfo.memberDay = response.data[0].day;
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
  return (
    <Layout>
      <div className={styles.card}>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="이메일을 입력해주세요"
                value={signInfo.email}
                onChange={handleChangeEmail}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="비밀번호를 입력해 주세요"
                value={signInfo.password}
                onChange={handleChangePassword}
              />
            </Col>
          </FormGroup>
          <Input outline color="info" type="submit" value="로그인하기" />
        </Form>
        <hr />{" "}
        <GoogleLoginButton
          clientId={googleKey}
          onSuccess={googleSuccess}
          onFailure={failure}
          cookiePolicy={"single_host_origin"}
          buttonText="구글로그인"
        />
        <KakaoLoginButton
          jsKey={kakaoKey}
          onSuccess={kakaoSuccess}
          onFailure={failure}
          getProfile="true"
          buttonText="카카오톡로그인"
        />
        {/*<ButtonWidth onClick={naverLogin}>네이버</ButtonWidth>*/}
        <hr />
        아직 회원이 아니신가요?
        <JoinButton onClick={gotoJoin}>회원가입하기</JoinButton>
      </div>
    </Layout>
  );
});

export default signin;
