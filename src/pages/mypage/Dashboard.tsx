import React, { useState } from "react"
import { Box, Tabs, Tab, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import LeftTitle from "../../components/title/LeftTitle"
import { HalfArrow, img_Aclass } from "../../assets/images"

const title = ['My page'];

const Dashboard = () => {
  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        {/* 타이틀 */}
        <LeftTitle title={title}/>
        <Box sx={{ 
        }}>
          <Button fullWidth
            sx={{
              justifyContent: 'space-between',
              padding: '16px',
              borderBottom: 1, 
              borderColor: 'divider',
              borderRadius: 0,
              color: '#666',
              fontSize: '1rem',
              '& > .MuiButton-endIcon': {
                marginRight: 0
              } 
            }}
            endIcon={<HalfArrow />}
          >
            홍길동님 안녕하세요!
          </Button>

          <Box sx={{ padding: '32px 16px', borderBottom: '1px solid #D9D9D9'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > div': { width: '50%' } }}>
              <Box>
                <img src={img_Aclass} alt="" />
              </Box>
              <Box sx={{ '& > p': { fontSize: '0.75rem' }}}>
                <p className="">A 등급</p>
                <p className="">멤버쉽 쿠폰 받기</p>
              </Box>
            </Box>
            <Box>
              <Button>주문/배송</Button>
              <Button>리뷰</Button>
              <Button>쿠폰</Button>
              <Button>포인트</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Dashboard