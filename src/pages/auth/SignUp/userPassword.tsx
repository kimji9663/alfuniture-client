import React, { useState } from "react"
import { Box, Typography, FormControl, Input, FormHelperText } from "@mui/material"
import { error } from "console"

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
}

const UserPassword = ({validated, changeValidated}:IvalidatedProps) => {
  const [userPassword, setUserPassword] = useState('')
  const [pwError, setPwError] = useState({
    errorActive: false,
    errorAlphabet: '',
    errorSpecial: '',
    errorLength: '',
    errorNumber: ''
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

  const isError = (target: string, test: boolean) => {
    if (test) {
      if (target === 'alphabet') {
        setActiveClass({...activeClass, alphabet: 'error'})
      } else {
        setActiveClass({...activeClass, alphabet: ''})
      }
      if (target === 'speacial') {
        setActiveClass({...activeClass, speacial: 'error'})
      } else {
        setActiveClass({...activeClass, speacial: ''})
      }
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
      validated[2] = true
    } else {
      setPwError({
        errorActive: true, 
        errorAlphabet: '대소문자', 
        errorSpecial: '특수문자', 
        errorLength: '8-20이내',
        errorNumber: '숫자'
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
      </Box>
    </Box>
  )
}

export default UserPassword