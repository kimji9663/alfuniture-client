import { styled } from "@mui/material/styles"
import { FlexCenterCenterFullBox } from "../../components/Box"

export const LoadingBox = styled(FlexCenterCenterFullBox)(({}) => ({
  flexDirection: 'column',
  rowGap: '2rem',
  height: '100vh',
  '& .MuiCircularProgress-root': {
    color: '#DADADA',
  },
  '& .MuiTypography-root': {
    color: '#DADADA',
    fontSize: '1.375rem',
    fontWeight: 500,
    lineHeight: '1.75rem',
    textAlign: 'center'
  }
}))