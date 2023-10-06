import { styled } from "@mui/material/styles"
import { Step, Box, FormControl } from "@mui/material"

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
