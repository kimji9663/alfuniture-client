import { css } from "@emotion/css"
import { FormControl } from "@mui/material"
import { styled } from "@mui/material/styles"

export const RectCheckbox = styled(FormControl)(({}) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    border: '1px solid #DADADA',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))