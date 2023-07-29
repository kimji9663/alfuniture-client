import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"

export const NaviWrap = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '74px',

  '& > a, & > button': {
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    textAlign: 'center',
    fontSize: '1rem',
  },

  '&.navi > a': {
    flex: '1 1 20%',
    backgroundColor: '#000',
    color: '#fff',
  },

  '&.pair > button': {
    flex: '1 1 50%',
  },
  
  '&.single > button': {
    flex: '1 1 auto',
  },
}))

export const PrimaryButton = styled(Button)(() => ({
  backgroundColor: '#000',
  color: '#fff',
}))

export const PrimaryLightButton = styled(Button)(() => ({
  backgroundColor: '#EEEEEE',
  color: '#000',
}))

export const SecondaryButton = styled(Button)(() => ({
  backgroundColor: '#242223',
  color: '#fff',
}))

