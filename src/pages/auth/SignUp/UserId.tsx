import React, { useState } from "react"
import { Box, Typography, FormControl, Input, FormHelperText } from "@mui/material"

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
  createUserId: string
  changeUserData: (id:string) => void
}

const UserId = ({validated, changeValidated, createUserId, changeUserData}:IvalidatedProps) => {
  const [userId, setUserId] = useState('')
  const [idError, setIdError] = useState({
    errorActive: false,
    errorText: ''
  })

  const validateError = () => {
    if (idError.errorText === '') {
      return false
    } else if (idError.errorText !== '' && idError.errorActive) {
      return true
    }
  }
  
  const handleIdField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    setUserId(event.target.value)

    if (emailPattern.test(event.target.value)) {
      setIdError({errorActive: false, errorText: ''})
      createUserId = event.target.value
      changeUserData(createUserId)
      console.log('사용가능')
      validated[1] = true
    } else {
      setIdError({errorActive: true, errorText: '이메일에 형식이 올바르지 않습니다.'})      
      validated[1] = false
    }
    changeValidated([...validated])
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
      >
        <FormControl
          fullWidth
          variant="standard"
          margin="normal"
          onChange={handleIdField}
          error={validateError()}
        >
          <Input
            name="user_id"
            placeholder="이메일을 입력해주세요."
            type="text"
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={userId}
          />
          <FormHelperText>{idError.errorText}</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default UserId