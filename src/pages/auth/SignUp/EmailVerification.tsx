import React, { useState } from "react"
import { Box, Typography, FormHelperText, Input } from "@mui/material"
import { OutlineButton, PrimaryButton } from "../../../styles/buttons.styles"
import { CountBox, VerificationRequestWrap } from "./index.styles"
import { useCountdown } from "../../../components/useCountdown"

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
  getUserId: string
}

const EmailVerification = ({validated, changeValidated, getUserId}:IvalidatedProps) => {
  const [complete, setComplete] = useState({
    completeActive: false,
    completeText: ''
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [verificationDisabled, setVerificationDisabled] = useState(true)
  const [countStrat, setCountStart] = useState(false)
  const getNow = new Date().getTime()
  const timer = getNow + 1.5 * 30 * 1000 //1분 30초

  const requestVerificationCode = () => {
    console.log(getUserId)
    if (verificationCode !== '') {
      setVerificationCode('')
    }
    setComplete({
      completeActive: true,
      completeText: '인증번호가 발송되었습니다.'
    })
    setCountStart(true)
    // 인증번호 입력필드 안보였다가 버튼 클릭 시 보이는지 ?
    // 1:30 카운트다운 시작
    // 만약 카운트가 0이면 completeText: '인증시간 초과'
    // input 입력 안되게 할 지 
    // 아니면 alert 띄우고 인증번호 입력창 숨길 지
  }

  const handleCodeField = (event:React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.currentTarget.value)
    //console.log(verificationCode)

    if (event.target.value !== '') {
      setVerificationDisabled(false)
      setComplete({
        completeActive: false,
        completeText: ''
      })
    } else {
      setVerificationDisabled(true)
    }
  }

  const checkVerificationCode = () => {
    const codeNumber = '1234'
    // 인증번호 검증은 어떻게 ?

    if (verificationCode === codeNumber) {
      // 인증이 완료되면
      validated[3] = true
      setComplete({
        completeActive: true,
        completeText: '인증완료'
      })
    } else {
      // 인증실패 시
      setComplete({
        completeActive: true,
        completeText: '인증실패'
      })
      validated[3] = false
    }

    changeValidated([...validated])
  }
  
  const CountDownTimer = (targetDate:number) => {
    const [minutes, seconds] = useCountdown(targetDate)

    if (minutes + seconds <= 0) {
      return <div>인증시간 초과</div>
    } else {
      return (
        <CountBox
          sx={{ display: countStrat ? 'block' : 'none' }}
        >
          4:30
        </CountBox>
      )
    }
  }

  return (
    <Box>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>이메일을</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>입력해주세요</Typography>
      </Box>

      <Box sx={{ mt: 13 }}>
        <VerificationRequestWrap
          variant="standard"
          margin="normal"
        >
          <PrimaryButton 
            fullWidth
            onClick={requestVerificationCode}
          >
            인증코드 요청
          </PrimaryButton>
        </VerificationRequestWrap>
        
        <VerificationRequestWrap
          variant="standard"
          margin="normal"
          sx={{ mt: 7 }}
        >
          <Box sx={{ position: 'relative' }}>
            <Input
              name="verification_code"
              placeholder="인증번호를 입력해주세요."
              type="text"
              onChange={handleCodeField}
              value={verificationCode}
              disabled={!countStrat}
            />
            <FormHelperText
              sx={{
              '&.error': { color: '#d32f2f' } 
              }}
              className={
                complete.completeText === '인증실패' ? 'error' : ''
              }
            >
              {complete.completeText}
            </FormHelperText>
            {/* <CountDownTimer targetDate={timer} /> */}
          </Box>
          <OutlineButton 
            disabled={verificationDisabled}
            sx={{ maxWidth: '72px' }}
            onClick={e => checkVerificationCode()}
          >
            인증
          </OutlineButton>
        </VerificationRequestWrap>
      </Box>
    </Box>
  )
}
export default EmailVerification