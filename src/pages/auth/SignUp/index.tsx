import React, { useState } from "react"
import { Box, Button, Typography, Stepper, Step } from "@mui/material"
import { useNavigate } from "react-router-dom"
import TermsAgreement from "./TermsAgreement"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { PrimaryButton, PrimaryLightButton } from "../../../styles/buttons.styles"
import { styled } from "@mui/material/styles"

const StepBar = styled(Step)<{ active?: boolean }>(
  ({ active }) => ({
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: 1,
    ...(active && {
      backgroundColor: '#000',
    }),
  }),
)

const steps = ['SignUp01', 'SignUp02', 'SignUp03', 'SignUp04', 'SignUp05', 'SignUp06']

const SignUp = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [validated, setValidated] = useState<boolean[]>([])

  const goToBack = () => {
    navigate(-1)
  }
  
  const handleNext = (step:number) => {
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

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Button onClick={goToBack}>뒤로가기</Button>
        
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
              페이지 2
            </Box>
          ) : null}
          {activeStep === 2 ? (
            <Box>
              페이지 3
            </Box>
          ) : null}
          {activeStep === 3 ? (
            <Box>
              페이지 4
            </Box>
          ) : null}
          {activeStep === 4 ? (
            <Box>
              페이지 5
            </Box>
          ) : null}
          {activeStep === 5 ? (
            <Box>
              페이지 6
            </Box>
          ) : null}
          
          {activeStep === steps.length - 1 ? (
            <NaviWrap className="single">
              <PrimaryLightButton onClick={e => handleNext(activeStep)}>가입 완료</PrimaryLightButton>
            </NaviWrap>
          ) : (
            <NaviWrap className="single">
              <PrimaryButton onClick={e => handleNext(activeStep)} disabled={validated[activeStep] ? false : true}>다음으로</PrimaryButton>
            </NaviWrap>
          )}
        </>
      )}
    </>
  )
}

export default SignUp