import { MenuItem, MenuList } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FilterMenuContainer = styled(MenuList)(() => ({
  padding: '.87rem 1rem 1rem',
  minHeight: 'calc(100% - 131px)',
  display: 'grid',
  alignContent: 'space-between',
  '& .MuiButton-contained': {
    borderRadius: 0,
    width: '100%',
    padding: '1.12rem',
    color: '#FFF',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#000'
    },
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.5rem'
  }
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