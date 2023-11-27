import React, { useState } from "react"
import { Box, Typography, FormControl, FormControlLabel, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import CheckboxIcon from "../../../components/CheckBoxIcon"

export const AgreeCheckbox = styled(FormControlLabel)(() => ({
  "& > span": {
    color: "#333",
  },
  "& .sub": {
    color: "#999",
  }
}))

type IvalidatedProps = {
  validated: boolean[]
  changeValidated: (val:boolean[]) => void
}

const agreeItems = [
  {
    id: "check_agree_age",
    require: true,
    label: "만 14세 이상"
  },
  {
    id: "check_terms_of_use",
    require: true,
    label: "이용약관 동의"
  },
  {
    id: "check_privacy",
    require: true,
    label: "개인정보 수집 및 이용동의"
  },
  {
    id: "check_marketing",
    require: false,
    label: "광고성 정보 수신 및 마케팅 활용 동의"
  },
]

const TermsAgreement = ({validated, changeValidated}:IvalidatedProps) => {
  const [checkedList, setCheckedList] = useState<string[]>([])
  const [checkedAll, setCheckedAll] = useState(false)
  const required = agreeItems.filter((el) => el.require === true).map(el => el.id)
  const requiredValidation = required.every(el => checkedList.includes(el)) ? true : false

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked){
      setCheckedList([...checkedList, ...agreeItems.map(el => el.id)])
      if (event.currentTarget.id === "check_agree_all"){
        setCheckedAll(true)
        validated[0] = true
        console.log(validated)
      }
    } else {
      setCheckedList([])
      setCheckedAll(false)
      validated[0] = false
    }
    changeValidated([...validated])
  }

  const handleCheckEach = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
    const isCurruntTargetRequire = required.includes(event.currentTarget.id)
    const checkListLength = checkedList.filter(el => required.includes(el)).length
    if (event.currentTarget.checked){
      setCheckedList([...checkedList, id])
      console.log(checkListLength, required.length)
      if (checkedList.length === agreeItems.length - 1){
        setCheckedAll(true)
      }
      if ((isCurruntTargetRequire && required.length - 1 === checkListLength) || requiredValidation){
        validated[0] = true
      }
    } else {
      setCheckedList(checkedList.filter((el) => el !== id))
      setCheckedAll(false)
      if (isCurruntTargetRequire || !requiredValidation) {
        validated[0] = false
      }
    }
    changeValidated([...validated])
  }
  
  const children = (
    <>
      {agreeItems.map((el, index) => (
        <AgreeCheckbox
          sx={index === 0 ? { mt: 2 } : null}
          key={el.id}
          control={
            <CheckboxIcon 
              id={el.id} 
              onChange={e => handleCheckEach(e, el.id)}
              checked={checkedList.includes(el.id)}
            />
          } 
          labelPlacement="end" 
          label={<><span className="sub">{el.require ? "[필수]" : "[선택]"}</span> {el.label}</>}
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
                onChange={handleCheckAll}
                checked={checkedAll}
              />
            } 
            labelPlacement="end" 
            label={<>모두동의 <span className="sub">[선택정보 포함]</span></>}
          />
          <Divider sx={{ borderColor: "#333" }} />
          {children}
        </FormControl>
      </Box>
    </Box>
  )
}
export default TermsAgreement 