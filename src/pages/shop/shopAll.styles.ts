import { css } from "@emotion/css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const ShopAllList = styled(Box)(({}) => ({
  display: 'flex',
  borderBottom: '1px solid #DADADA',

  '& > .middle_category': {
    borderRight: '1px solid #DADADA', 
    flex: '1 1 20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& > .subdivision': {
    flex: '1 1 80%',
  },
  '.subdivision .MuiList-root': {
    padding: 0,
  },
  '.subdivision .MuiListItem-root:not(:last-child)': {
    borderBottom: '1px solid #DADADA',
  },
})) 