import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";
import { FormGroup, Label, Input } from "reactstrap";

const birthform_day = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeMon = (e) => {
    birthInfo.birth_month = e.target.value;
  };
  let resultForm = null;
  let invalidForm = (
    <FormGroup>
      <Label for="mon">생월</Label>
      <Input
        invalid
        type="number"
        name="mon"
        id="mon"
        placeholder="ex)1"
        value={birthInfo.birth_month}
        onChange={handleChangeMon}
      />
    </FormGroup>
  );
  let validForm = (
    <FormGroup>
      <Label for="mon">생월</Label>
      <Input
        valid
        type="number"
        name="mon"
        id="mon"
        placeholder="ex)1"
        value={birthInfo.birth_month}
        onChange={handleChangeMon}
      />
    </FormGroup>
  );
  if (birthInfo.birth_month < 1) {
    console.log("defalut");
    console.log(birthInfo.birth_month);
    birthInfo.checkMonError = true;
    resultForm = invalidForm;
  } else if (birthInfo.birth_month > 12) {
    birthInfo.checkMonError = true;
    resultForm = invalidForm;
  } else {
    birthInfo.checkMonError = false;
    resultForm = validForm;
  }

  return <div>{resultForm}</div>;
});

export default birthform_day;
