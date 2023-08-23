import React, { useState } from "react"
import { Box, Typography, FormControl, Divider, Checkbox, CheckboxProps } from "@mui/material"


const UserId = () => {

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
            placeholder="아이디를 입력해주세요."
            type="text"
            onChange={handleChangeLoginField}
            sx={{ '& > input': { height: '2.6875em', fontSize: '.875rem' } }}
            value={formData.login_id}
          />
        </FormControl>
        <Divider sx={{ borderColor: '#333' }} />
      </Box>
    </Box>
  )
}

export default UserId