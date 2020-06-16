import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";
import styles from "./birth.module.css";

const birthform_day = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeDay = (e) => {
    birthInfo.birth_day = e.target.value;
    console.log(birthInfo.birth_day);
  };
  let resultForm = null;
  //범위치를 벗어났을때 나오는 form
  let invalidForm = (
    <>
      <label for="day">일</label>
      <select
        name="day"
        id="day"
        defaultValue={birthInfo.birth_day}
        onChange={handleChangeDay}
        className={styles.birthInvaildForm}
      >
        <option value="">선택</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    </>
  );

  //맞는범위안에 들어왔을때 나오는 form
  let validForm = (
    <>
      <label for="day">일</label>
      <select
        name="day"
        id="day"
        defaultValue={birthInfo.birth_day}
        onChange={handleChangeDay}
        className={styles.birthForm}
      >
        <option value="">선택해주세요</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    </>
  );

  //조건
  if (birthInfo.birth_day < 1) {
    resultForm = invalidForm;
    birthInfo.checkDayError = true;
  } else if (birthInfo.birth_month == 1 && birthInfo.birth_day > 31) {
    resultForm = invalidForm;
    birthInfo.checkDayError = true;
  } else if (birthInfo.birth_month == 2) {
    if (
      (birthInfo.birth_year % 4 == 0 && birthInfo.birth_year % 100 != 0) ||
      birthInfo.birth_year % 400 == 0
    ) {
      if (birthInfo.birth_day > 29) {
        resultForm = invalidForm;
        birthInfo.checkDayError = true;
      } else {
        resultForm = validForm;
        birthInfo.checkDayError = false;
      }
    } else if (birthInfo.birth_day > 28) {
      birthInfo.checkDayError = true;
      resultForm = invalidForm;
    } else {
      birthInfo.checkDayError = false;
      resultForm = validForm;
    }
  } else if (birthInfo.birth_month == 3 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 4 && birthInfo.birth_day > 30) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 5 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 6 && birthInfo.birth_day > 30) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 7 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 8 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 9 && birthInfo.birth_day > 30) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 10 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 11 && birthInfo.birth_day > 30) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month == 12 && birthInfo.birth_day > 31) {
    birthInfo.checkDayError = true;
    resultForm = invalidForm;
  } else {
    birthInfo.checkDayError = false;
    resultForm = validForm;
  }
  return <div>{resultForm}</div>;
});

export default birthform_day;
