import React, { useContext } from "react";
import styled from "styled-components";
import { birthContext } from "../../context/birth";
import { Card, CardImg } from "reactstrap";
import Link from "next/link";

const image = () => {
  const birthInfo = useContext(birthContext);
  const ImageAlign = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ImageStyle = styled(Card)`
    border: 0px;
    width: 100%;
  `;
  const inputBirthNumber = (num) => {
    //console.log(title.num);
    //console.log(key);
    //let a = title.num;
    /*  const d = new Date();
        console.log(d);
        birthInfo.postNumber = num;
        console.log(birthInfo.postNumber);
        console.log(title.num);
        birthInfo.title = "";
        birthInfo.subtitle = "";
        birthInfo.contents = "";
        birthInfo.birth_year = signInfo.memberYear;
        birthInfo.birth_month = signInfo.memberMon;
        birthInfo.birth_day = signInfo.memberDay;
        birthInfo.getContentsSearch();*/
    birthInfo.postNumber = num;

    //  birthInfo.simpleContentsSearch();
    birthInfo.title = "";
    birthInfo.subtitle = "";
    birthInfo.contents = "";
  };
  return (
    <div>
      <ImageAlign>
        <Link prefetch href="/birth?num=1">
          <ImageStyle>
            <CardImg
              onClick={() => inputBirthNumber(1)}
              top
              width="100%"
              src={"/image/Landlord_slide.png"}
              alt="Card image cap"
            />
          </ImageStyle>
        </Link>
      </ImageAlign>
    </div>
  );
};

export default image;
