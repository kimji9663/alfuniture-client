import React, { useState } from "react"
import { Box, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { EllipsisTypography } from "../../components/Typography"
import { OrderInfoAccordionMenu } from "../../styles/accordion.styles"
import { Link } from "react-router-dom";
import { LabelMediumGray7Typography, LabelMediumGray9ypography, LabelMediumRoyalBlueTypography } from "../../components/Typography"
interface OrderInfo {
  data:{
    deliveryInfo: {
      recipient: string; // 받는 분 이름
      contact: string; // 연락처
      address: string; // 배송 주소
    };
    paymentCard: string; // 결제 카드
    paymentMethod: string; // 결제 방법
  }  
}

const OrderInformation: React.FC<OrderInfo> = ({ data }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <OrderInfoAccordionMenu
        expanded={expanded === "panel1"} 
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">배송지 정보</p>
          <p style={{ width: "135px", overflow: "hidden" }}>
            <EllipsisTypography>
              {data.deliveryInfo.recipient} | {data.deliveryInfo.address}
            </EllipsisTypography>
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Box sx={{mb:2}}> */}
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
              <LabelMediumGray7Typography sx={{lineHeight: "20px"}}>받으시는 분</LabelMediumGray7Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LabelMediumGray9ypography sx={{lineHeight: "12px", letterSpacing: "0.4px"}}>{data.deliveryInfo.recipient}</LabelMediumGray9ypography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
              <LabelMediumGray7Typography sx={{lineHeight: "20px"}}>연락처</LabelMediumGray7Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LabelMediumGray9ypography sx={{lineHeight: "12px", letterSpacing: "0.4px"}}>{data.deliveryInfo.contact}</LabelMediumGray9ypography>
              </Box>
            </Box>
            <Box sx={{ bottom: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
              <LabelMediumGray7Typography sx={{lineHeight: "20px"}}>배송지</LabelMediumGray7Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LabelMediumGray9ypography sx={{lineHeight: "12px", letterSpacing: "0.4px"}}>{data.deliveryInfo.address}</LabelMediumGray9ypography>
              </Box>
            </Box>
          {/* </Box> */}
        </AccordionDetails>
      </OrderInfoAccordionMenu>

      <OrderInfoAccordionMenu
        expanded={expanded === "panel2"} 
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">결제 방법</p>
          <p>{data.paymentCard}</p>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box sx={{ bottom: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
              <LabelMediumGray9ypography>결제 방법</LabelMediumGray9ypography>
              <Box sx={{ display: "flex", alignItems: "end", flexDirection:"column" }}>
                <LabelMediumGray9ypography sx={{mb:2, lineHeight: "12px", letterSpacing: "0.4px"}}>{"(" +data.paymentCard + ") " + data.paymentMethod}</LabelMediumGray9ypography>
                <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                  <LabelMediumRoyalBlueTypography>영수증 보기</LabelMediumRoyalBlueTypography>
                </Link>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </OrderInfoAccordionMenu>
    </>
  );
};

export default OrderInformation