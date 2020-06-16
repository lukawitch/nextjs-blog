import React, { useState } from "react";
import {
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Row,
  Col,
  Card,
  Table,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  NavLink,
  Button,
} from "reactstrap";
import styled from "styled-components";
const loginafter = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const CardTitleSize = styled(CardTitle)`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: -1%;
  `;
  const contentsAlert = () => {
    alert("정식오픈해야 열립니다.");
  };
  const WidthPosition = styled.div`
    width: 250%;
  `;
  const Position2 = styled.td`
    min-width: 200px;
  `;
  const TableWidth = styled(Table)`
    width: 250%;
  `;
  const TextCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;
  `;
  const TextTitle = styled.h3`
    display: flex;
    justify-content: center;
    font-weight: bold;
  `;
  return (
    <>
      <TextTitle> 오늘의 운세</TextTitle>
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
          >
            총운
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
          >
            연애
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("3");
            }}
          >
            학업
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("4");
            }}
          >
            금전
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col xs="6">
              <TextCenter>
                <h4>오늘은..?</h4>
                <h1>70점!</h1>
                <h6>좋은 하루겠네요</h6>
              </TextCenter>
            </Col>
            <Col xs="6">
              <Card inverse style={{ border: "0px" }} onClick={contentsAlert}>
                <CardImg
                  top
                  src={"/image/contentsPPong/sun.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col xs="6">
              <TextCenter>
                <h4>오늘은..?</h4>
                <h1>50점!</h1>
                <h6>고백은 잠시미뤄요</h6>
              </TextCenter>
            </Col>
            <Col xs="6">
              <Card inverse style={{ border: "0px" }} onClick={contentsAlert}>
                <CardImg
                  top
                  src={"/image/contentsPPong/rain.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col xs="6">
              <TextCenter>
                <h4>오늘은..?</h4>
                <h1>96점!</h1>
                <h6>벼락치기를 해봐요</h6>
              </TextCenter>
            </Col>
            <Col xs="6">
              <Card inverse style={{ border: "0px" }} onClick={contentsAlert}>
                <CardImg
                  top
                  src={"/image/contentsPPong/rainbow.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col xs="6">
              <TextCenter>
                <h4>오늘은..?</h4>
                <h1>60점!</h1>
                <h6>그냥평범해요</h6>
              </TextCenter>
            </Col>
            <Col xs="6">
              <Card inverse style={{ border: "0px" }} onClick={contentsAlert}>
                <CardImg
                  top
                  src={"/image/contentsPPong/soso.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      무료컨텐츠
      <Table responsive>
        <tr>
          <Position2>
            {" "}
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                src={"/image/contents_Landlord.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나도 건물주 될수있을까</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                width="100%"
                src={"/image/contents_First_Impressions.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>상대가 보는 나의 첫인상은</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_self_admiration.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나는 어떤식으로 자뻑을할까</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_Work_ability.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나의 업무능력은?</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_Overcoming.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>당신의 숨겨진 극복능력</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_latte_is_horse.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>꼰대</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_opponent_hearing.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나의 이상형은?</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contents_jobless.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>돈많은 백수 가능할까?</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
        </tr>
      </Table>
      유료컨텐츠
      <Table responsive>
        <tr>
          <Position2>
            {" "}
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                src={"/image/contentsPPong/1.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 데이트코스</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                width="100%"
                src={"/image/contentsPPong/2.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 티켓팅운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/3.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 당첨운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/4.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나는호구일까</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/5.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의로또번호추천</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/6.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 취직운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/7.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>말년에 돈많은백수 가능?</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/8.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 시험운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/9.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의 면접운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/10.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>오늘의주식</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/11.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>고백성공운</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
          <Position2>
            <Card
              inverse
              style={{ backgroundColor: "#00D3EE", border: "0px" }}
              onClick={contentsAlert}
            >
              <CardImg
                top
                widtd="100%"
                src={"/image/contentsPPong/12.png"}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitleSize>나는 꼰대를 만날까?</CardTitleSize>
              </CardBody>
            </Card>
          </Position2>
        </tr>
      </Table>
    </>
  );
};

export default loginafter;
