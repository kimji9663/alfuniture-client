import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const SnsLogin = styled(Box)(() => ({
  textAlign: 'center',
  '& .MuiButtonBase-root': {
    margin: '0 16px',
    width: '52px',
    color: '#fff',
  },
  '& .MuiButtonBase-root.kakao': {
    backgroundColor: '#ffe617',
  },
  '& .MuiButtonBase-root.naver': {
    backgroundColor: '#00c300',
  },
  '& .MuiButtonBase-root.facebook': {
    backgroundColor: '#1877f2',
  },
  '& .MuiButtonBase-root.apple': {
    backgroundColor: '#161616',
  },
}))