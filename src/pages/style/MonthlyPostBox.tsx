import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { C333Fs20Fw700Typography, C999Fs12Lh20Typography, C333Fs14Typography } from "../../components/Typography";

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
        <C333Fs20Fw700Typography sx={{ mb: 1 }}>
          {title}
        </C333Fs20Fw700Typography>
        <C999Fs12Lh20Typography>
          {description}
        </C999Fs12Lh20Typography>
        <C999Fs12Lh20Typography>
          {author}
        </C999Fs12Lh20Typography>
      </Box>
      {/* <Link to={linkTo}> */}
      <Link to="/monthly_post/umasqu">
        <Button sx={{ color: "#333333", fontSize: "14px", border: "1px solid #999999", borderRadius: 0, px: 2 }}>
          <C333Fs14Typography>보러가기 &gt;</C333Fs14Typography>
        </Button>
      </Link>
    </>
  );
};

export default MonthlyPostBox;
