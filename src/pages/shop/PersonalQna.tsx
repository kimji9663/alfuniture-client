import React, { useState } from "react"
import { Box, Divider, ButtonGroup, Button } from "@mui/material"
import { ViewTitle, QnaButton, CustomerService, SellerInfomation, QnaListItem, QnaButtonGroup } from "./productView.styles"

const qnaList = [
  {
    id: 1,
    userId: 'vani@naver.com',
    text: '테이블 문의하려고 합니다~',
    answer: true
  },
  {
    id: 2,
    userId: 'strawberryCake0113@gmail.com',
    text: '조명 사이즈가 어떻게 되나요?? 그리고 멜란지화이트 색상은 품절인가요? 빠른 답변 부탁드려요.',
    answer: false
  },
]

const PersonalQna = () => {
  // 로그인한 유저 ID (임시)
  const currentUserId = 'strawberryCake0113@gmail.com'

  const hideUserId = (id:string) => {
    let maskedId = ''
    let slicedId = id.split('@')[0] // @뒤 이메일 도메인 생략
    if (slicedId.length < 7) {
      // 아이디가 7자리 미만일 경우 자릿수 절반 마스킹
      const regex = slicedId.slice(slicedId.length / 2)
      maskedId = slicedId.replace(regex, '*'.repeat(regex.length))
      console.log(id)
    } else {
      // 아이디가 7자리 이상일 경우 넷째자리부터 마스킹 & *표시는 4개 까지만
      const regex = slicedId.slice(3, slicedId.length)
      maskedId = slicedId.replace(regex, '*'.repeat(4))
      console.log(id)
    }

    return maskedId
  }

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
          {qnaList.map((qna) => (
            <QnaListItem key={qna.id}>
              <div className={`content${currentUserId === qna.userId ? '' : ' locked'}`}>
                {currentUserId === qna.userId ? qna.text : '작성자만 확인 할 수 있어요.'}
              </div>
              {/* 답변 완료되었을 경우 판매자 답변 위치 */}
              <div className="content_info">
                <div className="answer">
                  {qna.answer ? '답변완료' : '답변대기'}
                </div>
                {/* 작성자인 경우 본인 아이디 보여 줄 것인지 */}
                <div className="user_id">{hideUserId(qna.userId)}</div>
                <div className="date">23.01.28</div>
              </div>
            </QnaListItem>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ p: 2, mb: 5 }}>
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
          <Box sx={{ mt: 3 }}>
            <QnaButtonGroup fullWidth variant="outlined">
              <Button>전화하기</Button>
              <Button>이메일 보내기</Button>
            </QnaButtonGroup>
          </Box>
        </CustomerService>

        <ViewTitle sx={{ mt: 4 }}>판매자 정보</ViewTitle>
        <SellerInfomation sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <div className="title">업체명</div>
            <div className="information">BARUA</div>
          </Box>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <div className="title">대표장명</div>
            <div className="information">이은지</div>
          </Box>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <div className="title">사업장 소재지</div>
            <div className="information">인천광역시 연수구 면우금로 188번길</div>
          </Box>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <div className="title">사업자번호</div>
            <div className="information">12898403</div>
          </Box>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <div className="title">통신판매업 신고번호</div>
            <div className="information">사업자 정보 확인</div>
          </Box>
          <Box sx={{ mt: 3 }}>
            <QnaButtonGroup fullWidth variant="outlined">
              <Button>이용약관</Button>
              <Button>개인정보취급방침</Button>
            </QnaButtonGroup>
          </Box>
        </SellerInfomation>
      </Box>
    </>
  )
}

export default PersonalQna