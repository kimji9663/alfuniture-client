import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, TextareaAutosize, Button, ButtonGroup } from "@mui/material"
import { styled } from "@mui/material/styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../styles/buttons.styles"
import { BasicModal } from "../../styles/modal.styles"
import { ViewTitle } from "./ProductView/index.styles"
import { sofa01 } from "../../assets/images/product"
import { IconPlus } from "../../assets/images"
import CenterTitle from "../../components/title/CenterTitle"

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const WriteQna = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const handleClose = () => {
    setModalOpen(false)
  }

  const handleUpload = () => {
    // 문의내용 저장
    // 저장 후 뒤로 이동
    navigate(-1)
  }

  const handleModalOpen = (val: string) => () => {
    setModalType(val)
    setModalOpen(true)
  }

  return (
    <>
      <CenterTitle title={['문의하기']} />

      <Box sx={{ height: 'calc(100% - 57px)', overflow: 'auto' }}>
        <Box sx={{ p: 2 }}>
          <ViewTitle>문의상품</ViewTitle>
          <Box sx={{ mt: 2, p: 2, display: 'flex', alignItems: 'center', background: '#FAFAFA' }}>
            <Box sx={{ mr: 1, flex: '0 0 56px', display: 'flex', alignItems: 'center', height: '56px', overflow: 'hidden', '& > img': { display: 'block', width: '100%' } }}>
              <img src={sofa01} alt="" />
            </Box>
            <Box sx={{ '& > p': { color: '#333', fontWeight: 500 }, '.brand': { fontSize: '.75rem' }, '.product': { fontSize: '.875rem' } }}>
              <p className="brand">ALFDN</p>
              <p className="product">카멜프든</p>
            </Box>
          </Box>
          
          <ViewTitle sx={{ mt: 5 }}>문의 내용</ViewTitle>
          <Box>
            <input 
              type="text" 
              placeholder="제목을 입력하세요."
              style={{
                marginTop: '16px',
                width: '100%',
                border: '1px solid #BDBDBD',
                background: '#FAFAFA',
                fontSize: '.75rem',
                padding: '14px',
                boxSizing: 'border-box',
              }}
            />
            <TextareaAutosize 
              minRows={2}
              placeholder="내용을 입력하세요."
              style={{
                marginTop: '16px',
                width: '100%',
                border: '1px solid #BDBDBD',
                fontSize: '.75rem',
                padding: '14px',
                boxSizing: 'border-box',
              }}
            />
          </Box>

          <ViewTitle sx={{ mt: 3 }}>이미지 첨부</ViewTitle>
          <Box sx={{ mt: 2 }}>
            <Button 
              component="label"
              sx={{
                width: '80px',
                height: '80px',
                borderRadius: 0,
                backgroundColor: '#242223',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#242223',
                }
              }}
            >
              <IconPlus />
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>

          <Box sx={{ mt: 4, fontSize: '.75rem', color: '#BDBDBD', '& > span': { color: '#FF5454' } }}>
            상품 불량 및 오배송의 경우, 해당 제품 사진을 등록 부탁드립니다.
            파일당 최대 <span>10MB</span>의 용량 제한이 있습니다.
            첨부파일은 최대 2개까지 등록 가능합니다.
          </Box>
        </Box>
      </Box>

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={handleModalOpen('cancel')}>취소하기</SecondaryButton>
        <PrimaryButton onClick={handleModalOpen('upload')}>작성완료</PrimaryButton>
      </NaviWrap>

      <BasicModal open={modalOpen} onClose={handleClose}>
        <Box>
          {modalType === 'cancel' && (
            <>
              <div className="content">작성을 취소하시겠습니까?</div>
              <ButtonGroup fullWidth>
                <SecondaryButton onClick={handleClose}>취소</SecondaryButton>
                <PrimaryButton onClick={() => navigate(-1)}>확인</PrimaryButton>
              </ButtonGroup>
            </>
          )}
          {modalType === 'upload' && (
            <>
              <div className="content">문의를 등록하시겠습니까?</div>
              <ButtonGroup fullWidth>
                <SecondaryButton onClick={handleClose}>취소</SecondaryButton>
                <PrimaryButton onClick={handleUpload}>확인</PrimaryButton>
              </ButtonGroup>
            </>
          )}
        </Box>
      </BasicModal>
    </>
  )
}

export default WriteQna