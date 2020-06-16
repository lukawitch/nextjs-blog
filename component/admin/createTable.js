import React, { useState, useContext, useEffect } from "react";
import { adminContext } from "../../context/admin";
import { observer } from "mobx-react-lite";
import ShowContents from "./showContents";
const createTable = observer(() => {
  const adminInfo = useContext(adminContext);
  const [dbName, setdbName] = useState();
  const [array, setArray] = useState(0);
  useEffect(() => {
    adminInfo.getTable();
    setArray(adminInfo.dbTableData);
    console.log(array);
    console.log(adminInfo.dbTable);
  }, []);
  const handleChangeName = (e) => {
    //adminInfo.dbName = e.target.value;
    setdbName(e.target.value);
  };
  const getDBName = (e) => {
    adminInfo.dbTableData = "";
    setdbName(e);
    adminInfo.dbName = e;
    adminInfo.getTableData();
    setArray(adminInfo.dbTableData);
  };
  const handleChangeSubtitle = (e) => {
    adminInfo.subtitle = e.target.value;
  };
  const handleChangeContents = (e) => {
    adminInfo.contents = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    adminInfo.dbName = dbName;
    adminInfo.num = adminInfo.dbTable.length + 1;
    adminInfo.searchTable();
    //adminInfo.createTable();
  };
  return (
    <div>
      {console.log(array)}
      <form onSubmit={handleSubmit}>
        컨텐츠이름( 한글or영어로 입력해주세요(ex)호구,이상형)) <br />
        <input type="text" value={dbName} onChange={handleChangeName} />
        <br />
        요소제목
        <input
          type="text"
          value={adminInfo.subtitle}
          onChange={handleChangeSubtitle}
        />
        <br />
        요소내용
        <textarea
          value={adminInfo.contents}
          onChange={handleChangeContents}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">만들기</button>
      </form>
      {adminInfo.dbTable === "" ? (
        <></>
      ) : (
        <>
          {adminInfo.dbTable.map((contents, num) => (
            <>
              <div onClick={() => getDBName(contents.name)}>
                {" "}
                {contents.num} {contents.name}
              </div>
              <br />
            </>
          ))}
        </>
      )}
      {adminInfo.dbTableData === "" ? (
        <></>
      ) : (
        <>
          {adminInfo.dbTableData.map((contents, num) => (
            <>
              <ShowContents
                number={contents.number}
                subtitle={contents.subtitle}
                contents={contents.contents}
              />
              <br />
            </>
          ))}
        </>
      )}
    </div>
  );
});

export default createTable;
