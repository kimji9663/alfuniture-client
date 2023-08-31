import React from "react"
import { Box } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import TitleTwoLine1 from "../../components/title/TitleTwoLine1"
import { RectCheckbox } from "./funitureSelection.styles"
import { useNavigate } from "react-router-dom"

const itemList = [
  {
    id: 0,
    name: '소파',
  },
  {
    id: 1,
    name: '침대',
  },
  {
    id: 2,
    name: '책상',
  },
  {
    id: 3,
    name: '테이블',
  },
  {
    id: 4,
    name: '의자',
  },
  {
    id: 5,
    name: '조명',
  },
  {
    id: 6,
    name: '키즈',
  },
  {
    id: 7,
    name: '수납장',
  },
  {
    id: 8,
    name: '홈데코',
  }
]

const FunitureSelection = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/style_selection")
  }

  const title = ['찾고 싶은 가구를', '선택해주세요.'];

  return (
    <>
      <Box sx={{height: '100%', overflow: 'auto' }}>
        <TitleTwoLine1 title={title} onClick={goToNext} />

        <Box sx={{ px: 2}}>
          {
            itemList.map((el) => (
              <RectCheckbox key={el.id} sx={{ mr: 1, mb: 2 }}>
                <input type="checkbox" id={`check_${el.name}`} />
                <label htmlFor={`check_${el.name}`}>{el.name}</label>
              </RectCheckbox>
            ))
          }
        </Box>
      </Box>
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FunitureSelection