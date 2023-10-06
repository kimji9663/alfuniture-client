import React, { useState } from "react"
import { Box, Tabs, Tab, Button, Divider, List, ListItemButton } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import LeftTitle from "../../components/title/LeftTitle"
import { HalfArrow, IconMyCoupon, IconMyOrder, IconMyPoint, IconMyReview, img_Aclass } from "../../assets/images"

const title = ['My page'];

const Dashboard = () => {
  return (
    <>
      <LeftTitle title={title}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
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
              <Box 
                sx={{ 
                  '& > button': { 
                    flexDirection: 'column',
                    alignItems: 'start',
                    color: '#999', 
                    fontSize: '0.75rem' 
                  }, 
                  '& > button > span': { color: '#242223' },
                }}
              >
                <Button fullWidth sx={{ borderRadius: 0 }}>
                  <span>A 등급</span>
                  멤버쉽 쿠폰 받기
                </Button>
              </Box>
            </Box>
            <Box 
              sx={{
                mt: 5,
                display: 'flex',
                borderTop: '1px solid #dadada',
                '& > button': {
                  flexDirection: "column",
                  padding: '16px 8px 0',
                  width: '25%',
                  borderRadius: 0,
                },
                '& > button > div': {
                  display: 'flex',
                  alignItems: 'center',
                  height: '27px',
                },
                '& > button > p': {
                  marginTop: '11px',
                  color: '#666',
                  fontSize: '.75rem',
                }
              }}
            >
              <Button>
                <div><IconMyOrder /></div>
                <p>주문/배송</p>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button>
                <div><IconMyReview /></div>
                <p>리뷰</p>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button>
                <div><IconMyCoupon /></div>
                <p>쿠폰</p>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button>
                <div><IconMyPoint /></div>
                <p>포인트</p>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 2.5,
              '& .MuiBox-root': {
                px: 2,
                py: 2.5,
                color: '#333',
                fontSize: '.875rem',
                fontWeight: 'bold',
              },
              '& .MuiButtonBase-root': {
                py: 2.5,
                color: '#999',
                fontSize: '.875rem',
              }
            }}
          >
            <List
              component="nav"
              subheader={<Box>쇼핑</Box>}
            >
              <ListItemButton>최근 본 상품</ListItemButton>
            </List>
            <List
              component="nav"
              subheader={<Box>고객센터</Box>}
            >
              <ListItemButton>FAQ</ListItemButton>
            </List>
            <List
              component="nav"
              subheader={<Box>리워드</Box>}
            >
              <ListItemButton>최대 3000포인트 모으기</ListItemButton>
              <ListItemButton>공유 리워드</ListItemButton>
            </List>
            <List
              component="nav"
              subheader={<Box>서비스 설정</Box>}
            >
              <ListItemButton>실험실</ListItemButton>
              <ListItemButton>설정</ListItemButton>
            </List>
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Dashboard