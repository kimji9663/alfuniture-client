import React, { useState } from "react"
import { Box, FormControl, Input, FormHelperText, FormControlLabel, Checkbox, CheckboxProps, Divider, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { PrimaryLightButton, PrimaryButton } from "../../styles/buttons.styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import NoTitle from "../../components/title/NoTitle"
import { VerificationRequestWrap } from "../auth/SignUp/index.styles"
import { Check } from "@mui/icons-material"


export const OrderTitle = styled(Box)(() => ({
  color: '#333',
  fontSize: '1rem',
  fontWeight: 'bold',
})) 

export const AccordionMenu = styled(Button)(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 0,
  paddingRight: '24px',
  width: '100%',
  borderRadius: 0,
  '& > span': {
    color: '#999',
    fontSize: '.875rem',
  },
  '& > span.total_amount': {
    color: '#333',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  '&::before': {
    content: '"⌵"',
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}))

export const AgreeCheckbox = styled(FormControlLabel)(() => ({
  '& > span': {
    color: '#333',
  },
  '& .sub': {
    color: '#999',
  }
}))

const agreeItems = [
  {
    id: 'check_agree_age',
    require: true,
    label: '개인정보 수집/이용 동의'
  },
  {
    id: 'check_terms_of_use',
    require: true,
    label: '개인정보 수집/이용 동의'
  },
  {
    id: 'check_privacy',
    require: true,
    label: '결제대행 서비스 이용약관 (주)KG이니시스'
  },
]

function CheckboxIcon(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<Check sx={{ color: '#000' }} />}
      icon={<Check sx={{ color: '#BDBDBD' }} />}
      inputProps={{ 'id': props.id }}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

const Order = () => {
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
  const [addressError, setAddressError] = useState({
    errorActive: false,
    errorText: ''
  })
  const [phoneError, setPhoneError] = useState({
    errorActive: false,
    errorText: ''
  })
  const required = agreeItems.filter((el) => el.require === true).map(el => el.id)
  const [checkedAgreeList, setCheckedAgreeList] = useState<string[]>([])
  const [checkedAgreeAll, setCheckedAgreeAll] = useState(false)


  const validateError = () => {
    if (recipientError.errorText === '') {
      return false
    } else if (recipientError.errorText !== '' && recipientError.errorActive) {
      return true
    }
  }
  
  const handleIdField = (event:React.ChangeEvent<HTMLInputElement>)=> {
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
  
  const handleRequestField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    // 결제하기 클릭 시 배송지 입력 안되어있는지 체크
    // 입력 안되었을 시 애러 표시

    if (event.target.value) {
      setAddressError({
        errorActive: false,
        errorText: ''
      })
    } else {
      setAddressError({
        errorActive: true,
        errorText: '배송지를 입력해주세요.'
      })
    }
  }
  
  const handleSearchPostcode = () => {
    // 우편번호 검색 클릭 시 다음 우편번호 API 연동
    setOrderData({ ...orderData, zipcode: '', deliveryAddress: '' })
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
        errorText: '연락처를 입력해주세요.'
      })
    }
  }

  const handleCheckAgreeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked){
      setCheckedAgreeList([...checkedAgreeList, ...agreeItems.map(el => el.id)])
      if (event.currentTarget.id === 'check_agree_all'){
        setCheckedAgreeAll(true)
      }
    } else {
      setCheckedAgreeList([])
      setCheckedAgreeAll(false)
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

  const handleCheckEach = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
    const isCurruntTargetRequire = required.includes(event.currentTarget.id)
    const checkListLength = checkedAgreeList.filter(el => required.includes(el)).length
    if (event.currentTarget.checked){
      setCheckedAgreeList([...checkedAgreeList, id])
      console.log(checkListLength, required.length)
      if (checkedAgreeList.length === agreeItems.length - 1){
        setCheckedAgreeAll(true)
      }
      if ((isCurruntTargetRequire && required.length - 1 === checkListLength)){
        setOrderData({ ...orderData, termsAgree: true })
      }
    } else {
      setCheckedAgreeList(checkedAgreeList.filter((el) => el !== id))
      setCheckedAgreeAll(false)
      if (isCurruntTargetRequire) {
        setOrderData({ ...orderData, termsAgree: true })
      }
    }
  }
  
  const children = (
    <Box sx={{ py: 2, background: '#FAFAFA' }}>
      {agreeItems.map((el, index) => (
        <AgreeCheckbox
          sx={index === 0 ? { mt: 2 } : null}
          key={el.id}
          control={
            <CheckboxIcon 
              id={el.id} 
              onChange={e => handleCheckEach(e, el.id)}
              checked={checkedAgreeList.includes(el.id)}
            />
          } 
          labelPlacement="end" 
          label={<><span className="sub">{el.require ? '[필수]' : '[선택]'}</span> {el.label}</>}
        />
      ))}
    </Box>
  )

  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <NoTitle />
        <Box sx={{ p: 2 }}>
          <OrderTitle>배송지정보</OrderTitle>

          <Box>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handleIdField}
              error={validateError()}
            >
              <Box 
                  sx={{ position: 'absolute', top: '12px', fontSize: '.875rem', fontWeight: 'bold' }}
              >
                수령인
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
                value={orderData.recipient}
              />
              <FormHelperText>{recipientError.errorText}</FormHelperText>
            </FormControl>
            
            <VerificationRequestWrap
              variant="standard"
              margin="normal"
            >
              <Box>
                <Box 
                  sx={{ position: 'absolute', top: '12px', fontSize: '.875rem', fontWeight: 'bold' }}
                >
                  배송지
                </Box>
                <Input
                  name="user_id"
                  type="text"
                  sx={{ pl: 7, '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
                  value={orderData.zipcode}
                  readOnly
                />
                <FormHelperText
                  sx={{
                  '&.error': { color: '#d32f2f' } 
                  }}
                  className="error"
                >
                  {addressError.errorText}
                </FormHelperText>
              </Box>
              <PrimaryButton 
                sx={{ maxWidth: '111px' }}
                onClick={handleSearchPostcode}
              >
                우편번호 검색
              </PrimaryButton>
            </VerificationRequestWrap>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handleRequestField}
            >
              <Input
                name="user_id"
                type="text"
                sx={{ pl: 7, '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
                value={orderData.deliveryAddress}
                readOnly
              />
            </FormControl>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handleRequestField}
            >
              <Input
                name="user_id"
                placeholder="상세주소를 입력해 주세요"
                type="text"
                sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
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
                  sx={{ position: 'absolute', top: '12px', fontSize: '.875rem', fontWeight: 'bold' }}
              >
                연락처
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
                value={orderData.phoneNumber}
              />
              <FormHelperText>{phoneError.errorText}</FormHelperText>
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
        </Box>

        <Box sx={{ p: 2 }}>
          <AccordionMenu fullWidth>
            <OrderTitle>사용가능 쿠폰조회</OrderTitle>
            <span>쿠폰 선택</span>
          </AccordionMenu>
          <Divider />
        </Box>

        <Box sx={{ p: 2 }}>
          <AccordionMenu fullWidth>
            <OrderTitle>배송방법 선택</OrderTitle>
            <span>일반배송</span>            
          </AccordionMenu>
          <Divider />
        </Box>

        <Box sx={{ p: 2 }}>
          <AccordionMenu fullWidth>
            <OrderTitle>결제방법</OrderTitle>
            <span>신용카드</span>            
          </AccordionMenu>
          <Divider />
        </Box>

        <Box sx={{ p: 2 }}>
          <AccordionMenu fullWidth>
            <OrderTitle>결제금액</OrderTitle>
            <span className="total_amount">1,435,050원</span>            
          </AccordionMenu>
          <Divider />
        </Box>

        <Box sx={{ p: 2 }}>
          <FormControl 
            fullWidth 
            component="fieldset"
            sx={{
              '& label': {
                margin: 0,
              },
              '& > label span': {
                fontSize: '.75rem'
              },
              '& > label > span': {
                fontSize: '.875rem'
              }
            }}
          >
            <AgreeCheckbox 
              sx={{ mb: 2 }}
              control={
                <CheckboxIcon 
                  id="check_agree_all"
                  onChange={handleCheckAgreeAll}
                  checked={checkedAgreeAll}
                />
              }
              labelPlacement="end" 
              label="주문 내용 모두 동의"
            />
            <Divider sx={{ borderColor: '#333' }} />
            {children}
          </FormControl>
        </Box>
      </Box>

      <NaviWrap className="single">
        <PrimaryLightButton>1,435,050원 결제하기</PrimaryLightButton>
      </NaviWrap>
    </>
  )
}
export default Order