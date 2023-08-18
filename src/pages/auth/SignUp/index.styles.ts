import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box, FormControlLabel } from "@mui/material"

export const AgreeCheckbox = styled(FormControlLabel)(() => ({
  '& > span': {
    color: '#333',
  },
  '& .sub': {
    color: '#999',
  }
}))
