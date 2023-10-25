import React, { useState } from "react"
import { Box, CardHeader, CardMedia, CardActions, Typography, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { myDeliveryInfo } from "../../data"
import { OutlineButton } from "../../styles/buttons.styles"
import { DeliveryInfoOrderCard } from "../../styles/card.style"
import { IconCircleGray, IconDeliveryCompleted, IconTelGray } from "../../assets/images"

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
                ) : index === myDeliveryInfo[0].deliveryData.length - 1 ? (
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