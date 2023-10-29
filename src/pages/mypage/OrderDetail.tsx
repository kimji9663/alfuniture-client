import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { Link } from "react-router-dom";
import OrderInformation from "./OrderInformation"
import { myPageOrderDetailData } from "../../data"
import { C333Fs12BoldTypography, C06FFs12Typography, C333Fs16Typography, C333Fs12Typography, C999Fs12Lh12Typography, C333Fs12Lh12Typography } from "../../components/Typography"

interface cartData {
  imgsrc: any,
  shopName: string,
  modelName: string,
  productName: string,
  option1: string,
  option2: any,
  price: number,
  discount: number,
  totalPrice: number,
  count: number,
  deliveryCharge: number,
  coupon?: Array<object>,
}

const OrderDetail = () => {

  const [data, setData] = useState<cartData[]>([]);
  useEffect(() => {
    // 초기 데이터를 기존 데이터에 추가
    setData([...data, ...myPageOrderDetailData]);
  }, []); 
  
  return (
    <Box sx={{minHeight:"100vh", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <Box>
        <CenterTitle title={["주문 상세내역"]}/>
        <Box sx={{mt:2}}>
        {data.map((product, index) => (
              <Box
                key={index}
                sx={{
                  p: '24px 16px',
                  display: 'flex',
                  background: '#F7F7F7',
                  mb: "26px",
                  alignItems: 'flex-start',
                }}
              >
                
                <Box sx={{flexGrow: "1"}}>
                  <Box 
                    sx={{
                    display: 'flex'
                  }}>
                    <Box 
                      sx={{
                      width: '100px',
                      height: '100px',
                      mr: 2
                    }}>
                      <img
                        src={product.imgsrc}
                        alt={product.productName}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </Box>
                    <Box 
                      sx={{flexGrow: "1"}}>
                      <Box sx={{height: "20px", display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <Box >
                          <C333Fs12BoldTypography>{product.shopName}</C333Fs12BoldTypography>
                        </Box>
                        {/* 판매자 정보 버튼 예정 */}
                        <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                          <C06FFs12Typography>판매자 정보</C06FFs12Typography>
                        </Link>
                      </Box>
                      <C333Fs16Typography >{product.productName}</C333Fs16Typography>
                      <Box sx={{fontSize: "12px", height: "20px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999"}}>
                        <span style={{marginRight: "8px"}}>{product.option1}</span>
                        <span style={{fontSize: "14px", marginRight: "8px"}}>|</span>
                        {product.option2 && 
                        <span>
                          <span style={{marginRight: "8px"}}>{product.option2}</span>
                          <span style={{fontSize: "14px", marginRight: "8px"}}>|</span>
                        </span>}
                        <span><span>{product.count}</span>개</span>
                      </Box>
                      <Box sx={{mt:2}}>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <C333Fs12Typography>상품 금액</C333Fs12Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <C999Fs12Lh12Typography>{product.price.toLocaleString()+"원"}</C999Fs12Lh12Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <C333Fs12Typography>상품 할인</C333Fs12Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <C999Fs12Lh12Typography>{"-"+product.discount.toLocaleString()+"원"}</C999Fs12Lh12Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <C333Fs12Typography>배송비</C333Fs12Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            {product.deliveryCharge === 0 ? <C999Fs12Lh12Typography>무료배송</C999Fs12Lh12Typography>
                            : 
                            <C999Fs12Lh12Typography>{product.deliveryCharge.toLocaleString()+"원"}</C999Fs12Lh12Typography>}
                          </Box>
                        </Box>
                        <Box sx={{bottom: "0", display: "flex", justifyContent: "space-between", width: "100%"}}>
                          <C333Fs12Typography>결제 금액</C333Fs12Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <C333Fs12Lh12Typography>{product.totalPrice.toLocaleString()+"원"}</C333Fs12Lh12Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* 아코디언 */}
            <OrderInformation data={myPageOrderDetailData[0]}/>
        </Box>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default OrderDetail