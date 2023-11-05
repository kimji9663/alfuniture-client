import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../styles/buttons.styles";
import { Typography, Box } from "@mui/material";

interface NoDataProps {
  message: string;
  linkText: string;
  linkTo: string;
  insideTheTab? : boolean
}

const NoData: React.FC<NoDataProps> = ({ message, linkText, linkTo, insideTheTab }) => {
  return (
    <Box sx={{height:"100%", display:"flex", alignItems:"center", justifyContent:"center", p:1}}>
      {insideTheTab ? (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "calc(100vh - 57px - 140px)", width:"100%"}}>
        <Typography sx={{ fontWeight: "bold", mb: 2 }}>{message}</Typography>
        <Link to={linkTo} style={{  width: "100%" }}>
          <PrimaryButton sx={{color: "white", borderRadius: 0, height: "60px", width: "100%", mb:5 }}>
          {linkText}
          </PrimaryButton>
        </Link>
      </Box>
      ) : (
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "calc(100vh - 57px)", width:"100%"}}>
        <Typography sx={{ fontWeight: "bold", mb: 2 }}>{message}</Typography>
        <Link to={linkTo} style={{  width: "100%" }}>
          <PrimaryButton sx={{color: "white", borderRadius: 0, height: "60px", width: "100%", mb:5 }}>
          {linkText}
          </PrimaryButton>
        </Link>
      </Box>
      )}
    </Box>
  );
};

export default NoData;
