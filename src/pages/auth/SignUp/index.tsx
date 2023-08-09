import React, { useState } from "react"
import { Box, Button, Typography, Stepper, Step, StepLabel } from "@mui/material"
import { useNavigate } from "react-router-dom"
import TermsAgreement from "./TermsAgreement"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { PrimaryButton, PrimaryLightButton } from "../../../styles/buttons.styles"
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from "@mui/material/styles"

const StepperBar = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#000',
    }),
    '& .setpper_bar': {
      width: '50px',
      height: 3,
      backgroundColor: 'currentColor',
    },
  }),
);

function StepsLabel(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StepperBar ownerState={{ active }} className={className}>
      <div className="setpper_bar" />
    </StepperBar>
  );
}

const steps = ['SignUp01', 'SignUp02', 'SignUp03'];

const SignUp = () => {
  const navigate = useNavigate()

  const goToBack = () => {
    navigate(-1)
  } 

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Button onClick={goToBack}>뒤로가기</Button>

      <Stepper activeStep={activeStep} connector={null}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} sx={{ px: 0 }}>
              <StepLabel 
                StepIconComponent={StepsLabel}                
                sx={{ 
                  flexDirection: 'column',
                  '.MuiStepLabel-iconContainer': {
                    pr: 0,
                  },
                }}
              >
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {activeStep === 0 ? (
            <Box>
              <TermsAgreement />
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

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
          
          {activeStep === steps.length - 1 ? (
            <NaviWrap className="single">
              <PrimaryLightButton onClick={handleNext}>가입 완료</PrimaryLightButton>
            </NaviWrap>
          ) : (
            <NaviWrap className="single">
              <PrimaryButton onClick={handleNext}>다음으로</PrimaryButton>
            </NaviWrap>
          )}
        </>
      )}
    </>
  )
}

export default SignUp