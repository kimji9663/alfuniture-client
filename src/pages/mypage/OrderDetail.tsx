import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { Link } from "react-router-dom";
import OrderInformation from "./OrderInformation"
import { myPageOrderDetailData } from "../../data"
import { LabelMediumBoldGray9Typography, LabelMediumRoyalBlueTypography, TitleMediumBoldGray9Typography, LabelMediumGray7Typography, LabelMediumGray9ypography } from "../../components/Typography"

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
                          <LabelMediumBoldGray9Typography>{product.shopName}</LabelMediumBoldGray9Typography>
                        </Box>
                        {/* 판매자 정보 버튼 예정 */}
                        <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                          <LabelMediumRoyalBlueTypography>판매자 정보</LabelMediumRoyalBlueTypography>
                        </Link>
                      </Box>
                      <TitleMediumBoldGray9Typography >{product.productName}</TitleMediumBoldGray9Typography>
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
                          <LabelMediumGray9ypography>상품 금액</LabelMediumGray9ypography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <LabelMediumGray7Typography sx={{lineHeight: '12px', letterSpacing: '0.4px',}}>{product.price.toLocaleString()+"원"}</LabelMediumGray7Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <LabelMediumGray9ypography>상품 할인</LabelMediumGray9ypography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <LabelMediumGray7Typography sx={{lineHeight: '12px', letterSpacing: '0.4px',}}>{"-"+product.discount.toLocaleString()+"원"}</LabelMediumGray7Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <LabelMediumGray9ypography>배송비</LabelMediumGray9ypography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            {product.deliveryCharge === 0 ? <LabelMediumGray7Typography sx={{lineHeight: '12px', letterSpacing: '0.4px',}}>무료배송</LabelMediumGray7Typography>
                            : 
                            <LabelMediumGray7Typography sx={{lineHeight: '12px', letterSpacing: '0.4px',}}>{product.deliveryCharge.toLocaleString()+"원"}</LabelMediumGray7Typography>}
                          </Box>
                        </Box>
                        <Box sx={{bottom: "0", display: "flex", justifyContent: "space-between", width: "100%"}}>
                          <LabelMediumGray9ypography>결제 금액</LabelMediumGray9ypography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <LabelMediumGray9ypography>{product.totalPrice.toLocaleString()+"원"}</LabelMediumGray9ypography>
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