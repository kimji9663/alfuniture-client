import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
import { C999Fs12Typography, Fs14Fw700Typography, Fs12Fw700Typography } from "../../components/Typography"

type CouponData = {
  imgsrc: string;
  shopName: string;
  couponName: string;
  startDate: string;
  endDate: string;
  dDay: number;
};

type CouponCardProps = {
  data: CouponData[];
  onCouponClick?: (index: number) => void;
};

const CouponCard: React.FC<CouponCardProps> = ({ data, onCouponClick }) => {
  return (
    <Box style={{ display: "flex", flexDirection:"column" }}>
    {data.map((item, index) => (
      <Box key={index} sx={{flex: "1", mb: "148px"}}>
        {onCouponClick ? (
          <Box sx={{ position: "relative"}}>
            <Link to={"/style/brand"} >
              <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 10, py: 3, pl: 2 }}>
                <Box sx={{ mb: "20px", display: "flex" }}>
                  <Box sx={{ backgroundColor: "rgb(255,255,255,0.5)", py: "4px", px: 1 }}>
                    <C999Fs12Typography sx={{ color: "#FAFAFA" }}>{item.shopName}</C999Fs12Typography>
                  </Box>
                </Box>
                <Box>
                  <Fs14Fw700Typography sx={{ color: "#FAFAFA" }}>{item.couponName}</Fs14Fw700Typography>
                </Box>
                <Box>
                  <C999Fs12Typography>{item.startDate + " - " + item.endDate}
                    <span style={{ color: "#E4E4E4" }}>{" D-" + item.dDay}</span>
                  </C999Fs12Typography>
                </Box>
              </Box>
            </Link>
            <Button sx={{ position: "absolute", top: 71, right: 16, zIndex: 10, py: 1, px: 2, border:"1px solid #FAFAFA", borderRadius:0 }}   onClick={() => {onCouponClick(index)}}>
              <Fs12Fw700Typography sx={{ lineHeight: "16px", color: "#FAFAFA" }}>쿠폰 받기</Fs12Fw700Typography>
            </Button>
          <img src={item.imgsrc} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", filter: "brightness(50%)", height: "128px", width: "100%", zIndex: 0 }} />
        </Box>
        ) : (
        <Link to={"/style/brand"} >
          <Box sx={{ position: "relative"}}>
            <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 10, py: 3, pl: 2 }}>
              <Box sx={{ mb: "20px", display: "flex" }}>
                <Box sx={{ backgroundColor: "rgb(255,255,255,0.5)", py: "4px", px: 1 }}>
                  <C999Fs12Typography sx={{ color: "#FAFAFA" }}>{item.shopName}</C999Fs12Typography>
                </Box>
              </Box>
              <Box>
                <Fs14Fw700Typography sx={{ color: "#FAFAFA" }}>{item.couponName}</Fs14Fw700Typography>
              </Box>
              <Box>
                <C999Fs12Typography>{item.startDate + " - " + item.endDate}
                  <span style={{ color: "#E4E4E4" }}>{" D-" + item.dDay}</span>
                </C999Fs12Typography>
              </Box>
            </Box>
            <img src={item.imgsrc} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", filter: "brightness(50%)", height: "128px", width: "100%", zIndex: 0 }} />
          </Box>
        </Link>
        )}
      </Box>
    ))}
  </Box>
  );
};

export default CouponCard;