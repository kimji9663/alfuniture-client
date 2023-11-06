import React, { useEffect, useState, useRef } from "react"
import { List, ListItem, ListItemButton } from "@mui/material"
import SelectBox from "../../components/SelectBox"

interface OptionsProps {
  id?: string | undefined
  name?: string | undefined
  img?: string
}

interface OptionSelectProps {
  selectedOption: string | null
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

const cardOptions = [
  {
    id: 1,
    name: '신한카드',
    img: null
  },
  {
    id: 2,
    name: '국민카드',
    img: null
  },
  {
    id: 3,
    name: 'NH카드',
    img: null
  },
  {
    id: 4,
    name: 'BC카드',
    img: null
  },
  {
    id: 5,
    name: '삼성카드',
    img: null
  },
  {
    id: 6,
    name: '현대카드',
    img: null
  },
]

// 셀렉트박스 타입
const CardSelector = ({selectedOption, setSelectedOption }: OptionSelectProps) => {
  const [selected, setSelected] = useState<OptionsProps>(
    { id: '', name: '카드 선택', img: '' }
  )
  const dropMenuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClose = (e: {target: any}) => {
      // 바깥 클릭 시 메뉴 닫힘
      if(open && (!dropMenuRef.current?.contains(e.target))) setOpen(false)
    }
    document.addEventListener('click', handleOutsideClose)
    return () => document.removeEventListener('click', handleOutsideClose)
    // 마운트 해제 시 이벤트 삭제!!
  }, [open])

  const handleSelectOption = (name: string) => {
    setOpen(false)
    const option = {...selected,  name: name}
    setSelected(option)
    selectedOption = name
    setSelectedOption(selectedOption)
    console.log(selectedOption)
  }

  return (
    <SelectBox
      selected={selected}
      setSelected={setSelected}
      open={open}
      setOpen={setOpen}
    >      
      <List>
        {cardOptions.map((option) => (
          <ListItem 
            key={option.id} 
            onClick={() => handleSelectOption(option.name)}
          >
            <ListItemButton>
              <span>{option.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SelectBox>
  )
}
export default CardSelector