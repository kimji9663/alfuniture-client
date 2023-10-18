import React, { useState } from "react"
import { Box, Typography } from "@mui/material"

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
  hasCoupon: boolean; // 쿠폰 보유 여부
};

const CouponCard: React.FC<CouponCardProps> = ({ data, hasCoupon  }) => {
  return (
    <Box style={{ display: "flex", flexDirection:"column" }}>
    {data.map((item, index) => (
      <Box key={index} sx={{flex: "1", mb: "148px"}}>
        <Box sx={{ position: "relative"}}>
          <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 10, py: 3, pl: 2 }}>
            <Box sx={{ mb: "20px", display: "flex" }}>
              <Box sx={{ backgroundColor: "rgb(255,255,255,0.5)", py: "4px", px: 1 }}>
                <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: "#FAFAFA", fontWeight: "500", letterSpacing: "-0.25px" }}>{item.shopName}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: "#FAFAFA", fontWeight: "700", letterSpacing: "-0.25px" }}>{item.couponName}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: "#999999", fontWeight: "500", letterSpacing: "-0.25px" }}>{item.startDate + " - " + item.endDate}
                <span style={{ color: "#E4E4E4" }}>{" D-" + item.dDay}</span>
              </Typography>
            </Box>
          </Box>
          {!hasCoupon && (
            <Box sx={{ position: "absolute", top: 71, right: 16, zIndex: 10, py: 1, px: 2, border:"1px solid #FAFAFA" }}>
              <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: "#FAFAFA", fontWeight: "700", letterSpacing: "-0.25px" }}>쿠폰 받기</Typography>
            </Box>
          )}
          <img src={item.imgsrc} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", filter: "brightness(50%)", height: "128px", width: "100%", zIndex: 0 }} />
        </Box>
      </Box>
    ))}
  </Box>
  );
};

export default CouponCard;