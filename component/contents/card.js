/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { birthContext } from "../../context/birth";
import { observer } from "mobx-react-lite";
import CardList from "./cardlist";
import axios from "axios";

//CardFlex 안에 최대 3개가 들어간다고 보면됨
const card_pc = observer((props) => {
  const birthInfo = useContext(birthContext);

  /*const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);
  useEffect(() => {
    console.log(birthInfo.contentsList);
    setContents(birthInfo.contentsList);
    if (birthInfo.contentsList[0] === undefined) {
      console.log("error가 났습니다 페이지를 리로딩 해주세요");
    }
    if (birthInfo.contentsList.length === 0) {
      // birthInfo.ContentsTitle().then(setLoading(true));
      console.log(birthInfo.contentsList[0]);
    }
    // eslint-disable-next-line
  }, []);
  if (loading) return <div>Loading...</div>;*/
  return (
    <div>
      <Row>
        {" "}
        <br />
        {props.data.map((contents, num) => (
          <>
            <Col md="6" xs="6">
              <CardList
                title={contents.listtitle}
                num={contents.num}
                name={contents.name}
                image={contents.imageLink}
                props={props}
              />{" "}
            </Col>{" "}
          </>
        ))}
      </Row>
    </div>
  );
});
card_pc.getInitialProps = async function ({ query }) {
  //const url = require("url");
  //console.log(url);
  //  console.log(query.id);
  const res = await axios.get("https://hanstream.gabia.io/contentsList", {});
  const data = await res.data;

  console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data,
  };
};
export default card_pc;
