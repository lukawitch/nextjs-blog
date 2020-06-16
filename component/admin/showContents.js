import React, { useState, useContext, useEffect } from "react";
import { adminContext } from "../../context/admin";
const showContents = (number) => {
  const [subtitle, setSubTitle] = useState(number.subtitle);
  const [contents, setContents] = useState(number.contents);
  const adminInfo = useContext(adminContext);
  console.log(number);
  const handleUpdateTitle = (e) => {
    setSubTitle(e.target.value);
    //adminInfo.updateSubtitle[number.number - 1] = e.target.value;
    console.log(subtitle);
  };
  const handleUpdateContents = (e) => {
    setContents(e.target.value);
    //adminInfo.updateContents[number.number - 1] = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    adminInfo.updateSubtitle = subtitle;
    adminInfo.updateContents = contents;
    adminInfo.updateTable(number.number);
    //adminInfo.createTable();
  };

  const deleteButton = () => {
    adminInfo.deleteTableData(number.number);
  };
  return (
    <div>
      {console.log(subtitle)}
      {number.number} <br />
      {adminInfo.updateSubtitle[number.number - 1] === "" ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <br />
            제목{" "}
            <input type="text" value={subtitle} onChange={handleUpdateTitle} />
            <br />
            내용
            <textarea
              value={contents}
              onChange={handleUpdateContents}
              rows="4"
              cols="50"
            ></textarea>
            <button type="submit">수정하기</button>
          </form>
          <button onClick={deleteButton}>삭제</button>
        </>
      )}
    </div>
  );
};

export default showContents;
