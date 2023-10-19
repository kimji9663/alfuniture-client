import React, { useState } from "react"
import { Box, Card, CardHeader, CardMedia, CardActions, Typography, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { deliveryProduct } from "../../assets/images/product"
import { styled } from "@mui/material/styles" 
import { OutlineButton } from "../../styles/buttons.styles"
import { IconCircleGray, IconDeliveryCompleted, IconTelGray } from "../../assets/images"

const OrderCard = styled(Card)(() => ({
  marginBottom: '16px',
  borderRadius: 0,
  border: '0.5px solid #8F8F8F', 
  boxShadow: 'none', 
  '& .MuiCardHeader-root': {
    padding: '8px 16px',
    borderBottom: '0.5px solid #8F8F8F',
    '& .MuiCardHeader-title': {
      color: '#666',
      fontSize: '.875rem',
    },
  },
  '& .MuiCardMedia-root': {
    marginRight: '16px',
    flex: '0 0 100px',
  },
  '& .card_content': {
    padding: '16px',
  },
  '& .card_content .state': {
    fontSize: '.75rem', 
    color: '#333', 
    fontWeight: 'bold',
  },
  '& .card_content .product': {
    display: 'flex',
    marginTop: '16px',
  },
  '& .MuiCardActions-root': {
    padding: '16px',
    '& > button': {
      flex: '1 1 auto',
      borderRadius: 0,
      borderColor: '#8F8F8F',
      color: '#666',
    },
  },
}))

const centerTitle = ['배송 조회']

const MyDeliveryInfo = [
  {
    date: '2023.02.23',
    state: '배송준비중',
    img: deliveryProduct,
    brand: 'HC ART',
    optionCode: '[21Series] HCA-309',
    name: 'HC 아트 우든체어',
    deliveryNum: "158290398",
    deliveryData: [
                    {
                        "location": "해외배송",
                        "deliveryStatus": "집하",
                        "date": "3/14(화)  06:33"
                    },
                    {
                        "location": "이탈리아 > 인청항",
                        "deliveryStatus": "배송중",
                        "date": "3/15(수)  01:14"
                    },
                    {
                        "location": "통관",
                        "deliveryStatus": "통관절차 진행중",
                        "date": "3/15(수)  08:21"
                    },
                    {
                        "location": "통관",
                        "deliveryStatus": "통관 처리완료",
                        "date": "3/15(수)  08:21"
                    },
                    {
                        "location": "국내배송",
                        "deliveryStatus": "배송중",
                        "date": "3/15(수)  14:02"
                    },
                    {
                        "location": "판교",
                        "deliveryStatus": "배송완료",
                        "date": "3/15(수)  17:11"
                    }
                ]
  },
]

MyDeliveryInfo.forEach((info) => {
  info.deliveryData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const DeliveryDetail = () => {

  return (
    <>
      <CenterTitle title={centerTitle}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{ p: 2 }}>
          {
            MyDeliveryInfo.map((el, index) => (
              <Box key={index}>
                <OrderCard>
                  <CardHeader title={el.date} />
                  <div className="card_content">
                    <p className="state">{el.state}</p>
                    <Box className="product">
                      <CardMedia
                        component="img"
                        height="80"
                        image={el.img}
                        alt="deliveryProduct"
                      />
                      <Box
                        sx={{
                          flex: '1 1 auto',
                          display:"flex",
                          flexDirection:"column",
                          justifyContent:"space-between"
                        }}
                      >
                        <Typography sx={{ fontSize: '10px', fontWeight: '700', color:"#666666", letterSpacing:"0.4px" ,minWidth:"65px"}}>빠른배송</Typography>
                        
                        <Box sx={{display:"flex"}}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '500', color:"#333333", letterSpacing:"-0.25px" ,minWidth:"65px"}}>{el.brand}</Typography>
                          <Box>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', color:"#999999", letterSpacing:"-0.25px" }}>{el.optionCode}</Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', color:"#999999", letterSpacing:"-0.25px" }}>{el.name}</Typography>
                          </Box>
                        </Box>
                        
                        <Box sx={{display:"flex", width:"100%"}}>
                          <Typography sx={{ fontSize: '12px', fontWeight: '500', color:"#333333", letterSpacing:"-0.25px" ,minWidth:"65px"}}>운송장 번호</Typography>
                          <Box sx={{display:"flex", justifyContent:"space-between", width: "100%"}}>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', color:"#999999", letterSpacing:"-0.25px" }}>{el.deliveryNum}</Typography>
                            <Button sx={{borderRadius:0, border:"0.5px solid #D9D9D9", display:"flex", p:"1px 5px", minWidth:"30px", color:"#666"}}>
                              <Typography sx={{ fontSize: '10px', fontWeight: '400', color:"#7E7E7E", letterSpacing:"-0.25px" }}>복사</Typography>
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                  <CardActions>
                    <OutlineButton>
                      <IconTelGray style={{marginRight:"5px"}}/>
                      CJ대한통운
                    </OutlineButton>
                  </CardActions>
                </OrderCard>
              </Box>
            ))
          }
          
          <Box sx={{ mt: 3, mb: 5 }}>
            {MyDeliveryInfo[0].deliveryData.map((item, index) => (
              <Box sx={{ display: "flex" }} key={index}>
                {MyDeliveryInfo[0].deliveryData.length === 1 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.location + " | " + item.deliveryStatus}</Typography>
                      <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.date}</Typography>
                    </Box>
                  </>
                ) : index === 0 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <Box sx={{ml:"5.6px", mt:1, minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                      <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.location + " | " + item.deliveryStatus}</Typography>
                      <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.date}</Typography>
                    </Box>
                  </>
                  ) : item.deliveryStatus === "배송완료" ? (
                <>
                  <Box sx={{position:"relative"}}>
                    <Box sx={{ml:"5.6px", mt:1, minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                    <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                  </Box>
                  <Box sx={{ml: 5}}>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.location + " | " + item.deliveryStatus}</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color:"#000000", lineHeight:"20px" }}>{item.date}</Typography>
                  </Box>
                </>
                ) : index === MyDeliveryInfo[0].deliveryData.length - 1 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <Box sx={{ml:"5.6px", height: "5px",borderLeft: "1px solid #D9D9D9"}}></Box>
                      <IconCircleGray style={{position:"absolute", top:4,left:0}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <Typography sx={{ fontSize: '14px', fontWeight: '400', color:"#999999", lineHeight:"20px" }}>{item.location + " | " + item.deliveryStatus}</Typography>
                      <Typography sx={{ fontSize: '14px', fontWeight: '400', color:"#999999", lineHeight:"20px" }}>{item.date}</Typography>
                    </Box>
                  </>
                ) : (
                <>
                  <Box sx={{position:"relative"}}>
                    <Box sx={{ml:"5.6px", minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                    <IconCircleGray style={{position:"absolute", top:4,left:0}}/>
                  </Box>
                  <Box sx={{ml: 5}}>
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', color:"#999999", lineHeight:"20px" }}>{item.location + " | " + item.deliveryStatus}</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', color:"#999999", lineHeight:"20px" }}>{item.date}</Typography>
                  </Box>
                </>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}

export default DeliveryDetail