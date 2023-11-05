import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, TextareaAutosize, Button, ButtonGroup } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../styles/buttons.styles"
import { BasicModal } from "../../styles/modal.styles"
import { ViewTitle } from "./ProductView/index.styles"
import { ProductInfomation, QnaImageField, QnaTextField, VisuallyHiddenInput, UploadNotice } from "./writeQna.styles"
import { sofa01 } from "../../assets/images/product"
import { IconPlus, IconX } from "../../assets/images"
import CenterTitle from "../../components/title/CenterTitle"

const WriteQna = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("")
  const [userPhoto, setUserPhoto] = useState<string[]>([])
  let photoUrl: string | undefined

  useEffect(() => {
    // 언마운트 시 url 무효화
    return () => {
      if (photoUrl !== undefined) {
        URL.revokeObjectURL(photoUrl)
      }
    }
  }, [photoUrl])

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

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files){
      return
    }

    const blob = new Blob([e.target.files[0]], {type: "image/png"})
    photoUrl = URL.createObjectURL(blob)
    setUserPhoto([...userPhoto, photoUrl])
  }

  const handleRemovePhoto = (url: string) => () => {
    let removePhoto = userPhoto.filter((el) => el !== url)
    setUserPhoto(removePhoto)
  }

  return (
    <>
      <CenterTitle title={["문의하기"]} />
      <Box sx={{ height: "calc(100vh - 131px)", overflow: "auto" }}>
        <Box sx={{ p: 2 }}>
          <ViewTitle>문의상품</ViewTitle>
          <ProductInfomation sx={{ mt: 2 }}>
            <div className="image">
              <img src={sofa01} alt="" />
            </div>
            <div className="text">
              <p className="brand">ALFDN</p>
              <p className="product">카멜프든</p>
            </div>
          </ProductInfomation>
          
          <ViewTitle sx={{ mt: 5 }}>문의 내용</ViewTitle>
          <QnaTextField>
            <input 
              type="text" 
              placeholder="제목을 입력하세요."
            />
            <TextareaAutosize 
              minRows={2}
              placeholder="내용을 입력하세요."
            />
          </QnaTextField>

          <ViewTitle sx={{ mt: 3 }}>이미지 첨부</ViewTitle>
          <QnaImageField sx={{ mt: 2 }}>
            {userPhoto.map((photo, index) => (
              <Box
                key={index}
                className="image_box_wrap"
                sx={{ mr: 2 }}
              >
                <div>
                  <img src={photo} alt="" />
                </div>
                <IconX onClick={handleRemovePhoto(photo)} />
              </Box>
            ))}
            {userPhoto.length < 2 && (
              <Button 
                component="label"
              >
                <IconPlus />
                <VisuallyHiddenInput 
                  type="file" 
                  multiple
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={handleUploadPhoto} 
                />
              </Button>
            )}
          </QnaImageField>

          <UploadNotice sx={{ mt: 4 }}>
            <p>상품 불량 및 오배송의 경우, 해당 제품 사진을 등록 부탁드립니다.</p>
            <p>파일당 최대 <span>10MB</span>의 용량 제한이 있습니다.</p>
            <p>첨부파일은 최대 2개까지 등록 가능합니다.</p>
          </UploadNotice>
        </Box>
      </Box>

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={handleModalOpen("cancel")}>취소하기</SecondaryButton>
        <PrimaryButton onClick={handleModalOpen("upload")}>작성완료</PrimaryButton>
      </NaviWrap>

      <BasicModal open={modalOpen} onClose={handleClose}>
        <Box>
          {modalType === "cancel" && (
            <>
              <div className="content">작성을 취소하시겠습니까?</div>
              <ButtonGroup fullWidth>
                <SecondaryButton onClick={handleClose}>취소</SecondaryButton>
                <PrimaryButton onClick={() => navigate(-1)}>확인</PrimaryButton>
              </ButtonGroup>
            </>
          )}
          {modalType === "upload" && (
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