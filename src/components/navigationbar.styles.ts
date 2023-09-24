import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const NaviWrap = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'sticky',
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
    color: '#999',
    fontSize: '.6rem',
  },  
  '&.navi > a svg': {
    marginBottom: '4px',
    color: '#999',
  },

  '&.navi > a.active, &.navi > a.active svg': {
    color: '#fff',
  },

  '&.pair > button': {
    flex: '1 1 50%',
  },  
  '&.single > button': {
    flex: '1 1 auto',
  },
}))

