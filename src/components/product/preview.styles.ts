import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { GridBox } from "../Box"

export const ListImageBox = styled(Box)(() => ({
  padding: '16px 18px 16px 0',
  borderRight: '1px solid #DADADA',
  '& img': {
    aspectRatio: '10 / 9',
    width: '101px',
    height: '100%',
  },
}))

export const ListDetailBox = styled(Box)(() => ({
  width: '100%',
  height: "calc(100% - 32px)",
  padding: '16px 8px 16px 18px',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}))

export const PreviewDetailBox = styled(Box)(() => ({
  padding: '0.5rem 0 0 0'
}))

export const ColorPalette = styled(GridBox)(() => ({
  marginRight: '0.5rem'
}))