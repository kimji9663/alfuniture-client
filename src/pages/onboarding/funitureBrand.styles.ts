import { css } from "@emotion/css"
import { FormControl } from "@mui/material"
import { styled } from "@mui/material/styles"

export const BrandCard = styled(FormControl)(({}) => ({
  position: 'relative', 
  width: '150px',
  height: '234px',

  '&:first-child': {
    width: '218px',
    height: '303px',
  },

  '& img': {
    width: '100%',
    height: '100%',
  },
  '& .text': {
    position: 'absolute',
    bottom: 0,
    padding: '16px',
    color: '#fff',
  },
}))