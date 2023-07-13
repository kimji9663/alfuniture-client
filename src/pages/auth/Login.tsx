import styled from "@emotion/styled"
import { Box, Button, Link, TextField, IconButton, Typography } from "@mui/material"
import React, { ChangeEvent, useState } from "react"


const SnsStyle = styled(Box)(() => ({
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

const Login = () => {
  const [formData, setFormData] = useState({
    login_id: '',
    login_pw: '',
  })
  const [idError, setIdError] = useState({
    errorActive: false,
    errorText: ''
  })
  const [pwError, setPwError] = useState({
    errorActive: false,
    errorText: ''
  })
  const handleChangeLoginField = (event:ChangeEvent<HTMLInputElement>)=> {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData, event.target.value)
    if (event.target.name === 'login_id') {
      if (event.target.value !== 'aaa') {
        setIdError({errorActive: true, errorText: '아이디가 일치하지 않습니다.'})
      } else {
        setIdError({errorActive: false, errorText: ''})
      }
    } else if (event.target.name === 'login_pw') {
      if (event.target.value !== 'bbb') {
        setPwError({errorActive: true, errorText: '비밀번호가 일치하지 않습니다.'})
      } else {
        setPwError({errorActive: false, errorText: ''})
      }
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Link href="/">Sign Up</Link>
      </Box>
      <Box component="h1" sx={{ mt: 7 }}>
        해외가구의 모든것<br />
        Alfuniture
      </Box>

      <Box sx={{ mt: 4 }}>
        <TextField
          error={idError.errorActive}
          onChange={handleChangeLoginField}
          fullWidth
          hiddenLabel
          variant="standard"
          name="login_id"
          placeholder="아이디를 입력해주세요."
          helperText={idError.errorText}
          margin="normal"
        />
        <TextField
          error={pwError.errorActive}
          onChange={handleChangeLoginField}
          fullWidth
          hiddenLabel
          variant="standard"
          name="login_pw"
          placeholder="비밀번호를 입력해주세요."
          helperText={pwError.errorText}
          margin="normal"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
        <Button variant="contained" size="large" sx={{ mt: 3, width: '100%' }}>로그인</Button>
        <Typography component="p" sx={{ mt: 2, textAlign: 'center' }}>비밀번호를 잊으셨나요? <Link>비밀번호 찾으러가기</Link></Typography>
      </Box>

      <SnsStyle sx={{ mt: 7 }}>
        <Typography component="p" sx={{ mb: 2 }}>SNS로 간편하게 시작하기</Typography>
        <IconButton aria-label="카카오" className="kakao">K</IconButton>
        <IconButton aria-label="네이버" className="naver">N</IconButton>
        <IconButton aria-label="페이스북" className="facebook">F</IconButton>
        <IconButton aria-label="애플" className="apple">A</IconButton>
      </SnsStyle>
    </Box>
  )
}

export default Login