import React, { useContext } from "react";
import styles from "./birth.module.css";
import { observer } from "mobx-react-lite";
import { birthContext } from "../../context/birth";

const birthform_time = observer(() => {
  const birthInfo = useContext(birthContext);
  const handleChangeTime = (e) => {
    birthInfo.birth_time = e.target.value;
  };
  //시간 input
  return (
    <>
      <label for="time">시간</label>
      <select
        name="time"
        id="exampleSelect"
        placeholder="password placeholder"
        defaultValue={birthInfo.birth_time}
        onChange={handleChangeTime}
        className={styles.birthForm}
      >
        <option value="">시간 모름</option>
        <option value="1">23:30~01:30 子시(자시)</option>
        <option value="2">01:30~03:30 丑시(축시)</option>
        <option value="4">03:30~05:30 寅시(인시)</option>
        <option value="6">05:30~07:30 卯시(묘시)</option>
        <option value="8">07:30~09:30 辰시(진시)</option>
        <option value="10">09:30~11:30 巳시(사시)</option>
        <option value="12">11:30~13:30 午시(오시)</option>
        <option value="14">13:30~15:30 未시(미시)</option>
        <option value="16">15:30~17:30 申시(신시)</option>
        <option value="18">17:30~19:30 酉시(유시)</option>
        <option value="20">19:30~21:30 戌시(술시)</option>
        <option value="22">21:30~23:30 亥시(해시)</option>
      </select>
    </>
  );
});

export default birthform_time;
