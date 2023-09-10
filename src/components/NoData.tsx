import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../styles/buttons.styles";
import { Typography, Box } from "@mui/material";

interface NoDataProps {
  message: string;
  linkText: string;
  linkTo: string;
}

const NoData: React.FC<NoDataProps> = ({ message, linkText, linkTo }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start", height: "calc(100vh - 57px)",  p:"0 8px", mt: "220px" }}>
        <Typography sx={{ fontWeight: "bold", mb: 2 }}>{message}</Typography>
        <PrimaryButton sx={{ borderRadius: 0, height: "60px", width: "100%" }}>
          <Link to={linkTo} style={{ color: "white" }}>{linkText}</Link>
        </PrimaryButton>
      </Box>
    </>
  );
};

export default NoData;
