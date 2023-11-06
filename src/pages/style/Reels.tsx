import React from "react";
import { Box } from "@mui/material"
import WhiteTitle from "../../components/title/WhiteTitle"
import NavigationBar from "../../components/NavigationBar"
import { TitleSmallWhiteTypography } from "../../components/Typography"
import { IconSpeechBubble, IconHeartWhite, user_profile } from "../../assets/images/"

function Reels() {
  return (
    <>
      <Box sx={{display:"flex", position:"relative", minHeight:"calc(100vh - 74px)"}}>
        <video muted autoPlay loop height="100%" width="100%" style={{minHeight:"calc(100vh - 74px)", maxHeight:"calc(100vh - 74px)", overflow:"hidden", objectFit:"cover", position:"absolute", top:0, left:0}}>
          <source src="/videos/video3.mp4" type="video/mp4" />
        </video>
        <Box>
          <WhiteTitle title={["모던한 인테리어 디자인"]}/>
        </Box>
        <Box sx={{position:"fixed", bottom:"74px", backgroundColor: "rgba(255, 255, 255, 0)", width: "100%", maxWidth:"420px", p: 2}}>
          <Box sx={{display:"flex", alignItems:"center", mb:2}}>
            <img src={user_profile} alt="" style={{marginRight:"8px"}}/>
            <TitleSmallWhiteTypography sx={{fontWeight:"bold"}}>
              forebomi
            </TitleSmallWhiteTypography>
          </Box>
          <TitleSmallWhiteTypography sx={{mb:2}}>
            모던하면서 클래식한 인테리어로 바꿧어요
          </TitleSmallWhiteTypography>
          <Box sx={{display:"flex", alignItems:"center", mb:4}}>
            <IconHeartWhite style={{marginRight:"8px"}}/>
            <TitleSmallWhiteTypography style={{marginRight:"24px"}}>235</TitleSmallWhiteTypography>
            <IconSpeechBubble style={{marginRight:"8px"}}/>
            <TitleSmallWhiteTypography>235</TitleSmallWhiteTypography>
          </Box>
        </Box>
      </Box>
      <NavigationBar/>
    </>
  );
}

export default Reels;
