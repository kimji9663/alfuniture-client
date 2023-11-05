import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TitleLargeBoldGray9Typography, LabelMediumGray7Typography, TitleSmallGray9Typography } from "../../components/Typography";

interface MonthlyPostBoxProps {
  data: {
    title: string;
    imageUrl: any;
    description: string;
    author: string;
    linkTo?: string;
  };
}

const MonthlyPostBox: React.FC<MonthlyPostBoxProps> = ({data}) => {
  const { title, imageUrl, description, author, linkTo } = data;
  return (
    <>
      <img src={imageUrl} alt="" style={{ width: "100%", objectFit: "cover" }} />
      <Box sx={{ my: 3 }}>
        <TitleLargeBoldGray9Typography sx={{ mb: 1, lineHeight: "24px", letterSpacing: "-0.25px", }}>
          {title}
        </TitleLargeBoldGray9Typography>
        <LabelMediumGray7Typography sx={{lineHeight: "20px"}}>
          {description}
        </LabelMediumGray7Typography>
        <LabelMediumGray7Typography sx={{lineHeight: "20px"}}>
          {author}
        </LabelMediumGray7Typography>
      </Box>
      {/* <Link to={linkTo}> */}
      <Link to="/monthly_post/umasqu">
        <Button sx={{ color: "#333333", fontSize: "14px", border: "1px solid #999999", borderRadius: 0, px: 2 }}>
          <TitleSmallGray9Typography>보러가기 &gt;</TitleSmallGray9Typography>
        </Button>
      </Link>
    </>
  );
};

export default MonthlyPostBox;
