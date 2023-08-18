import React, { Component, useState } from "react"
import { Box, Typography, FormControl, Divider, Checkbox, CheckboxProps, FormControlLabel } from "@mui/material"
import { AgreeCheckbox } from "./index.styles"
import { Check } from "@mui/icons-material"

const agreeItems = [
  {
    id: 'check_agree_age',
    require: true,
    label: '만 14세 이상'
  },
  {
    id: 'check_terms_of_use',
    require: true,
    label: '이용약관 동의'
  },
  {
    id: 'check_privacy',
    require: true,
    label: '개인정보 수집 및 이용동의'
  },
  {
    id: 'check_marketing',
    require: false,
    label: '광고성 정보 수신 및 마케팅 활용 동의'
  },
]

function CheckboxIcon(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<Check sx={{ color: '#000' }} />}
      icon={<Check sx={{ color: '#BDBDBD' }} />}
      inputProps={{ 'id': props.id }}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}

const TermsAgreement = () => {
  const [checkedRequire, setCheckedRequire] = useState([])
  const [checked, setChecked] = useState([false, false, false, false])

  const validateChecked = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
    if (e.currentTarget.required){
      //setCheckedRequire([...checkedRequire, ])
    }
  }

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleCheckAgree = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (event.currentTarget.checked){

    // }
    //setChecked([checked[1], event.target.checked])
    console.log(event.currentTarget.id)
  };
  
  const children = (
    <>
      {agreeItems.map((el, index) => (
        <AgreeCheckbox
          sx={index === 0 ? { mt: 2 } : null}
          key={el.id}
          control={<CheckboxIcon id={el.id} checked={checked[index]} onChange={handleCheckAgree} />} 
          labelPlacement="end" 
          label={<><span className="sub">{el.require ? '[필수]' : '[선택]'}</span> {el.label}</>}
        />
      ))}
    </>
  )

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: "100%", marginTop: 4 }}>
        <Typography sx={{ fontSize: "1.5rem" }}>알퍼니처 서비스 이용약관에</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>동의해주세요</Typography>
      </Box>

      <Box sx={{ mt: 13 }}>
        <FormControl fullWidth component="fieldset">
          <AgreeCheckbox 
            sx={{ mb: 2 }}
            control={
              <CheckboxIcon 
                id="check_agree_all"
                name="check_agree_all"
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleCheckAll}
              />
            } 
            labelPlacement="end" 
            label={<>모두동의 <span className="sub">[선택정보 포함]</span></>}
          />
          <Divider sx={{ borderColor: '#333' }} />
          {children}
        </FormControl>
      </Box>
    </Box>
  )
}
export default TermsAgreement