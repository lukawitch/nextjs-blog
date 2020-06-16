import React, { useContext, useEffect, useState } from "react";
import { Row, Col, CustomInput } from "reactstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TwitterImage from "./twitter.png";
import FacebookImage from "./facebook.png";
import KakaoImage from "./kakaotalk.png";
import LinkImage from "./link.png";

const shareButton = (num, dbname) => {
  //공유링크
  console.log(num);
  const postLink = "https://sajubaju.com/birth?num=" + num.num;
  const twitterLink = "https://twitter.com/intent/tweet?url=" + postLink;
  const facebookLink =
    "http://www.facebook.com/sharer/sharer.php?u=" + postLink;
  const imageLink = "https://sajubaju.com/image/" + dbname + ".png";
  //카카오톡 공유처리
  const sendKakao = () => {
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: props.data[0].listtitle,
        description: "더많은 테스트를보고싶으면",
        imageUrl: imageLink,
        link: {
          //webUrl: postLink,
          mobileWebUrl: postLink,
          androidExecParams: "test",
        },
      },

      buttons: [
        {
          title: "자세히보기",
          link: {
            //webUrl: postLink,
            mobileWebUrl: postLink,
          },
        },
      ],
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  //링크복사가 완료되었을때 alert를 보여줌
  const copyAlert = () => {
    alert("링크복사가 완료되었습니다");
  };
  return (
    <>
      {/*공유버튼 */}
      <Row>
        <Col md="2"></Col>
        <Col xs="3" md="2">
          <div id="kakao-link-btn" onClick={sendKakao}>
            {/*카카오톡버튼 */}
            <img src={KakaoImage} alt=".." class="card-img-top" />
          </div>
        </Col>
        <Col xs="3" md="2">
          <a href={twitterLink}>
            {/*트위터버튼 */}
            <img src={TwitterImage} alt=".." class="card-img-top" />
          </a>
        </Col>
        <Col xs="3" md="2">
          <a href={facebookLink}>
            {/*페이스북버튼 */}
            <img src={FacebookImage} alt=".." class="card-img-top" />
          </a>
        </Col>
        <Col xs="3" md="2">
          {/*그냥링크버튼 */}
          <CopyToClipboard text={postLink}>
            <img
              src={LinkImage}
              alt=".."
              class="card-img-top"
              onClick={copyAlert}
            />
          </CopyToClipboard>
        </Col>
        <Col md="2"></Col>
      </Row>
      <br />
    </>
  );
};

export default shareButton;
