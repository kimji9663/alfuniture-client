import React, { useState } from "react"
import { Tabs, Tab, Box, IconButton, Divider, Typography, Input } from "@mui/material"
import { ViewTitle, QnaButton, CustomerService } from "./productView.styles"

const PersonalQna = () => {

  return (
    <>
      <Box sx={{ p: 2 }}>
        <QnaButton fullWidth sx={{ mt: 3 }}>상품 문의하기</QnaButton>

        <Divider sx={{ mt: 3 }} />

        <ViewTitle component="p" sx={{ mt: 3 }}>
          문의
          <span>(12)</span>
        </ViewTitle>
        <Box sx={{ mt: 3 }}>
          <Box sx={{ mb: 2.5, border: '1px solid #DADADA' }}>
            <Box sx={{ '& > input': { padding: '13px', width: '100%', border: 'none', boxSizing: 'border-box', fontSize: '.75rem' } }}>
              <input type="text" placeholder="작성자만 확인 할 수 있어요." />
            </Box>
            <Box sx={{ display: 'flex', borderTop: '1px solid #DADADA', '& > div': { flex: '1 1 auto', fontSize: '.75rem', boxSizing: 'border-box' } }}>
              <Box sx={{ padding: '7px 0', borderRight: '1px solid #DADADA', maxWidth: '23%', textAlign: 'center' }}>답변완료</Box>
              <Box sx={{ padding: '7px 16px', borderRight: '1px solid #DADADA', maxWidth: '24%' }}>va**</Box>
              <Box sx={{ padding: '7px 16px' }}>23.01.28</Box>
            </Box>
          </Box>
          <Box sx={{ mb: 2.5, border: '1px solid #DADADA' }}>
            <Box sx={{ '& > input': { padding: '13px', width: '100%', border: 'none', boxSizing: 'border-box', fontSize: '.75rem' } }}>
              <input type="text" placeholder="작성자만 확인 할 수 있어요." />
            </Box>
            <Box sx={{ display: 'flex', borderTop: '1px solid #DADADA', '& > div': { flex: '1 1 auto', fontSize: '.75rem', boxSizing: 'border-box' } }}>
              <Box sx={{ padding: '7px 0', borderRight: '1px solid #DADADA', maxWidth: '23%', textAlign: 'center' }}>답변완료</Box>
              <Box sx={{ padding: '7px 16px', borderRight: '1px solid #DADADA', maxWidth: '24%' }}>va**</Box>
              <Box sx={{ padding: '7px 16px' }}>23.01.28</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ p: 2, mb: 7 }}>
        <ViewTitle>판매자 고객센터</ViewTitle>
        <CustomerService sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex' }}>
            <div className="title">운영시간</div>
            <div className="information">
              <span>평일11:00 ~ 17:00</span>
              <span>점심 13:00 ~ 14:00</span>
              <span>월, 화, 수, 목, 금 공휴일 휴무</span>
            </div>
          </Box>
        </CustomerService>
      </Box>
    </>
  )
}

export default PersonalQna