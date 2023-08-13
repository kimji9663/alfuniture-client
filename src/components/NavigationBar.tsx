import React from "react";
import { Link } from "react-router-dom";
import { NaviWrap } from "./navigationbar.styles";
import { useLocation } from "react-router-dom";
import {
  IconHome,
  IconStyle,
  IconShop,
  IconLike,
  IconMy,
} from "../assets/images";

const NavigationBar = () => {
  const location = useLocation()

  const navigationActive = (path:string) => {
    const currentPath = location.pathname
    if (currentPath.includes(path)) {
      return "active"
    }
  }

  return (
    <>
      <NaviWrap className="navi">
        <Link to="/home" className={navigationActive("/home")}>
          <IconHome />
          HOME
        </Link>
        <Link to="/" className={navigationActive("/style")}>
          <IconStyle />
          STYLE
        </Link>
        <Link to="/shop/shop_all" className={navigationActive("/shop")}>
          <IconShop />
          SHOP
        </Link>
        <Link to="/like" className={navigationActive("/like")}>
          <IconLike />
          LIKE
        </Link>
        <Link to="/" className={navigationActive("/my")}>
          <IconMy />
          MY
        </Link>
      </NaviWrap>
    </>
  );
};

export default NavigationBar;
