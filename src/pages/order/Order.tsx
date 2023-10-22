import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, FormControl, Input, FormHelperText, ButtonGroup, Typography, Button } from "@mui/material"
import { SecondaryButton, PrimaryButton } from "../../styles/buttons.styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import NoTitle from "../../components/title/NoTitle"
import {OrderTitle, SearchZipcodeWrap, AgreeCheckbox } from "./order.styles"
import DaumPostcodeEmbed from 'react-daum-postcode'
import { BasicModal } from "../../styles/modal.styles"
import OrderInfomation from "./OrderInfomation"
import { sofa01 } from "../../assets/images/product"
import OrderTermsAgreement from "./OrderTermsAgreement"
import CheckboxIcon from "../../components/CheckBoxIcon"
import CouponSelector from "./CouponSelector"


const Order = () => {
  const navigate = useNavigate()
  // 입력한 모든 주소 저장
  const [orderData, setOrderData] = useState({
    recipient: '',
    zipcode: '',
    deliveryAddress: '',
    phoneNumber: '',
    addressSave: false,
    termsAgree: false,
  })
  const [recipientError, setRecipientError] = useState({
    errorActive: false,
    errorText: ''
  })
  const [phoneError, setPhoneError] = useState({
    errorActive: false,
    errorText: ''
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [couponOpen, setCouponOpen] = useState(false)
  const [finalAmount, setFinalAmount] = useState(0)

  const handleClose = () => {
    setModalOpen(false)
  }

  const handleCompleteOrder = () => {
    navigate('/')
  }

  const applyCoupon = () => {
    // 총 가격 - 할인율
    // return 
  }

  const handleActiveOrder = 
    orderData.recipient !== '' && 
    orderData.zipcode !== '' &&
    orderData.deliveryAddress !== '' &&
    orderData.phoneNumber !== '' &&
    orderData.termsAgree === true
  ? (
    false
  ) : (
    true
  )

  const validateError = () => {
    if (recipientError.errorText === '') {
      return false
    } else if (recipientError.errorText !== '' && recipientError.errorActive) {
      return true
    }
  }
  
  const handleNameField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    setOrderData({ ...orderData, recipient: event.target.value })

    if (event.target.value) {
      setRecipientError({
        errorActive: false, 
        errorText: ''
      })
    } else {
      setRecipientError({
        errorActive: true, 
        errorText: '수령인을 입력해주세요.'
      })
    }
  }
  
  const handleSearchPostcode = () => {
    // 우편번호 검색 클릭 시 다음 우편번호 API 연동
    setOrderData({ ...orderData, zipcode: '', deliveryAddress: '' })
    setModalOpen(true)
  }
  
  const handlePhoneField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const phoneNumberPattern = /^(010)[0-9]{3,4}[0-9]{4}$/
    const onlyNumber = event.target.value.replace(/[^-0-9]/g, '')
    setOrderData({ ...orderData, phoneNumber: onlyNumber })

    // 입력 시 핸드폰 번호 양식 체크
    // 양식에 맞지 않으면 애러 표시

    // 결제하기 클릭 시 연락처 입력 안되어있는지 체크
    // 입력 안되었을 시 애러 표시

    if (phoneNumberPattern.test(onlyNumber)) {
      setPhoneError({
        errorActive: false,
        errorText: ''
      })
    } else {      
      if (event.target.value !== '') {
        setPhoneError({
          errorActive: false,
          errorText: ''
        })
      }
      setPhoneError({
        errorActive: true,
        errorText: '휴대전화 형식이 올바르지 않습니다.'
      })
    }
  }
  
  const handleAddressSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked){
      setOrderData({ ...orderData, addressSave: true })
      if (event.currentTarget.id === 'check_agree_all'){
        setOrderData({ ...orderData, addressSave: true })
      }
    } else {
      setOrderData({ ...orderData, addressSave: false })
    }
  }

  const onCompletePost = (data:any) => {
    setModalOpen(false)
    console.log(data)
    setOrderData({
      ...orderData, 
      zipcode: data.zonecode,
      deliveryAddress: data.address
    })
  }

  const changeOrderData = (val:boolean) => {
    setOrderData({...orderData, termsAgree: val})
    //console.log(val)
  }

  const toggleDrawer = (val:boolean) => {
    setCouponOpen(val)
  }

  return (
    <>
      <NoTitle />
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{ p: 2 }}>
          <OrderTitle>배송지정보</OrderTitle>

          <Box>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handleNameField}
              error={validateError()}
            >
              <Box 
                  sx={{ position: 'absolute', top: '13px', fontSize: '.875rem', fontWeight: 'bold' }}
              >
                수령인
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, '& > input': { height: '2.5rem', fontSize: '.875rem' } }}
                value={orderData.recipient}
              />
              <FormHelperText>{recipientError.errorText}</FormHelperText>
            </FormControl>
            
            <SearchZipcodeWrap
              variant="standard"
              margin="normal"
              sx={{height: 'auto'}}
            >
              <Box>
                <Box 
                  sx={{ position: 'absolute', top: '13px', fontSize: '.875rem', fontWeight: 'bold' }}
                >
                  배송지
                </Box>
                <Input
                  name="user_id"
                  type="text"
                  sx={{ pl: 7, '& > input': { height: '2.5rem', fontSize: '.875rem' } }}
                  value={orderData.zipcode}
                  readOnly
                />
              </Box>
              <PrimaryButton 
                sx={{ maxWidth: '111px' }}
                onClick={handleSearchPostcode}
              >
                우편번호 검색
              </PrimaryButton>
            </SearchZipcodeWrap>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
            >
              <Input
                name="user_id"
                type="text"
                sx={{ '& > input': { height: '2.5rem', fontSize: '.875rem' } }}
                value={orderData.deliveryAddress}
                readOnly
              />
            </FormControl>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
            >
              <Input
                name="user_id"
                placeholder="상세주소를 입력해 주세요"
                type="text"
                sx={{ '& > input': { height: '2.5rem', fontSize: '.875rem' } }}
              />
            </FormControl>
            
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handlePhoneField}
              error={validateError()}
            >
              <Box 
                sx={{ position: 'absolute', top: '13px', fontSize: '.875rem', fontWeight: 'bold' }}
              >
                연락처
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, '& > input': { height: '2.5rem', fontSize: '.875rem' } }}
                value={orderData.phoneNumber}
              />
              <FormHelperText
                sx={{
                '&.error': { color: '#d32f2f' } 
                }}
                className="error"
              >
                {phoneError.errorText}
              </FormHelperText>
            </FormControl>

            <AgreeCheckbox 
              sx={{ mb: 2 }}
              control={
                <CheckboxIcon 
                  id="check_agree_all"
                  onChange={handleAddressSave}
                  checked={orderData.addressSave}
                />
              } 
              labelPlacement="end" 
              label="기본 배송지로 등록"
            />
          </Box>
        </Box>

        <Box sx={{ p: 2, background: '#FAFAFA' }}>
          <OrderTitle>상품 정보</OrderTitle>
          <Box sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center'
          }}>
            <Box sx={{ mr: 2, position: 'relative', width: '35%', paddingTop: '35%' }}>
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  background: '#000',
                  '& > img': { minWidth: '100%', minHeight: '100%' },
                }}
              >
                <img src={sofa01} alt="소파" />
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 auto' }}>
              <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                ALFDN - 카멜프든
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  '& > p': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#999',
                    fontSize: '.75rem',
                  },
                  '& .title, & .total': {
                    fontWeight: 'bold',
                    color: '#333',
                  },
                  '& .MuiButton-root': {
                    fontSize: '.75rem',
                    width: '62px',
                    padding: 0,
                    borderRadius: 0,
                  }
                }}
              >
                <p>
                  <span className="title">색상</span><span>브라운</span>
                </p>
                <p>
                  <span className="title">재질</span><span>인조가죽</span>
                </p>
                <p>
                  <span className="title">수량</span><span>1개</span>
                </p>
                <p>
                  <span className="title">상품 금액</span>
                  <span className="total">1,594,500원</span>
                </p>
                <p>
                  <span className="title">쿠폰적용</span>
                  <PrimaryButton onClick={() => setCouponOpen(true)}>쿠폰 선택</PrimaryButton>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <OrderInfomation />

        <OrderTermsAgreement 
          termsAgree={orderData.termsAgree}
          changeOrderData={changeOrderData}
        />
      </Box>

      <CouponSelector
        drawerOpen={couponOpen} 
        toggleDrawer={toggleDrawer} 
        complete={finalAmount}
        setComplete={setFinalAmount}
      />

      <NaviWrap className="single">
        <PrimaryButton 
          disabled={handleActiveOrder}
          onClick={handleCompleteOrder}
        >
          1,435,050원 결제하기
        </PrimaryButton>
      </NaviWrap>

      <BasicModal
        open={modalOpen}
      >
        <Box>
          <DaumPostcodeEmbed
            onComplete={onCompletePost}
          />
          <ButtonGroup fullWidth>
            <SecondaryButton onClick={handleClose}>닫기</SecondaryButton>
          </ButtonGroup>
        </Box>
      </BasicModal>
    </>
  )
}
export default Order