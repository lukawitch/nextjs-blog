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
  let invalidForm = (
    <FormGroup>
      <Label for="year">생년</Label>
      <Input
        invalid
        type="number"
        name="year"
        id="year"
        placeholder=" ex)1997"
        value={birthInfo.birth_year}
        onChange={handleChangeYear}
      />
    </FormGroup>
  );
  let validForm = (
    <FormGroup>
      <Label for="year">생년</Label>
      <Input
        valid
        type="number"
        name="year"
        id="year"
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
    resultForm = validForm;
  }

  return <div>{resultForm}</div>;
});

export default birthform_day;
