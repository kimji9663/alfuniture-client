import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"

export const PrimaryButton = styled(Button)(() => ({
  backgroundColor: '#000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#000',
  }
}))

export const PrimaryLightButton = styled(Button)(() => ({
  backgroundColor: '#EEEEEE',
  color: '#000',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  }
}))

export const SecondaryButton = styled(Button)(() => ({
  backgroundColor: '#242223',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#242223',
  }
}))