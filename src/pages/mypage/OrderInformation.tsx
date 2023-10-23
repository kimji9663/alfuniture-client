import React, { useState } from "react"
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary, FormControl, Input } from "@mui/material"
import { styled } from "@mui/material/styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { EllipsisTypography } from "../../components/Typography"
import { Link } from "react-router-dom";
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

export const AccordionMenu = styled(Accordion)(() => ({
  margin: '0 16px',
  boxShadow: 'none',
  // borderBottom: '1px solid #dadada',
  '&.Mui-expanded': {
    margin: '0 16px',
  },
  '&:before': {
    backgroundColor: 'transparent',
  },
  '& .MuiAccordionSummary-root': {
    padding: 0,
    borderBottom: '1px solid #dadada',
    '&.Mui-expanded': {
      minHeight: 0,
    },
    '& > div': {
      margin: '16px 0',
      justifyContent: 'space-between',
    },
    '& > div.Mui-expanded': {
      margin: '16px 0',
    },
    '& p': {
      color: '#999',
    },
    '& .title, & .total_amount': {
      color: '#333',
      fontWeight: 'bold',
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: '16px 0',
    borderTop: '1px solid #333',
  }
}))

const OrderInformation: React.FC<OrderInfo> = ({ data }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <AccordionMenu
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
              <Typography sx={{ fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999", fontWeight: "500" }}>받으시는 분</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color: "#333333", fontWeight: "500" }}>{data.deliveryInfo.recipient}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
              <Typography sx={{ fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999", fontWeight: "500" }}>연락처</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color: "#333333", fontWeight: "500" }}>{data.deliveryInfo.contact}</Typography>
              </Box>
            </Box>
            <Box sx={{ bottom: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Typography sx={{ fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999", fontWeight: "500" }}>배송지</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color: "#333333", fontWeight: "500" }}>{data.deliveryInfo.address}</Typography>
              </Box>
            </Box>
          {/* </Box> */}
        </AccordionDetails>
      </AccordionMenu>

      <AccordionMenu
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
              <Typography sx={{ fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#333333", fontWeight: "500" }}>결제 방법</Typography>
              <Box sx={{ display: "flex", alignItems: "end", flexDirection:"column" }}>
                <Typography sx={{ fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color: "#333333", fontWeight: "500", mb:2}}>{"(" +data.paymentCard + ") " + data.paymentMethod}</Typography>
                <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                  <Typography sx={{fontSize: "12px", lineHeight: "13px", letterSpacing: "-0.25px", color:"#0066FF", fontWeight:"500", borderBottom:"1px solid #0066FF"}}>영수증 보기</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </AccordionMenu>
    </>
  );
};

export default OrderInformation