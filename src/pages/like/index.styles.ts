import { css } from "@emotion/css"
import { FormControl, List } from "@mui/material"
import { styled } from "@mui/material/styles"

export const RectCheckbox = styled(FormControl)(({}) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '3px 12px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

export const AvatarList = styled(List)(({}) => ({
  '& > .MuiButtonBase-root': {
    borderTop: '1px solid #DADADA',
  },
  '& > .MuiButtonBase-root.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiTypography-root': {
    color: '#666',
    fontSize: '.875rem',
  },
}))