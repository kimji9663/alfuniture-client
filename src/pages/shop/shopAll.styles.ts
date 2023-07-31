import { css } from "@emotion/css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const ShopAllList = styled(Box)(({}) => ({
  display: 'flex',
  borderBottom: '1px solid #DADADA',

  '& > .middle_category': {
    flex: '1 1 16%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: '16px',
    color: '#878787',
  },
  '& > .subdivision': {
    display: 'none',
    flex: '1 1 80%',
    alignSelf: 'center',
  },
  '.subdivision .MuiList-root': {
    padding: 0,
  },
  '.subdivision .MuiListItem-root:not(:last-child)': {
    borderBottom: '1px solid #DADADA',
  },
  '.subdivision .MuiSvgIcon-root': {
    fontSize: '.8rem',
    color: 'rgb(102 102 102 / 50%)',
  },

  '&.open .middle_category': {
    borderRight: '1px solid #DADADA', 
    color: '#000',
  },
  '&.open .subdivision': {
    display: 'block',
  },
})) 