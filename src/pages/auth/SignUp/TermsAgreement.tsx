import React, { useState } from "react"
import { Box, Button, Typography, FormControl, Divider, Checkbox, CheckboxProps, FormControlLabel } from "@mui/material"
import { Check } from "@mui/icons-material"

function CheckboxIcon(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<Check sx={{ color: '#000' }} />}
      icon={<Check sx={{ color: '#BDBDBD' }} />}
      inputProps={{ 'id': props.id }}
    />
  );
}

const TermsAgreement = () => {

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>알퍼니처 서비스 이용약관에</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>동의해주세요</Typography>
      </Box>

      <Box>
        <FormControl fullWidth component="fieldset">
          <FormControlLabel 
            control={<CheckboxIcon id="check_agree_all" />} 
            labelPlacement="end" 
            label="모두동의" 
          />
          <Divider />
          
          <FormControlLabel 
            control={<CheckboxIcon id="check_agree_age" />} 
            labelPlacement="end" 
            label={<><span>[필수]</span> 만 14세 이상</>} 
          />
          <FormControlLabel 
            control={<CheckboxIcon id="check_terms_of_use" />} 
            labelPlacement="end" 
            label={<><span>[필수]</span> 이용약관 동의</>} 
          />
          <FormControlLabel 
            control={<CheckboxIcon id="check_privacy" />} 
            labelPlacement="end" 
            label={<><span>[필수]</span> 개인정보 수집 및 이용동의</>} 
          />
        </FormControl>
      </Box>
    </Box>
  )
}
export default TermsAgreement