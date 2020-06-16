import React, { useContext } from "react";
import styles from "./birth.module.css";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";

const birth_gender = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeGender = (e) => {
    birthInfo.gender = e.target.value;
  };
  //성별 input
  return (
    <>
      <label for="male">성별</label>
      <select
        name="gender"
        id="gender"
        defaultValue={birthInfo.gender}
        onChange={handleChangeGender}
        className={styles.birthForm}
      >
        <option value="F">여자</option>
        <option value="M">남자</option>
      </select>
    </>
  );
});

export default birth_gender;
