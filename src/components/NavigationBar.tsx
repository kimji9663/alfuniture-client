import React from "react"
import { Link } from "react-router-dom"
import { NavWrap } from "./navigationbar.styles"
import { icon_home, icon_style, icon_shop, icon_like, icon_my } from "../assets/images"

const NavigationBar = () => {
  return (
    <NavWrap>
      <Link to="/">
        <img src={icon_home} alt="home" />
        HOME
      </Link>
      <Link to="/">
        <img src={icon_style} alt="style" />
        STYLE
      </Link>
      <Link to="/">
        <img src={icon_shop} alt="shop" />
        SHOP
      </Link>
      <Link to="/">
        <img src={icon_like} alt="like" />
        LIKE
      </Link>
      <Link to="/">
        <img src={icon_my} alt="my" />
        MY
      </Link>
    </NavWrap>
  )
}

export default NavigationBar