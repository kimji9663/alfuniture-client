import React, { useState } from "react"
import { Box, CardHeader, CardMedia, CardActions, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { myDeliveryInfo } from "../../data"
import { OutlineButton } from "../../styles/buttons.styles"
import { DeliveryInfoOrderCard } from "../../styles/card.style"
import { IconCircleGray, IconDeliveryCompleted, IconTelGray } from "../../assets/images"
import { C666Fs10Fw700Typography, C333Fs14Fw500Typography, C999Fs12NoLhTypography, C333Fs12NoLhTypography, C7E7E7EFs10Fw400Typography, C000Fs14Fw700Lh20Typography, C999Fs14Fw400Typography } from "../../components/Typography"

const centerTitle = ['배송 조회']

myDeliveryInfo.forEach((info) => {
  info.deliveryData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const DeliveryDetail = () => {

  return (
    <>
      <CenterTitle title={centerTitle}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{ p: 2 }}>
          {
            myDeliveryInfo.map((el, index) => (
              <Box key={index}>
                <DeliveryInfoOrderCard>
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
                        <C666Fs10Fw700Typography sx={{ minWidth:"65px" }}>빠른배송</C666Fs10Fw700Typography>
                        
                        <Box sx={{display:"flex"}}>
                          <C333Fs14Fw500Typography sx={{ minWidth:"65px" }}>{el.brand}</C333Fs14Fw500Typography>
                          <Box>
                            <C999Fs12NoLhTypography>{el.optionCode}</C999Fs12NoLhTypography>
                            <C999Fs12NoLhTypography>{el.name}</C999Fs12NoLhTypography>
                          </Box>
                        </Box>
                        
                        <Box sx={{display:"flex", width:"100%"}}>
                          <C333Fs12NoLhTypography sx={{ minWidth:"65px"}}>운송장 번호</C333Fs12NoLhTypography>
                          <Box sx={{display:"flex", justifyContent:"space-between", width: "100%"}}>
                            <C999Fs12NoLhTypography>{el.deliveryNum}</C999Fs12NoLhTypography>
                            <Button sx={{borderRadius:0, border:"0.5px solid #D9D9D9", display:"flex", p:"1px 5px", minWidth:"30px", color:"#666"}}>
                              <C7E7E7EFs10Fw400Typography>복사</C7E7E7EFs10Fw400Typography>
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
                </DeliveryInfoOrderCard>
              </Box>
            ))
          }
          
          <Box sx={{ mt: 3, mb: 5 }}>
            {myDeliveryInfo[0].deliveryData.map((item, index) => (
              <Box sx={{ display: "flex" }} key={index}>
                {myDeliveryInfo[0].deliveryData.length === 1 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <C000Fs14Fw700Lh20Typography>{item.location + " | " + item.deliveryStatus}</C000Fs14Fw700Lh20Typography>
                      <C000Fs14Fw700Lh20Typography>{item.date}</C000Fs14Fw700Lh20Typography>
                    </Box>
                  </>
                ) : index === 0 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <Box sx={{ml:"5.6px", mt:1, minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                      <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <C000Fs14Fw700Lh20Typography>{item.location + " | " + item.deliveryStatus}</C000Fs14Fw700Lh20Typography>
                      <C000Fs14Fw700Lh20Typography>{item.date}</C000Fs14Fw700Lh20Typography>
                    </Box>
                  </>
                  ) : item.deliveryStatus === "배송완료" ? (
                <>
                  <Box sx={{position:"relative"}}>
                    <Box sx={{ml:"5.6px", mt:1, minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                    <IconDeliveryCompleted style={{position:"absolute", top:4,left:"-2px"}}/>
                  </Box>
                  <Box sx={{ml: 5}}>
                    <C000Fs14Fw700Lh20Typography>{item.location + " | " + item.deliveryStatus}</C000Fs14Fw700Lh20Typography>
                    <C000Fs14Fw700Lh20Typography>{item.date}</C000Fs14Fw700Lh20Typography>
                  </Box>
                </>
                ) : index === myDeliveryInfo[0].deliveryData.length - 1 ? (
                  <>
                    <Box sx={{position:"relative"}}>
                      <Box sx={{ml:"5.6px", height: "5px",borderLeft: "1px solid #D9D9D9"}}></Box>
                      <IconCircleGray style={{position:"absolute", top:4,left:0}}/>
                    </Box>
                    <Box sx={{ml: 5}}>
                      <C999Fs14Fw400Typography>{item.location + " | " + item.deliveryStatus}</C999Fs14Fw400Typography>
                      <C999Fs14Fw400Typography>{item.date}</C999Fs14Fw400Typography>
                    </Box>
                  </>
                ) : (
                <>
                  <Box sx={{position:"relative"}}>
                    <Box sx={{ml:"5.6px", minHeight:"60px", borderLeft: "1px solid #D9D9D9"}}></Box>
                    <IconCircleGray style={{position:"absolute", top:4,left:0}}/>
                  </Box>
                  <Box sx={{ml: 5}}>
                    <C999Fs14Fw400Typography>{item.location + " | " + item.deliveryStatus}</C999Fs14Fw400Typography>
                    <C999Fs14Fw400Typography>{item.date}</C999Fs14Fw400Typography>
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