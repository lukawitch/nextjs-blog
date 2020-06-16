import React, { useContext, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CustomInput,
  Container,
} from "reactstrap";
import { observer } from "mobx-react-lite";
import BirthImage from "./Birth.png";
import styled from "styled-components";
import { birthContext } from "../context/birth";
import { signinUpContext } from "../context/signinup";
import DayForm from "../component/signinup/joinform_day";
import MonForm from "../component/signinup/joinform_mon";
import YearForm from "../component/signinup/joinform_year";
import Router from "next/router";
const snsjoin = observer((props) => {
  const birthInfo = useContext(birthContext);
  const signInfo = useContext(signinUpContext);
  useEffect(() => {
    if (signInfo.successOrNot === true) {
      alert("회원가입이 완료되었습니다");
      Router.push("/");
    }
  }, [signInfo.successOrNot, props.history]);
  const CardPosition = styled(Card)`
    margin: 5% 0;
  `;

  const ButtonDesign = styled(Button)`
    width: 100%;
  `;

  const SelectButton = styled.div`
    padding-top: 1%;
  `;

  const ContentsBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  const handleChangeTotal = (e) => {
    birthInfo.birth_total = e.target.value;
    console.log(birthInfo.birth_total);
  };
  const handleChangeName = (e) => {
    birthInfo.name = e.target.value;
    console.log(birthInfo.name);
  };

  const handleChangeSolarLunar = (e) => {
    birthInfo.birth_SolarTrueFalse = !birthInfo.birth_SolarTrueFalse;
    birthInfo.birth_LunarTrueFalse = !birthInfo.birth_LunarTrueFalse;
    console.log(birthInfo.birth_SolarTrueFalse);
    console.log(birthInfo.birth_LunarTrueFalse);
  };
  const handleChangeGender = (e) => {
    birthInfo.gender_femaleTrueFalse = !birthInfo.gender_femaleTrueFalse;
    birthInfo.gender_maleTrueFalse = !birthInfo.gender_maleTrueFalse;
    console.log(birthInfo.gender_femaleTrueFalse);
    console.log(birthInfo.gender_maleTrueFalse);
  };
  const handleChangeTime = (e) => {
    birthInfo.birth_time = e.target.value;
    console.log(birthInfo.birth_time);
  };
  const handleChangeLeapMonth = (e) => {
    birthInfo.birth_leap_month = !birthInfo.birth_leap_month;
    console.log(birthInfo.birth_leap_month);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* birthInfo.birth_year = birthInfo.birth_total.substring(0, 4);
    birthInfo.birth_month = birthInfo.birth_total.substring(4, 6);
    birthInfo.birth_day = birthInfo.birth_total.substring(6, 8);
    console.log(birthInfo.birth_year);
    console.log(birthInfo.birth_month);
    console.log(birthInfo.birth_day);
    console.log(typeof birthInfo.birth_year);
    // birthInfo.BirthResult(props);*/
    if (
      birthInfo.checkYearError === true ||
      birthInfo.checkMonError === true ||
      birthInfo.checkDayError === true
    ) {
      alert("생년월일시를 다시확인해주세요!");
    } else {
      let gender;
      if (birthInfo.gender_femaleTrueFalse) {
        gender = "female";
      } else {
        gender = "male";
      }
      //DB로 넣어주는 코드
      if (signInfo.snsNumber === 1) {
        signInfo.getKakaoJoin(
          gender,
          birthInfo.birth_year,
          birthInfo.birth_month,
          birthInfo.birth_day,
          birthInfo.birth_time,
          birthInfo.name
        );
      } else if (signInfo.snsNumber === 2) {
        signInfo.getGoogleJoin(
          gender,
          birthInfo.birth_year,
          birthInfo.birth_month,
          birthInfo.birth_day,
          birthInfo.birth_time,
          birthInfo.name
        );
      }
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md="1"></Col>
          <Col md="10" xs="12">
            <CardPosition>
              <CardImg top width="100%" src={BirthImage} alt="Card image cap" />
            </CardPosition>
            <Form action="/result" onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">이름</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="이름"
                  value={birthInfo.name}
                  onChange={handleChangeName}
                />
              </FormGroup>

              <Row form>
                <Col md={3} xs={4}>
                  <YearForm />
                </Col>
                <Col md={3} xs={4}>
                  <MonForm />
                </Col>
                <Col md={3} xs={4}>
                  <DayForm />
                </Col>
                <Col md={3} xs={12}>
                  <FormGroup>
                    <Label for="examplePassword">시간</Label>
                    <Input
                      type="select"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                      onChange={handleChangeTime}
                    >
                      <option value="0">시간 모름</option>
                      <option value="1">23:30~01:30 子시(자시)</option>
                      <option value="2">01:30~03:30 丑시(축시)</option>
                      <option value="3">03:30~05:30 寅시(인시)</option>
                      <option value="4">05:30~07:30 卯시(묘시)</option>
                      <option value="5">07:30~09:30 辰시(진시)</option>
                      <option value="6">09:30~11:30 巳시(사시)</option>
                      <option value="7">11:30~13:30 午시(오시)</option>
                      <option value="8">13:30~15:30 未시(미시)</option>
                      <option value="9">15:30~17:30 申시(신시)</option>
                      <option value="10">17:30~19:30 酉시(유시)</option>
                      <option value="11">19:30~21:30 戌시(술시)</option>
                      <option value="12">21:30~23:30 亥시(해시)</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <SelectButton>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="yangumm"
                        label="양력"
                        inline
                        value="solar"
                        checked={birthInfo.birth_SolarTrueFalse}
                        onChange={handleChangeSolarLunar}
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio2"
                        name="yangumm"
                        label="음력"
                        inline
                        value="Lunar"
                        checked={birthInfo.birth_LunarTrueFalse}
                        onChange={handleChangeSolarLunar}
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="gender"
                        label="여자"
                        inline
                        value="female"
                        checked={birthInfo.gender_femaleTrueFalse}
                        onChange={handleChangeGender}
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio2"
                        name="gender"
                        label="남자"
                        inline
                        value="male"
                        checked={birthInfo.gender_maleTrueFalse}
                        onChange={handleChangeGender}
                      />
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomInline"
                        label="윤달"
                        inline
                        checked={birthInfo.birth_leap_month}
                        onChange={handleChangeLeapMonth}
                      />
                    </SelectButton>
                  </FormGroup>
                </Col>
                <Col md={6} md={12}>
                  <ButtonDesign outline color="info" type="submit">
                    회원가입
                  </ButtonDesign>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </div>
  );
});

export default snsjoin;
