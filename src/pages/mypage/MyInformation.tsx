import React, { useState } from "react"
import { Box, Divider, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { IconEdit, HalfArrow } from "../../assets/images"
import { styled } from "@mui/material/styles" 

export const MoreInfomation = styled(Box)(() => ({
  '& > button': {
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderRadius: 0,
    color: '#333',
    fontSize: '.875rem',
  },
  '& > .MuiDivider-root': {
    margin: '6px 0'
  },
  '& > button.gray': {
    color: '#BDBDBD',
  }
}))

const centerTitle = ['내 정보']

const MyInformation = () => {
  return (
    <>
      <CenterTitle title={centerTitle}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{ pt: 4, pb: 5, textAlign: 'center' }}>
          <Box component="p" sx={{ display: 'inline-block', position: 'relative', fontSize: '1.5rem' }}>
            Hongroad
            <IconEdit 
              style={{
                position: 'absolute',
                top: '9px',
                right: '-26px',
              }}
            />
          </Box>
          <Box component="p" sx={{ mt: 1/2, textAlign: 'center', fontSize: '.875rem' }}>
            hongroad@gmail.com
          </Box>
        </Box>

        <MoreInfomation>
          <Divider />
          <Button fullWidth>
            회원정보 수정
            <HalfArrow />
          </Button>
          <Button fullWidth>
            비밀번호 설정
            <HalfArrow />
          </Button>
          <Button fullWidth>
            맞춤 정보 입력
            <HalfArrow />
          </Button>
          <Divider />
          <Button fullWidth>
            간편결제 관리
            <HalfArrow />
          </Button>
          <Button fullWidth>
            환불계좌 관리
            <HalfArrow />
          </Button>
          <Divider />
          <Button fullWidth className="gray">
            로그아웃
            <HalfArrow />
          </Button>
          <Divider />
          <Button fullWidth className="gray">
            회원탈퇴
            <HalfArrow />
          </Button>
        </MoreInfomation>
      </Box>
      <NavigationBar />
    </>
  )
}

export default MyInformation