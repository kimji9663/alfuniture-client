import { styled } from "@mui/material/styles"
import { Box, FormControl, List } from "@mui/material"

export const AvatarList = styled(List)(() => ({
  padding: 0,
  '& > .MuiButtonBase-root.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiTypography-root': {
    color: '#666',
    fontSize: '.875rem',
  },
}))

export const OutlinedTag = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flex: '1 1 auto',
  boxSizing: 'border-box',
  padding: '12.7px 8px 12.7px 16px',
  maxWidth: '48%',
  borderRadius: 0,
  border: '1px solid #DADADA',
  color: '#999999',
  '& > img': {
    width: '18px',
    marginRight: '4px',
  }
}))

export const OutlinedCheckbox = styled(FormControl)(() => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    display: 'flex',
    alignItems: 'center',
    padding: '6.5px 12px',
    borderRadius: '18px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
  '& label > img': {
    width: '18px',
    marginRight: '4px',
  },
}))
