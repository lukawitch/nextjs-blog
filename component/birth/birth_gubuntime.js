import React, { useContext } from "react";
import styles from "./birth.module.css";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";

const birth_gender = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeGubunCalander = (e) => {
    birthInfo.gubunCalender = e.target.value;
    console.log(birthInfo.gubunCalender);
  };
  //양음력윤달 input
  return (
    <>
      <label for="male">양음력</label>
      <select
        name="gobun_calander"
        id="exampleSelect"
        defaultValue={birthInfo.gubunCalender}
        onChange={handleChangeGubunCalander}
        className={styles.birthForm}
      >
        <option value="1">양력</option>
        <option value="0">음력</option>
        <option value="2">윤달</option>
      </select>
    </>
  );
});

export default birth_gender;
