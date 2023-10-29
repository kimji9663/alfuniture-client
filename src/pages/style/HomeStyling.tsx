import React, { useState } from "react"
import { Box } from "@mui/material"
import WhiteTitle from '../../components/title/WhiteTitle'
import { IconRadioOn, IconRadioOff } from "../../assets/images"
import onerainDetail from "../../assets/images/brand/onerainDetail.png"
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar"
import { homeStylingProductData } from "../../data"
import { ScrollToTop } from '../../App'
import { C333Fs14Fw500Ls20Typography, C999Fs12Lh20Typography, C666Fs12Lh20Typography } from '../../components/Typography'

const HomeStyling = () => {
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
  const selectedBrandData = homeStylingProductData[selectedIconIndex] || {};
  ScrollToTop();
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
          <C333Fs14Fw500Ls20Typography>{selectedBrandData.shopName}</C333Fs14Fw500Ls20Typography>
          <C999Fs12Lh20Typography>{selectedBrandData.modelName}</C999Fs12Lh20Typography>
          <C999Fs12Lh20Typography>{selectedBrandData.productName}</C999Fs12Lh20Typography>
          <C666Fs12Lh20Typography>{selectedBrandData.price.toLocaleString()} won</C666Fs12Lh20Typography>
        </Box>
      </Box>
      </Link>
      )}
    <NavigationBar/>
  </>
  )
}

export default HomeStyling;
