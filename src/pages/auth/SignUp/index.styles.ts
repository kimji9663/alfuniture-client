import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Step, Box, FormControlLabel } from "@mui/material"

export const StepBar = styled(Step)<{ active?: boolean }>(
  ({ active }) => ({
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: 1,
    ...(active && {
      backgroundColor: '#000',
    }),
  }),
)

export const AgreeCheckbox = styled(FormControlLabel)(() => ({
  '& > span': {
    color: '#333',
  },
  '& .sub': {
    color: '#999',
  }
}))

export const VerificationButtonWrap = styled(Box)(() => ({
  '& > button': {
    borderRadius: 0, 
    height: '60px', 
    fontSize: '1rem',
  }
}))
