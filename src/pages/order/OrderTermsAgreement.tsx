import React, { useState } from "react"
import { Box, Divider, FormControl } from "@mui/material"
import {AgreeCheckbox } from "./order.styles"
import CheckboxIcon from "../../components/CheckBoxIcon"

interface OrderTermsProps {
  termsAgree: boolean
  changeOrderData: (val:boolean) => void
}

const agreeItems = [
  {
    id: 'check_agree_age',
    require: true,
    label: '개인정보 수집/이용 동의'
  },
  {
    id: 'check_terms_of_use',
    require: true,
    label: '개인정보 수집/이용 동의'
  },
  {
    id: 'check_privacy',
    require: true,
    label: '결제대행 서비스 이용약관 (주)KG이니시스'
  },
]

const OrderTermsAgreement = ({termsAgree, changeOrderData}:OrderTermsProps) => {
  const required = agreeItems.filter((el) => el.require === true).map(el => el.id)
  const [checkedAgreeList, setCheckedAgreeList] = useState<string[]>([])
  const [checkedAgreeAll, setCheckedAgreeAll] = useState(false)

  const handleCheckAgreeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked){
      setCheckedAgreeList([...checkedAgreeList, ...agreeItems.map(el => el.id)])
      if (event.currentTarget.id === 'check_agree_all'){
        setCheckedAgreeAll(true)
        termsAgree = true
      }
    } else {
      setCheckedAgreeList([])
      setCheckedAgreeAll(false)
      termsAgree = false
    }
    changeOrderData(termsAgree)
  }

  const handleCheckEach = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
    const checkListLength = checkedAgreeList.filter(el => required.includes(el)).length
    if (event.currentTarget.checked){
      setCheckedAgreeList([...checkedAgreeList, id])
      console.log(checkListLength, required.length)
      if (checkedAgreeList.length === agreeItems.length - 1){
        setCheckedAgreeAll(true)
        termsAgree = true
      }
    } else {
      setCheckedAgreeList(checkedAgreeList.filter((el) => el !== id))
      setCheckedAgreeAll(false)
      termsAgree = false
    }
    changeOrderData(termsAgree)
  }
  
  const children = (
    <Box sx={{ py: 2, background: '#FAFAFA' }}>
      {agreeItems.map((el, index) => (
        <AgreeCheckbox
          sx={index === 0 ? { mt: 2 } : null}
          key={el.id}
          control={
            <CheckboxIcon 
              id={el.id} 
              onChange={e => handleCheckEach(e, el.id)}
              checked={checkedAgreeList.includes(el.id)}
            />
          } 
          labelPlacement="end" 
          label={<><span className="sub">{el.require ? '[필수]' : '[선택]'}</span> {el.label}</>}
        />
      ))}
    </Box>
  )

  return (
    <>
      <Box sx={{ p: 2 }}>
        <FormControl 
          fullWidth 
          component="fieldset"
          sx={{
            '& label': {
              margin: 0,
            },
            '& label span': {
              fontSize: '.75rem'
            },
            '& > label > span': {
              fontSize: '.875rem'
            }
          }}
        >
          <AgreeCheckbox 
            sx={{ mb: 2 }}
            control={
              <CheckboxIcon 
                id="check_agree_all"
                onChange={handleCheckAgreeAll}
                checked={checkedAgreeAll}
              />
            }
            labelPlacement="end" 
            label="주문 내용 모두 동의"
          />
          <Divider sx={{ borderColor: '#333' }} />
          {children}
        </FormControl>
      </Box>
    </>
  )
}

export default OrderTermsAgreement