import React from "react"
import { Link } from "react-router-dom"
import { NavWrap } from "./navigationbar.styles"

const NavigationBar = () => {
  return (
    <NavWrap>
      <Link to="/">HOME</Link>
      <Link to="/">STYLE</Link>
      <Link to="/">SHOP</Link>
      <Link to="/">LIKE</Link>
      <Link to="/">MY</Link>
    </NavWrap>
  )
}

export default NavigationBar