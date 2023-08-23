import React, { useState } from "react"
import { Box, Typography, FormControl, Divider, Input, FormHelperText } from "@mui/material"


const UserId = () => {
  const [userId, setUserId] = useState('')
  const [pwError, setPwError] = useState({
    errorActive: false,
    errorText: ''
  })
  
  const handleChangeLoginField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    setUserId(event.target.value)
  }

  const handleSubmitLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userId === '') {
      setPwError({errorActive: false, errorText: ''})
      console.log('사용가능')
      //stepNext()
    } else {
      setPwError({errorActive: true, errorText: '이메일에 형식이 올바르지 않습니다.'})
      setUserId('')
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>로그인에 사용할</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>아이디를 입력해주세요</Typography>
      </Box>

      <Box 
        sx={{ mt: 13 }}
        component="form" 
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
            placeholder="이메일을 입력해주세요."
            type="text"
            onChange={handleChangeLoginField}
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={userId}
          />
          <FormHelperText>{pwError.errorText}</FormHelperText>
        </FormControl>
        <Divider sx={{ borderColor: '#333' }} />
      </Box>
    </Box>
  )
}

export default UserId