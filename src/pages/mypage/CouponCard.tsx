import React from "react"
import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
import { LabelMediumGray7Typography, TitleSmallBoldTypography, LabelMediumBoldTypography } from "../../components/Typography"

type CouponData = {
  imgsrc: string;
  shopName: string;
  couponName: string;
  startDate: string;
  endDate: string;
  dDay: number;
};

/** 남은 일수 표시: 만료(음수) → "기간 만료", 오늘 → "D-Day", 그 외 → "D-n" */
export const dDayLabel = (dDay: number) => (dDay < 0 ? "기간 만료" : dDay === 0 ? "D-Day" : `D-${dDay}`)

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
                    <LabelMediumGray7Typography sx={{ color: "#FAFAFA", lineHeight: "16px" }}>{item.shopName}</LabelMediumGray7Typography>
                  </Box>
                </Box>
                <Box>
                  <TitleSmallBoldTypography sx={{ color: "#FAFAFA" }}>{item.couponName}</TitleSmallBoldTypography>
                </Box>
                <Box>
                  <LabelMediumGray7Typography sx={{lineHeight: "16px", color: "#E4E4E4"}}>{item.startDate + " - " + item.endDate}
                    <span style={{ color: "#E4E4E4" }}>{" " + dDayLabel(item.dDay)}</span>
                  </LabelMediumGray7Typography>
                </Box>
              </Box>
            </Link>
            <Button disabled={item.dDay < 0} sx={{ position: "absolute", top: 71, right: 16, zIndex: 10, py: 1, px: 2, border:"1px solid #FAFAFA", borderRadius:0 }}   onClick={() => {onCouponClick(index)}}>
              <LabelMediumBoldTypography sx={{ lineHeight: "16px", color: "#FAFAFA" }}>{item.dDay < 0 ? "기간 만료" : "쿠폰 받기"}</LabelMediumBoldTypography>
            </Button>
          <img src={item.imgsrc} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", filter: item.dDay < 0 ? "brightness(40%) grayscale(100%)" : "brightness(50%)", height: "128px", width: "100%", zIndex: 0 }} />
        </Box>
        ) : (
        <Link to={"/style/brand"} >
          <Box sx={{ position: "relative"}}>
            <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 10, py: 3, pl: 2 }}>
              <Box sx={{ mb: "20px", display: "flex" }}>
                <Box sx={{ backgroundColor: "rgb(255,255,255,0.5)", py: "4px", px: 1 }}>
                  <LabelMediumGray7Typography sx={{ color: "#FAFAFA", lineHeight: "16px" }}>{item.shopName}</LabelMediumGray7Typography>
                </Box>
              </Box>
              <Box>
                <TitleSmallBoldTypography sx={{ color: "#FAFAFA" }}>{item.couponName}</TitleSmallBoldTypography>
              </Box>
              <Box>
                <LabelMediumGray7Typography sx={{lineHeight: "16px", color: "#E4E4E4"}}>{item.startDate + " - " + item.endDate}
                  <span style={{ color: "#E4E4E4" }}>{" " + dDayLabel(item.dDay)}</span>
                </LabelMediumGray7Typography>
              </Box>
            </Box>
            <img src={item.imgsrc} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", filter: item.dDay < 0 ? "brightness(40%) grayscale(100%)" : "brightness(50%)", height: "128px", width: "100%", zIndex: 0 }} />
          </Box>
        </Link>
        )}
      </Box>
    ))}
  </Box>
  );
};

export default CouponCard;