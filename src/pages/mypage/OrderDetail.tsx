import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { Link } from "react-router-dom";
import { sofa01 } from '../../assets/images/product';
import OrderInformation from "./OrderInformation"

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

const testData = [
  {
    imgsrc: sofa01,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '카멜피아',
    option1: '브라운,블랙',
    option2: '월넛',
    count: 1,
    price: 1594500,
    discount: 159450,
    totalPrice: 1435050,
    deliveryCharge: 0,
    coupon: [
      {
        name: '쿠폰1',
        discount: 14000,
      },
    ],
    deliveryInfo: {
      recipient: "홍길동",
      contact: "010-0000-0000",
      address: "서울특별시 00로 00아파트 000동 000호",
    },
    paymentCard: "국민카드",
    paymentMethod: "일시불",
  },
  // {
  //   imgsrc: table01,
  //   shopName: 'ALFDEN',
  //   modelName: '[23Series] AD-388',
  //   productName: '모닝 데스크',
  //   option1: '옐로우 우든',
  //   option2: null,
  //   count: 1,
  //   price: 300000,
  //   deliveryCharge: 0,
  //   coupon: [],
  // },
];


const OrderDetail = () => {

  const [data, setData] = useState<cartData[]>([]);
  useEffect(() => {
    // 초기 데이터를 기존 데이터에 추가
    setData([...data, ...testData]);
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
                          <Typography sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color:"#333333", fontWeight:"600"}}>{product.shopName}</Typography>
                        </Box>
                        {/* 판매자 정보 버튼 예정 */}
                        <Link to={"/"} style={{display:"flex", alignItems:"center"}} onClick={(e) => {e.preventDefault()}}>
                          <Typography sx={{fontSize: "12px", lineHeight: "13px", letterSpacing: "-0.25px", color:"#0066FF", fontWeight:"500", borderBottom:"1px solid #0066FF"}}>판매자 정보</Typography>
                        </Link>
                      </Box>
                      <Typography sx={{fontSize: "16px", lineHeight: "23px", letterSpacing: "0.15px", height: "23px", color:"#333333", fontWeight:"600"}}>{product.productName}</Typography>
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
                          <Typography sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color:"#333333", fontWeight:"500"}}>상품 금액</Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#999999", fontWeight:"500"}}>{product.price.toLocaleString()+"원"}</Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <Typography sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color:"#333333", fontWeight:"500"}}>상품 할인</Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#999999", fontWeight:"500"}}>{"-"+product.discount.toLocaleString()+"원"}</Typography>
                          </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mb:"4px"}}>
                          <Typography sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color:"#333333", fontWeight:"500"}}>배송비</Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            {product.deliveryCharge === 0 ? <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#999999", fontWeight:"500"}}>무료배송</Typography>
                            : 
                            <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#999999", fontWeight:"500"}}>{product.deliveryCharge.toLocaleString()+"원"}</Typography>}
                          </Box>
                        </Box>
                        <Box sx={{bottom: "0", display: "flex", justifyContent: "space-between", width: "100%"}}>
                          <Typography sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px", color:"#333333", fontWeight:"500"}}>결제 금액</Typography>
                          <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#333333", fontWeight:"500"}}>{product.totalPrice.toLocaleString()+"원"}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* 아코디언 */}
            <OrderInformation data={testData[0]}/>
        </Box>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default OrderDetail