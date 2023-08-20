import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const ListImageBox = styled(Box)(() => ({
  padding: '16px 18px 16px 0',
  borderRight: '1px solid #999999',
  '& img': {
    width: '100%',
    aspectRatio: '10 / 9'
  }
}))

export const ListDetailBox = styled(Box)(() => ({
  width: '100%',
  padding: '16px 8px 16px 18px'
}))