import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";
import styles from "./birth.module.css";

const birthform_mon = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeMon = (e) => {
    birthInfo.birth_month = e.target.value;
  };
  let resultForm = null;
  //범위치를 벗어났을때 나오는 form
  let invalidForm = (
    <>
      <label for="mon">월</label>
      <select
        name="mon"
        id="mon"
        defaultValue={birthInfo.birth_month}
        onChange={handleChangeMon}
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
      </select>
    </>
  );
  //맞는범위안에 들어왔을때 나오는 form
  let validForm = (
    <>
      <label for="mon">월</label>
      <select
        name="mon"
        id="mon"
        defaultValue={birthInfo.birth_month}
        onChange={handleChangeMon}
        className={styles.birthForm}
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
      </select>
    </>
  );

  //조건
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

export default birthform_mon;
