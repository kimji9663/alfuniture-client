import styled from "@emotion/styled"
import { Box, Paper } from "@mui/material"
import { GridBox } from "../Box"

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

export const PreviewDetailBox = styled(Box)(() => ({
  padding: '0.5rem 0 0 0'
}))

export const ColorPalette = styled(GridBox)(() => ({
  marginRight: '0.5rem'
}))