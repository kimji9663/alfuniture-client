import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Step, Box, FormControlLabel, FormControl } from "@mui/material"

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

export const VerificationRequestWrap = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '56px',

  '& > .MuiBox-root, & .MuiButtonBase-root': {
    flex: '1 1 auto',
  },
  '& > .MuiBox-root': {
    marginRight: '1rem',
  },
  '& .MuiInputBase-root': {
    width: '100%',
    height: '100%',
  },
  '& .MuiInputBase-root > input': {
    fontSize: '.875rem',
  },
  '& .MuiButtonBase-root': {
    padding: 0,
    borderRadius: 0,
    fontSize: '.875rem',
  },
}))

export const CountBox = styled(Box)(() => ({
  position: 'absolute',
  top: '17px',
  right: 0,
  color: '#f11111',
  fontSize: '.875rem',
}))
