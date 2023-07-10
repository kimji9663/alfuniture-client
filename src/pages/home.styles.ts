import { css } from '@emotion/css'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

// 방법1. emotion/css
export const exampleStyle = css`
  font-size: 1rem;
`

// 방법2. mui/material/styles
export const StyledBox = styled(Box)(() => ({
    padding: '0 4px',
}));