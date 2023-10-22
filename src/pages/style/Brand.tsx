import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import WhiteTitle from '../../components/title/WhiteTitle'
import { onerain03 } from "../../assets/images/product"
import { IconRadioOn, IconRadioOff } from "../../assets/images"
import onerainDetail from "../../assets/images/brand/onerainDetail.png"
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar"
import { chair02, table01 } from "../../assets/images/product"

export const brandItemData = [
  {
    id: 0,
    imgsrc: onerain03,
    shopName: 'ONERAIN',
    modelName: '[23 Series] OR-512',
    productName: '원레인 더티 러그',
    price: 230000
  },
  {
    id: 1,
    imgsrc: chair02,
    shopName: 'ONERAIN',
    modelName: '[23 Series] OR-309',
    productName: '원레인 아트체어',
    price: 230000
  },
  {
    id: 2,
    imgsrc: table01,
    shopName: 'ONERAIN',
    modelName: '[23 Series] OR-555',
    productName: '원레인 테이블',
    price: 420000
  },
]

const Brand = () => {
  function formatPrice(price: any) {
    return price.toLocaleString();
  }
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const iconCoordinates = [
    { top: "500px", left: "200px" }, // 아이콘 0의 좌표
    { top: "430px", left: "90px" },  // 아이콘 1의 좌표
    { top: "340px", left: "210px" }, // 아이콘 2의 좌표
  ];

  const handleIconClick = (index: any) => {
    setSelectedIconIndex(index);
  };

  const selectedIconCoordinates = iconCoordinates[selectedIconIndex] || {}; // 선택된 아이콘의 좌표

  // 선택된 아이콘의 데이터 가져오기
  const selectedBrandData = brandItemData[selectedIconIndex] || {};

  return (
    <>
    <Box sx={{position:"relative", height: "100vh"}}>
      <Box sx={{position:"absolute", top:0, zIndex:2,width: "100%"}}>
        <WhiteTitle title={["모던한 인테리어 디자인"]}/>
      </Box>
      <img src={onerainDetail} alt="" style={{position:"absolute", width: "100%", zIndex:1, objectFit: "cover", height: "100%"}}/>
      {iconCoordinates.map((coord, index) => (
        <div
          key={index}
          style={{
            zIndex: 2,
            position: "absolute",
            top: coord.top,
            left: coord.left,
            cursor: "pointer",
            opacity: selectedIconIndex === index ? 0 : 1, // 선택된 아이콘에 대한 스타일 적용
          }}
          onClick={() => handleIconClick(index)}
        >
          <IconRadioOff />
        </div>
      ))}
      {selectedIconCoordinates && (
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            top: selectedIconCoordinates.top,
            left: selectedIconCoordinates.left,
          }}
        >
          <IconRadioOn />
        </div>
      )}
    </Box>
    
      {selectedBrandData && (
        <Link to={"/shop/product_view"}>
        <Box sx={{position:"fixed", bottom: "74px", backgroundColor: "rgba(255, 255, 255, 0.8)", width: "100%", p: 2, display: "flex", zIndex:2}}>
        <Box sx={{pr: 2, borderRight: "1px solid #666666", display: "flex"}}>
          <img src={selectedBrandData.imgsrc} alt="" style={{width: "100px", height: "100px", objectFit: "cover", zIndex:10, opacity: 1, }}/>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", pl:2}}>
          <Typography sx={{ fontSize: 14, fontWeight: "500", lineHeight:"20px", letterSpacing: "2%", color:"#333333" }}>{selectedBrandData.shopName}</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", lineHeight:"20px", letterSpacing: "-0.25px", color:"#999999" }}>{selectedBrandData.modelName}</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", lineHeight:"20px", letterSpacing: "-0.25px", color:"#999999" }}>{selectedBrandData.productName}</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", lineHeight: "20px", letterSpacing: "-0.25px", color: "#666666" }}>
            {selectedBrandData.price.toLocaleString()} won
          </Typography>
        </Box>
      </Box>
      </Link>
      )}
    <NavigationBar/>
  </>
  )
}

export default Brand;
