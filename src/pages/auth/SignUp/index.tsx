import React, { useState } from "react"
import { Box, Button, Typography, Stepper } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { PrimaryButton, PrimaryLightButton } from "../../../styles/buttons.styles"
import { StepBar } from "./index.styles"
import TermsAgreement from "./TermsAgreement"
import UserId from "./UserId"
import UserPassword from "./userPassword"
import SelectVerification from "./SelectVerification"
import { ArrowLeft } from '../../../assets/images'

const steps = ['SignUp01', 'SignUp02', 'SignUp03', 'SignUp04']

const SignUp = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [validated, setValidated] = useState<boolean[]>([])
  const [userData, setUserData] = useState({
    userId: ''
  })

  const goToBack = () => {
    navigate(-1)
  }
  
  const stepBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }
  
  const stepNext = (step:number) => {
    if (validated[step] === true){
      console.log('index value1 : ', activeStep, validated[step])
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const isActive = (label: string) => {
    return label === steps[activeStep] ? true : false
  }

  const changeValidated = (val:boolean[]) => {
    setValidated([...val])
    //console.log(val)
  }
  const changeUserData = (id:string) => {
    setUserData({userId: id})
    console.log(userData)
  }

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '56px' }}>
          <Button onClick={activeStep === 0 ? goToBack : stepBack} sx={{ minWidth: 0, p: 0 }}>
            <ArrowLeft />
          </Button>
        </Box>
        
        <Stepper activeStep={activeStep} connector={null}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean, } = {}
            
            return (
              <StepBar
                key={label} 
                {...stepProps} 
                sx={{ 
                  px: 0, 
                  flex: `1 1 ${100/steps.length}%` 
                }}
                active={isActive(label)}
              />
            )
          })}
        </Stepper>
      </Box>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            회원가입이 완료되었습니다.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </>
      ) : (
        <>
          {activeStep === 0 ? (
            <Box>
              <TermsAgreement 
                validated={validated}
                changeValidated={changeValidated}
              />
            </Box>
          ) : null}
          {activeStep === 1 ? (
            <Box>
              <UserId 
                validated={validated}
                changeValidated={changeValidated}
                createUserId={userData.userId}
                changeUserData={changeUserData}
              />
            </Box>
          ) : null}
          {activeStep === 2 ? (
            <Box>
              <UserPassword 
                validated={validated}
                changeValidated={changeValidated}
              />
            </Box>
          ) : null}
          {activeStep === 3 ? (
            <Box>
              <SelectVerification 
                validated={validated}
                changeValidated={changeValidated}
                getUserId={userData.userId}
              />
            </Box>
          ) : null}
          
          {activeStep === steps.length - 1 ? (
            <NaviWrap className="single">
              <PrimaryLightButton onClick={e => stepNext(activeStep)}>가입 완료</PrimaryLightButton>
            </NaviWrap>
          ) : (
            <NaviWrap className="single">
              <PrimaryButton onClick={e => stepNext(activeStep)} disabled={validated[activeStep] ? false : true}>다음으로</PrimaryButton>
            </NaviWrap>
          )}
        </>
      )}
    </>
  )
}

export default SignUp