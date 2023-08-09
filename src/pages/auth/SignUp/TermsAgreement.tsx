import React, { useState } from "react"
import { Box, Button, Typography, FormControl, Divider } from "@mui/material"
import { useNavigate } from "react-router-dom"

const TermsAgreement = () => {

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>알퍼니처 서비스 이용약관에</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>동의해주세요</Typography>
      </Box>

      <Box>
        <FormControl>
          <input 
            type="checkbox" 
            id="check_agree_all" 
          />
          <label>모두 동의</label>
        </FormControl>
        <Divider />

        <FormControl>
          <input 
            type="checkbox" 
            id="check_agree_age" 
          />
          <label><span>[필수]</span> 만 14세 이상</label>
        </FormControl>
        <FormControl>
          <input 
            type="checkbox" 
            id="check_terms_of_use" 
          />
          <label><span>[필수]</span> 이용약관 동의</label>
        </FormControl>
        <FormControl>
          <input 
            type="checkbox" 
            id="check_agree_age" 
          />
          <label><span>[필수]</span> 개인정보 수집 및 이용동의</label>
        </FormControl>
      </Box>
    </Box>
  )
}
export default TermsAgreement