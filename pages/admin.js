import React, { useState } from "react";
import axios from "axios";
import styles from "../component/admin/admin.module.css";
import CreateTable from "../component/admin/createTable";
import Test from "../component/admin/test";
const admin = () => {
  const [tabNumber, setTabNumber] = useState();
  const settingTabNumber = (num) => {
    setTabNumber(num);
  };
  return (
    <div>
      <div className={styles.btn_group}>
        <button
          onClick={() => {
            settingTabNumber(1);
          }}
        >
          Apple
        </button>
        <button
          onClick={() => {
            settingTabNumber(2);
          }}
        >
          Samsung
        </button>
        <button
          onClick={() => {
            settingTabNumber(3);
          }}
        >
          Sony
        </button>
      </div>
      {tabNumber === 1 ? (
        <>
          <CreateTable />
        </>
      ) : (
        <>
          {" "}
          {tabNumber === 2 ? (
            <>
              <Test />
            </>
          ) : (
            <> {tabNumber === 3 ? <>{tabNumber}</> : <></>}</>
          )}
        </>
      )}
    </div>
  );
};

export default admin;
