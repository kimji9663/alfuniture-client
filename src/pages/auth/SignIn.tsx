import React, { useState } from "react"
import { Box, Button, Link, IconButton, Typography, FormControl, Input, InputAdornment, FormHelperText } from "@mui/material"
import { SnsLogin } from "./signIn.styles"
import { useNavigate } from "react-router-dom"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { ArrowBottom, icon_kakao, icon_naver, icon_facebook, icon_apple } from "../../assets/images"

const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)
  const [formData, setFormData] = useState({
    login_id: '',
    login_pw: '',
  })
  const [pwError, setPwError] = useState({
    errorActive: false,
    errorText: ''
  })

  const goToHome = () => {
    navigate("/home")
  }           
  
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleChangeLoginField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData, event.target.value)
  }

  const handleSubmitLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.login_id === 'aaa' && formData.login_pw === 'bbb') {
      setPwError({errorActive: false, errorText: ''})
      console.log('로그인 성공')
      goToHome()
    } else {
      setPwError({errorActive: true, errorText: '비밀번호가 일치하지 않습니다.'})
      setFormData({...formData, login_id: '', login_pw: ''})
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button 
          variant="text" 
          component={Link} 
          href="/" 
          sx={{ 
            fontSize: '.875rem', 
            color: '#666666',
            textTransform: 'none',
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Box component="h1" sx={{ mt: 7, fontSize: '.75rem', color: '#666666' }}>
        해외가구의 모든것<br />
        Alfuniture
      </Box>

      <Box 
        component="form" 
        sx={{ mt: 4 }} 
        autoComplete="off"
        onSubmit={e => handleSubmitLogin(e)}
      >
        <FormControl  
          fullWidth
          variant="standard"
          margin="normal"
        >
          <Input
            name="login_id"
            placeholder="아이디를 입력해주세요."
            type="text"
            onChange={handleChangeLoginField}
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={formData.login_id}
          />
        </FormControl>
        
        <FormControl  
          fullWidth
          variant="standard"
          margin="normal"
          error={pwError.errorActive}
        >
          <Input
            name="login_pw"
            placeholder="비밀번호를 입력해주세요."
            type={showPassword ? 'text' : 'password'}
            onChange={handleChangeLoginField}
            inputProps={{ inputMode: 'numeric', pattern: '[a-z0-9]*' }}
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={formData.login_pw}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{pwError.errorText}</FormHelperText>
        </FormControl>

        <Button 
          fullWidth 
          variant="contained" 
          size="large" 
          type="submit" 
          sx={{ 
            mt: 3, 
            py: 2, 
            backgroundColor: '#242223', 
            borderRadius: 0, 
            fontSize: '1rem',
            '& > svg': {
              ml: 1
            }
          }}
        >
          로그인
          <ArrowBottom />
        </Button>
        <Typography 
          sx={{ 
            mt: 2, 
            textAlign: 'center', 
            color: '#999999', 
            fontSize: '.75rem',
            '& > a': { 
              ml: 1,
              color: '#333333',
              textDecoration: 'none',
            } 
          }}
        >
          비밀번호를 잊으셨나요? 
          <Link>비밀번호 찾으러가기</Link>
        </Typography>
      </Box>

      <SnsLogin sx={{ mt: 9 }}>
        <Typography component="p" sx={{ mb: 1, fontSize: '.875rem', color: '#333333' }}>SNS로 간편하게 시작하기</Typography>
        <IconButton aria-label="카카오" className="kakao">
          <img src={icon_kakao} alt="" />
        </IconButton>
        <IconButton aria-label="네이버" className="naver">
          <img src={icon_naver} alt="" />
        </IconButton>
        <IconButton aria-label="페이스북" className="facebook">
          <img src={icon_facebook} alt="" />
        </IconButton>
        <IconButton aria-label="애플" className="apple">
          <img src={icon_apple} alt="" />
        </IconButton>
      </SnsLogin>
    </Box>
  )
}

export default SignIn