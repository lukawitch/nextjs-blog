import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";
import { FormGroup, Label, Input } from "reactstrap";

const birthform_day = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeDay = (e) => {
    birthInfo.birth_day = e.target.value;
    // console.log(birthInfo.birth_day);
  };
  let resultForm = null;
  let invalidForm = (
    <FormGroup>
      <Label for="day">생일</Label>
      <Input
        invalid
        type="number"
        name="day"
        id="day"
        placeholder="ex)8"
        value={birthInfo.birth_day}
        onChange={handleChangeDay}
      />
    </FormGroup>
  );
  let validForm = (
    <FormGroup>
      <Label for="day">생일</Label>
      <Input
        valid
        type="number"
        name="day"
        id="day"
        placeholder="ex)8"
        value={birthInfo.birth_day}
        onChange={handleChangeDay}
      />
    </FormGroup>
  );
  if (birthInfo.birth_day < 1) {
    console.log("defalut");
    console.log(birthInfo.birth_month);
    resultForm = invalidForm;
    birthInfo.checkDayError = true;
  } else if (birthInfo.birth_month == 1 && birthInfo.birth_day > 31) {
    resultForm = invalidForm;
    birthInfo.checkDayError = true;
  } else if (birthInfo.birth_month == 2) {
    console.log(birthInfo.birth_day);
    if (
      (birthInfo.birth_year % 4 == 0 && birthInfo.birth_year % 100 != 0) ||
      birthInfo.birth_year % 400 == 0
    ) {
      console.log("윤년");

      if (birthInfo.birth_day > 29) {
        resultForm = invalidForm;
        birthInfo.checkDayError = true;
      } else {
        resultForm = validForm;
        birthInfo.checkDayError = false;
      }
    } else if (birthInfo.birth_day > 28) {
      console.log(birthInfo.birth_year % 4);
      console.log(birthInfo.birth_day);
      console.log("윤년이 아닌경우");
      birthInfo.checkDayError = true;
      resultForm = invalidForm;
    } else {
      console.log("모든경우의수");
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
    console.log(birthInfo.birth_month);
    birthInfo.checkDayError = false;
    resultForm = validForm;
  }
  return <div>{resultForm}</div>;
});

export default birthform_day;
