import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const NavWrap = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '74px',
  backgroundColor: '#000',

  '& > a': {
    flex: '1 1 20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  }
}))

