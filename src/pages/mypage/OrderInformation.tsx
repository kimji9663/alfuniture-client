import React, { useState } from "react"
import { Box, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { EllipsisTypography } from "../../components/Typography"
import { OrderInfoAccordionMenu } from "../../styles/accordion.styles"
import { Link } from "react-router-dom";
import { C999Fs12BoldTypography, C333Fs12Lh12Typography, C333Fs12Typography, C06FFs12Typography } from "../../components/Typography"
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
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}
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
              <C999Fs12BoldTypography>받으시는 분</C999Fs12BoldTypography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <C333Fs12Lh12Typography>{data.deliveryInfo.recipient}</C333Fs12Lh12Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
              <C999Fs12BoldTypography>연락처</C999Fs12BoldTypography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <C333Fs12Lh12Typography>{data.deliveryInfo.contact}</C333Fs12Lh12Typography>
              </Box>
            </Box>
            <Box sx={{ bottom: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
              <C999Fs12BoldTypography>배송지</C999Fs12BoldTypography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <C333Fs12Lh12Typography>{data.deliveryInfo.address}</C333Fs12Lh12Typography>
              </Box>
            </Box>
          {/* </Box> */}
        </AccordionDetails>
      </OrderInfoAccordionMenu>

      <OrderInfoAccordionMenu
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
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
              <C333Fs12Typography>결제 방법</C333Fs12Typography>
              <Box sx={{ display: "flex", alignItems: "end", flexDirection:"column" }}>
                <C333Fs12Lh12Typography sx={{mb:2}}>{"(" +data.paymentCard + ") " + data.paymentMethod}</C333Fs12Lh12Typography>
                <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                  <C06FFs12Typography>영수증 보기</C06FFs12Typography>
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