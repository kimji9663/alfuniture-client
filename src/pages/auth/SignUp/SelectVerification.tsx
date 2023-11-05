import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { PrimaryButton, PrimaryLightButton } from "../../../styles/buttons.styles"
import { ArrowBottom } from "../../../assets/images"
import PhoneVerification from "./PhoneVerification"
import EmailVerification from "./EmailVerification"

export const VerificationButtonWrap = styled(Box)(() => ({
  "& > button": {
    borderRadius: 0, 
    height: "60px", 
    fontSize: "1rem",
  }
}))

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
  getUserId: string
}

const SelectVerification = ({validated, changeValidated, getUserId}:IvalidatedProps) => {
  const [verification, setVerification] = useState("")

  const handleVerification = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setVerification(e.currentTarget.id)
  }

  return(
    <Box sx={{ p: 2 }}>
      {verification === "email_verification" ? (
          <EmailVerification
            validated={validated}
            changeValidated={changeValidated}
            getUserId={getUserId}
          />
        ) : (
        verification === "phone_verification" ? (
          <PhoneVerification
            validated={validated}
            changeValidated={changeValidated}
          />
        ) : (
          <>
            <Box sx={{ width: "100%", marginTop: 4 }}>
              <Typography sx={{ fontSize: "1.5rem" }}>알퍼니처 이용 전</Typography>
              <Typography sx={{ fontSize: "1.5rem" }}>본인인증이 필요해요</Typography>
            </Box>
            <VerificationButtonWrap sx={{ mt: 13 }}>
              <PrimaryButton 
                fullWidth 
                endIcon={
                  <ArrowBottom />
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
                  <ArrowBottom />
                }
                id="email_verification"
                onClick={e => handleVerification(e)}
              >
                이메일 본인인증
              </PrimaryLightButton>
            </VerificationButtonWrap>
          </>
        )
      )}
    </Box>
  )
}

export default SelectVerification