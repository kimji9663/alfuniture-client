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
          <Link to={linkTo} style={{  width: "100%" }}>
            <PrimaryButton sx={{color: "white", borderRadius: 0, height: "60px", width: "100%" }}>
            {linkText}
            </PrimaryButton>
          </Link>
      </Box>
    </>
  );
};

export default NoData;
