import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

export default NavigationBar;
