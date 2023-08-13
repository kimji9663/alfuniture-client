import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Button, Box } from "@mui/material"

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

export const OutlineButton = styled(Button)(() => ({
  border: '1px solid #333333',
  color: '#333333',
  '&:hover': {
    borderColor: '#333333',
  }
}))