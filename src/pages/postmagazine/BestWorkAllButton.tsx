import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HalfArrowRigth } from "../../assets/images"
import { useNavigate } from 'react-router-dom'
import { C000Fs20Fw700Lh20Typography } from '../../components/Typography'

interface AerobieyBestWorkProps {
  title?: string;
}

const BestWorkAllButton: React.FC<AerobieyBestWorkProps> = ({ title }) => {
  const navigate = useNavigate();
  const goToBrand = () => {
    navigate("/style/brand")
  }
  return (
    <Box sx={{ mx: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <C000Fs20Fw700Lh20Typography>
        {title === undefined ? '':title +"의 대표작"}
      </C000Fs20Fw700Lh20Typography>
      {/* <Link to="/"> */}
        <Button style={{ display: "flex", color: "#333333", height: "20px", borderRadius: 0 }}>
          <Typography sx={{ fontSize: 12, lineHeight: "16px", mr: "10px" }}>ALL</Typography>
          <HalfArrowRigth onClick={goToBrand}/>
        </Button>
      {/* </Link> */}
    </Box>
  );
};

export default BestWorkAllButton;
