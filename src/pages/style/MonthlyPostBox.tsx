import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

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
        <Typography sx={{ fontSize: 20, fontWeight: "700", color: "#333333", lineHeight: "24px", letterSpacing: "-0.25px", mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: "400", color: "#999999", lineHeight: "20px", letterSpacing: "-0.25px" }}>
          {description}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: "400", color: "#999999", lineHeight: "20px", letterSpacing: "-0.25px" }}>
          {author}
        </Typography>
      </Box>
      {/* <Link to={linkTo}> */}
      <Link to="/monthly_post/umasqu">
        <Button sx={{ color: "#333333", fontSize: "14px", border: "1px solid #999999", borderRadius: 0, px: 2 }}>
          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>보러가기 &gt;</Typography>
        </Button>
      </Link>
    </>
  );
};

export default MonthlyPostBox;
