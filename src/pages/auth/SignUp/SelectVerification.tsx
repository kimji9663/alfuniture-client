import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import { PrimaryButton, PrimaryLightButton } from "../../../styles/buttons.styles"
import { ArrowRight } from "@mui/icons-material"
import { VerificationButtonWrap } from "./index.styles"
import PhoneVerification from "./PhoneVerification"
import EmailVerification from "./EmailVerification"


const SelectVerification = () => {
  const [verification, setVerification] = useState('')

  const handleVerification = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setVerification(e.currentTarget.id)
  }

  return(
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>알퍼니처 이용 전</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>본인인증이 필요해요</Typography>
      </Box>

      {verification === 'email_verification' ? <EmailVerification /> : (
        verification === 'phone_verification' ? <PhoneVerification /> : (
          <VerificationButtonWrap sx={{ mt: 13 }}>
            <PrimaryButton 
              fullWidth 
              endIcon={
                <ArrowRight />
              }
              id="phone_verification"
              onClick={e => handleVerification(e)}
            >
              휴대폰 본인인증
            </PrimaryButton>
            <PrimaryLightButton 
              fullWidth 
              sx={{ mt: 1 }}
              endIcon={
                <ArrowRight />
              }
              id="email_verification"
              onClick={e => handleVerification(e)}
            >
              이메일 본인인증
            </PrimaryLightButton>
          </VerificationButtonWrap>
        )
      )}

    </Box>
  )
}

export default SelectVerification