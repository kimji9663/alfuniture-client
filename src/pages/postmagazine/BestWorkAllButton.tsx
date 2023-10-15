import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HalfArrowRigth } from "../../assets/images"
import { Link } from 'react-router-dom';

interface AerobieyBestWorkProps {
  title?: string;
}

const BestWorkAllButton: React.FC<AerobieyBestWorkProps> = ({ title }) => {
  return (
    <Box sx={{ mx: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography sx={{ fontSize: 20, fontWeight: "700", color: "#000000", lineHeight: "20px", letterSpacing: "-0.7px" }}>
        {title === undefined ? '':title +"의 대표작"}
      </Typography>
      {/* <Link to="/"> */}
        <Button style={{ display: "flex", color: "#333333", height: "20px", borderRadius: 0 }}>
          <Typography sx={{ fontSize: 12, lineHeight: "16px", mr: "10px" }}>ALL</Typography>
          <HalfArrowRigth/>
        </Button>
      {/* </Link> */}
    </Box>
  );
};

export default BestWorkAllButton;
