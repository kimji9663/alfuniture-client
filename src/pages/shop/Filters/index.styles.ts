import { Box, Button, MenuItem, MenuList } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FilterMenuContainer = styled(MenuList)(() => ({
  padding: '1.5rem 1rem',
  maxHeight: '70vh',
  display: 'grid',
  alignContent: 'space-between',
}))

export const FilterMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  columnGap: '1rem',
  padding: '1rem',
  borderBottom: '1px solid #DADADA',
  '&.priceType': {
    paddingTop: '2.12rem',
    paddingBottom: '1.12rem',
    justifyContent: 'right'
  }
}))

export const ShowProductButton = styled(Button)(() => ({  
  borderRadius: 0,
  width: '100%',
  height: '74px',
  padding: '1.12rem',
  position: 'fixed',
  bottom: 0,
  color: '#FFF',
  backgroundColor: '#000',
  '&:hover': {
    backgroundColor: '#000'
  },
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.5rem'
}))