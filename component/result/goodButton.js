import React, { useContext } from "react";
import { CustomInput } from "reactstrap";
import { birthContext } from "../context/birth";
import axios from "axios";
const goodButton = (props) => {
  const BirthInfo = useContext(birthContext);
  const handleChangeGoodOrNot = (e) => {
    BirthInfo.postGoodOrNot = !BirthInfo.postGoodOrNot;
    alert(BirthInfo.postGoodOrNot);
    console.log(BirthInfo.dbName);
    axios
      .get("http://localhost:8001/goodCount", {
        params: {
          count: 1,
          dbName: BirthInfo.dbName,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <CustomInput
        type="switch"
        id="exampleCustomSwitch"
        name="customSwitch"
        label="Turn on this custom switch"
        onChange={handleChangeGoodOrNot}
      />
    </div>
  );
};

export default goodButton;
