import React, { useState } from "react"
import { Box, Typography, FormControl, Input, FormHelperText } from "@mui/material"

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
}

const UserPassword = ({validated, changeValidated}:IvalidatedProps) => {
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('')
  const [pwError, setPwError] = useState({
    errorActive: false,
    errorAlphabet: '',
    errorSpecial: '',
    errorLength: '',
    errorNumber: ''
  })
  const [pwConfirmError, setPwConfirmError] = useState({
    errorActive: false,
    errorText: ''
  })
  const [activeClass, setActiveClass] = useState({
    alphabet: '',
    speacial: '',
    length: '',
    number: ''
  })

  const validateError = () => {
    if (pwError.errorLength === '') {
      return false
    } else if (pwError.errorLength !== '' && pwError.errorActive) {
      return true
    }
  }

  const validateConfirmError = () => {
    if (pwConfirmError.errorText === '') {
      return false
    } else if (pwConfirmError.errorText !== '' && pwConfirmError.errorActive) {
      return true
    }
  }
  
  const handlePasswordField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/
    const alphabetPattern = /[a-zA-Z]/
    const speacialPattern = /[!@#$%^&*]/
    const numberPattern = /[0-9]/

    setUserPassword(event.target.value)

    !alphabetPattern.test(event.target.value) ? 
    activeClass.alphabet = 'error' : activeClass.alphabet = ''
    
    !speacialPattern.test(event.target.value) ? 
    activeClass.speacial = 'error' : activeClass.speacial = ''

    event.target.value.length > 20 || event.target.value.length < 8 ? 
    activeClass.length = 'error' : activeClass.length = ''

    !numberPattern.test(event.target.value) ? 
    activeClass.number = 'error' : activeClass.number = ''
    
    setActiveClass({...activeClass})

    if (passwordPattern.test(event.target.value)) {
      setPwError({
        errorActive: false,
        errorAlphabet: '', 
        errorSpecial: '', 
        errorLength: '',
        errorNumber: ''
      })
    } else {
      setPwError({
        errorActive: true, 
        errorAlphabet: '대소문자', 
        errorSpecial: '특수문자', 
        errorLength: '8-20이내',
        errorNumber: '숫자'
      })
    }
  }

  const handlePasswordConfirmField = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserPasswordConfirm(event.target.value)

    if (userPassword === event.target.value) {
      setPwConfirmError({
        errorActive: false,
        errorText: ''
      })
      validated[2] = true
    } else {
      setPwConfirmError({
        errorActive: true,
        errorText: '비밀번호 일치'
      })
      validated[2] = false
    }
    changeValidated([...validated])
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>로그인에 사용할</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>비밀번호를 입력해주세요</Typography>
      </Box>

      <Box 
        sx={{ mt: 13 }}
        component="form" 
        autoComplete="off"
      >
        <FormControl
          fullWidth
          variant="standard"
          margin="normal"
          onChange={handlePasswordField}
          error={validateError()}
        >
          <Input
            name="user_pw"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={userPassword}
          />
          <FormHelperText 
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              '& > span': { color: '#00000099' }, 
              '& > .error': { color: '#d32f2f' } 
            }}
          >
            <Box component="span" className={activeClass.alphabet}>{pwError.errorAlphabet}</Box>
            <Box component="span" className={activeClass.speacial}>{pwError.errorSpecial}</Box>
            <Box component="span" className={activeClass.length}>{pwError.errorLength}</Box>
            <Box component="span" className={activeClass.number}>{pwError.errorNumber}</Box>
          </FormHelperText>
        </FormControl>
        
        <FormControl
          fullWidth
          variant="standard"
          margin="normal"
          onChange={handlePasswordConfirmField}
          error={validateConfirmError()}
        >
          <Input
            name="user_pw_confirm"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={userPasswordConfirm}
          />
          <FormHelperText>{pwConfirmError.errorText}</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default UserPassword
