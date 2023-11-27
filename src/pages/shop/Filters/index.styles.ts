import { Button, MenuItem, MenuList } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FlexAlignItemsCenterBox, FlexBox } from '../../../components/Box';

export const OptionTagContainer = styled(FlexBox)(() => ({
  columnGap: '0.5rem',
  marginTop: '0.5rem'
}))

export const OptionTag = styled(FlexAlignItemsCenterBox)(() => ({
  backgroundColor: '#242223',
  color: '#FFF',
  padding: '0.5rem 0.38rem',
  columnGap: '0.25rem',
  '& .MuiIconButton-root': {
    padding: 0,
    width: '1rem',
    height: '1rem'
  }
}))

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
  },
  '&.Mui-selected': {
    backgroundColor: '#242223',
    '& .MuiTypography-root': {
      color: '#F7F7F7'
    }
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#242223',
    '& .MuiTypography-root': {
      color: '#F7F7F7'
    }
  },
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