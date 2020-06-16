import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Card,
  Navbar,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { signinUpContext } from "../../context/signinup";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import styles from "./topNabBar.module.css";

const topnavbar = observer(() => {
  const signInfo = useContext(signinUpContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const TopNavBarTitleLogoMoblie = styled.span`
    font-size: 35pt;
    text-align: center;
    width: 100%;
  `;
  const HomeTitlePosition = styled.div`
    display: flex;
    justify-content: center;
  `;
  const TopNavBarItemText = styled(Link)`
    color: #333;
    font-size: 13pt;
    font-weight: bold;
    &:hover {
      color: #333;
      text-decoration: none !important;
    }
  `;

  const logout = () => {
    signInfo.kakaoId = "";
    signInfo.name = "";
    signInfo.email = "";
    signInfo.password = "";
    signInfo.JoinOrNot = false;
  };
  const init = () => {
    /* birthInfo.dbName = "";
    birthInfo.birth_year = "";
    birthInfo.birth_total = "";
    birthInfo.birth_month = "";
    birthInfo.birth_day = "";*/
  };
  const DeleteBorder = styled(Card)`
    border: 0;
    margin: 5%;
  `;
  const TopNavbarHomePosition = styled(NavbarBrand)`
    width: 90%;
  `;
  const TopNavbarHomePositionMoblie = styled(NavbarBrand)`
    width: 80%;
  `;
  const TopNavBarTitleLogo = styled.span`
    font-size: 40pt;
    margin-left: 10%;
  `;

  const NavBarOdd = styled(NavItem)`
    background: #2bd9fd;
  `;
  const NavBarEven = styled(NavItem)`
    background: #5feefd;
  `;
  return (
    <div className={styles.navTotal}>
      <div className={styles.navImage}>
        <img src={"/image/sajubaju.png"} alt=".." />
      </div>
      <ul className={styles.navBack}>
        <li className={styles.nav}>
          <Link href="/">
            <span className={styles.navText}>home</span>
          </Link>
        </li>
        <li className={styles.nav}>
          {signInfo.kakaoId === "" ? (
            <Link href="/signin">
              <span className={styles.navText}>로그인</span>
            </Link>
          ) : (
            <Link href="/">
              <span className={styles.navText}>로그아웃</span>
            </Link>
          )}
        </li>
        <li className={styles.nav}>
          <Link href="/simple">
            <span className={styles.navText}>간편테스트</span>
          </Link>
        </li>
      </ul>
    </div>
  );
});

/*topnavbar.getInitialProps = async ({ req }) => {
  return req
    ? { from: "server" } // 서버에서 실행 할 시
    : { from: "client " }; // 클라이언트에서 실행 할 시
};*/

export default topnavbar;
