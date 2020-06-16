import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";
import { FormGroup, Label, Input } from "reactstrap";

const birthform_day = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeYear = (e) => {
    birthInfo.birth_year = e.target.value;
  };
  let resultForm = null;

  //생년 범위에서 벗어났을때 나오는 input
  let invalidForm = (
    <FormGroup>
      <Label for="birth">생년</Label>
      <Input
        invalid
        type="number"
        name="birth"
        id="birth"
        placeholder=" ex)1997"
        value={birthInfo.birth_year}
        onChange={handleChangeYear}
      />
    </FormGroup>
  );

  //생년 범위안에있을때 나오는 input
  let validForm = (
    <FormGroup>
      <Label for="birth">생년</Label>
      <Input
        valid
        type="number"
        name="birth"
        id="birth"
        placeholder=" ex)1997"
        value={birthInfo.birth_year}
        onChange={handleChangeYear}
      />
    </FormGroup>
  );
  if (birthInfo.birth_year < 1900) {
    birthInfo.checkYearError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_year > 2050) {
    birthInfo.checkYearError = true;
    resultForm = invalidForm;
  } else {
    birthInfo.checkYearError = false;
    console.log(birthInfo.birth_year);
    resultForm = validForm;
  }

  return <div>{resultForm}</div>;
});

export default birthform_day;
