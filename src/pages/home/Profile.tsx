/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import NavigationBar from "../../components/NavigationBar"
import { jamesLee } from "../../assets/images/brand"
import { IconHeartBig } from "../../assets/images"
import {Paper, IconButton, Typography, Box} from '@mui/material'

const Profile = () => {
  
  return (
    <>
      <img src={jamesLee} style={{width: "100vw"}}/>
      <Box sx={{mt: 3, ml: 2, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: "500", letterSpacing: "-2%" }}>James Lee</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", letterSpacing: "-0.25px", color: "#333333" }}>노르웨이 출신의 작가</Typography>
        </Box>
        <Box sx={{ mr: 2}}>
          <IconHeartBig/>
        </Box>
      </Box>
      <Box></Box>
      
      <NavigationBar/>
    </>
  )
}

export default Profile
