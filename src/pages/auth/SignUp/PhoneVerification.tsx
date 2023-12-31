import React, { useEffect, useState } from "react"
import { Box, Typography, FormHelperText, Input } from "@mui/material"
import { OutlineButton, PrimaryButton } from "../../../styles/buttons.styles"
import { VerificationRequestWrap } from "./index.styles"
import CountDown from "../../../components/CountDown"

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
}

const PhoneVerification = ({validated, changeValidated}:IvalidatedProps) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [requestDisabled, setReqeustDisabled] = useState(true)
  const [number, setNumber] = useState({
    errorActive: false,
    errorText: ""
  })
  const [complete, setComplete] = useState({
    completeActive: false,
    completeText: ""
  })
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationDisabled, setVerificationDisabled] = useState(true)
  const [countStrat, setCountStart] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
        setTime((prev) => prev - 1)
    }, 1000)
    if(time === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer)
  }, [time])
  
  useEffect(() => {
    if (countStrat && time === 0){
      setComplete({
        completeActive: true,
        completeText: "인증시간 초과"
      })
    }
  }, [countStrat, time])

  const handleRequestField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const phoneNumberPattern = /^(010)[0-9]{3,4}[0-9]{4}$/
    const onlyNumber = event.target.value.replace(/[^-0-9]/g, "")
    setPhoneNumber(onlyNumber)

    if (phoneNumberPattern.test(onlyNumber)) {
      setReqeustDisabled(false)
      setNumber({
        errorActive: false,
        errorText: ""
      })
    } else {
      setReqeustDisabled(true)
      
      if (event.target.value !== "") {
        setNumber({
          errorActive: false,
          errorText: ""
        })
      }
      setNumber({
        errorActive: true,
        errorText: "휴대전화 형식이 올바르지 않습니다."
      })
    }
  }

  const requestVerificationCode = () => {
    if (verificationCode !== "") {
      setVerificationCode("")
    }
    setComplete({
      completeActive: true,
      completeText: "인증번호가 발송되었습니다."
    })
    setCountStart(true)
    setTime(90)
    // 인증번호 입력필드 안보였다가 버튼 클릭 시 보이는지 ?
    // 1:30 카운트다운 시작
    // 만약 카운트가 0이면 completeText: "인증시간 초과"
    // input 입력 안되게 할 지 
    // 아니면 alert 띄우고 인증번호 입력창 숨길 지
  }

  const handleCodeField = (event:React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.currentTarget.value)
    //console.log(verificationCode)

    if (event.target.value !== "") {
      setVerificationDisabled(false)
      setComplete({
        completeActive: false,
        completeText: ""
      })
    } else {
      setVerificationDisabled(true)
    }
  }

  const checkVerificationCode = () => {
    const codeNumber = "1234"
    // 인증번호 검증은 어떻게 ?

    if (verificationCode === codeNumber) {
      // 인증이 완료되면
      validated[3] = true
      setCountStart(false)
      setTime(0)
      setComplete({
        completeActive: true,
        completeText: "인증완료"
      })
    } else {
      // 인증실패 시
      setComplete({
        completeActive: true,
        completeText: "인증실패"
      })
      validated[3] = false
    }

    changeValidated([...validated])
  }

  return (
    <Box>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>휴대전화를</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>입력해주세요</Typography>
      </Box>

      <Box sx={{ mt: 13 }}>
        <VerificationRequestWrap
          variant="standard"
          margin="normal"
        >
          <Box>
            <Input
              name="user_id"
              placeholder="휴대전화를 입력해주세요."
              type="text"
              onChange={handleRequestField}
              value={phoneNumber}
            />
            <FormHelperText
              sx={{
              "&.error": { color: "#d32f2f" } 
              }}
              className="error"
            >
              {number.errorText}
            </FormHelperText>
          </Box>
          <PrimaryButton 
            disabled={requestDisabled} 
            sx={{ maxWidth: "100px" }}
            onClick={requestVerificationCode}
          >
            인증번호요청
          </PrimaryButton>
        </VerificationRequestWrap>
        
        <VerificationRequestWrap
          variant="standard"
          margin="normal"
          sx={{ mt: 7 }}
        >
          <Box sx={{ position: "relative" }}>
            <Input
              name="verification_code"
              placeholder="인증번호를 입력해주세요."
              type="text"
              onChange={handleCodeField}
              value={verificationCode}
              disabled={!countStrat || complete.completeText === "인증시간 초과"}
            />
            <FormHelperText
              sx={{
              "&.error": { color: "#d32f2f" } 
              }}
              className={
                complete.completeText === "인증실패" ? "error" : 
                (complete.completeText === "인증시간 초과" ? "error" : "")
              }
            >
              {complete.completeText}
            </FormHelperText>

            <Box sx={{ display: countStrat ? "block" : "none" }}>
              <CountDown time={time} />
            </Box>
          </Box>
          <OutlineButton 
            disabled={verificationDisabled}
            sx={{ maxWidth: "72px" }}
            onClick={e => checkVerificationCode()}
          >
            인증
          </OutlineButton>
        </VerificationRequestWrap>
      </Box>
    </Box>
  )
}
export default PhoneVerification