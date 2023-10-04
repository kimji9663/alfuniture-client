import React, { useEffect, useState, useRef } from "react"
import { Box, Divider, SwipeableDrawer, Button, List, ListItem, ListItemButton } from "@mui/material"
import { ViewTitle } from "./index.styles"
import { OutlinedTag, OutlinedCheckbox, OutlinedSelect } from "./orderSelector.styles"
import { brown, white, black, green, blue, grey } from "../../../assets/images/filterIcon/colors"
import { IconX } from "../../../assets/images"

interface ToggleProps {
  open: boolean 
  toggleDrawer: (val:boolean) => void
  complete: boolean[]
  setComplete: React.Dispatch<React.SetStateAction<boolean[]>>
}

interface OptionTagProps {
  selectedColor: ColorOptions[] | null
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorOptions[]>>
  complete: boolean[]
  setComplete: React.Dispatch<React.SetStateAction<boolean[]>>
}

interface OptionSelectProps {
  selectedOption: OptionsProps | null
  setSelectedOption: React.Dispatch<React.SetStateAction<OptionsProps>>
  complete: boolean[]
  setComplete: React.Dispatch<React.SetStateAction<boolean[]>>
}

interface OptionsProps {
  name?: string | undefined
  img?: string | undefined
}

interface ColorOptions {
  name: string
  img: string
}

const productOptions = [
  {
    name: '브라운',
    img: brown
  },
  {
    name: '블루',
    img: blue
  },
  {
    name: '그레이',
    img: grey
  },
]

const colorScheme = [
  {
    name: '브라운',
    img: brown
  },
  {
    name: '화이트',
    img: white
  },
  {
    name: '블랙',
    img: black
  },
  {
    name: '그린',
    img: green
  },
]

// 태그 타입(2개 선택)
const OptionTagType = ({selectedColor, setSelectedColor, complete, setComplete }: OptionTagProps) => {
  const [checkedColor, setCheckedColor] = useState<ColorOptions[]>([])

  const hadleSelectedColor = (color: string, image: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && !checkedColor.some(el => el.name === color)){
      if (checkedColor.length < 2) {
        selectedColor = [...checkedColor, {name: color, img: image}]
        setCheckedColor(selectedColor)
      } else {
        // 컬러 2개이상 선택 시 체크 막기
        event.target.checked = false
      }
    } else {
      selectedColor = checkedColor.filter((el) => el.name !== color)
      setCheckedColor(selectedColor)
    }

    // 옵션 모두 선택 시 complete[0] = ture
    if (selectedColor && selectedColor.length === 2){
      setSelectedColor(selectedColor)
      complete[0] = true
      setComplete(complete)
    } else {
      complete[0] = false
      setComplete(complete)
    }
    console.log(selectedColor)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {checkedColor.length !== 0 && (
          checkedColor.map((color) => (
            <OutlinedTag key={color.name} sx={{ mb: 2 }}>
              <img src={color.img} alt={color.name} />
              <span>{color.name}</span>
              <Box 
                component="span" 
                sx={{ 
                  padding: '0 8px', 
                  marginLeft: 'auto', 
                  '& > svg': { display: 'block', cursor: 'pointer' } 
                }}
              >
                <IconX />
              </Box>
            </OutlinedTag>
          ))
        )}
      </Box>
      <Box sx={{ overflow: 'auto', whiteSpace: 'nowrap', backgroundColor: '#FAFAFA', padding: '16px 8px 0 16px' }}>
        {colorScheme.map((color) => (
          <OutlinedCheckbox key={color.name} sx={{ mr: 1, mb: 2 }}>
            <input 
              type="checkbox" 
              id={`check_${color.name}`} 
              onChange={hadleSelectedColor(color.name, color.img)}
            />
            <label htmlFor={`check_${color.name}`}>
              <img src={color.img} alt={color.name} />
              <span>{color.name}</span>
            </label>
          </OutlinedCheckbox>
        ))}
      </Box>
    </>
  )
}

// 셀렉트박스 타입
const OptionSelectType = ({selectedOption, setSelectedOption, complete, setComplete }: OptionSelectProps) => {
  const [selected, setSelected] = useState<OptionsProps>(
    { name: '컬러 선택', img: '' }
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

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setOpen(prevState => !prevState)
  }

  const handleSelctOption = (name: string, img: string) => {
    setOpen(false)
    const selectOption = {...selected,  name: name, img: img}
    setSelected(selectOption)
    selectedOption = selected
    setSelectedOption(selectedOption)

    // 옵션 선택 시 complete[1] = ture
    if (selectedOption !== null) {
      complete[1] = true
      setComplete(complete)
    } else {
      complete[1] = false
      setComplete(complete)
    }
    console.log(selectedOption)
  }

  return (
    <OutlinedSelect 
      ref={dropMenuRef}
      isopen={open.toString()}
    >
      <Button
        fullWidth
        onClick={handleOpen}
      >
        {selected.img !== '' && (
          <img src={selected.img} alt={selected.name} />
        )}
        <span>{selected.name}</span>
      </Button>
      <List className="dropmenu">
        {productOptions.map((option) => (
          <ListItem key={option.name} onClick={() => handleSelctOption(option.name, option.img)}>
            <ListItemButton>
              <img src={option.img} alt={option.name} />
              <span>{option.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </OutlinedSelect>
  )
}


const OrderSelector = ({open, toggleDrawer, complete, setComplete}: ToggleProps) => {
  // ios에서 스와이프 동작 활성화
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [selectedColors, setSelectedColors] = useState<ColorOptions[]>([])
  const [selectedOption, setSelectedOption] = useState<OptionsProps>({})

  const setToggleDrawer = (val: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleDrawer(val)
  }

  useEffect(() => {
    console.log(complete)
  }, [selectedColors, selectedOption, complete])

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      disableSwipeToOpen={false}
      anchor='bottom'
      open={open}
      onClose={setToggleDrawer(false)}
      onOpen={setToggleDrawer(true)}
      sx={{
        zIndex: 1,
        '& .MuiBackdrop-root': {
          bottom: '74px',
        },
        '& .MuiPaper-root': {
          bottom: '74px',
        }
      }}
    >
      <Box
        sx={{ p: 2, width: 'auto', height: '50vh' }}
        role="presentation"
      >
        <ViewTitle>색상조합</ViewTitle>
        <Box sx={{ mt: 2 }}>
          <OptionTagType 
            selectedColor={selectedColors} 
            setSelectedColor={setSelectedColors}
            complete={complete}
            setComplete={setComplete}
          />
        </Box>

        <Divider sx={{ mt: 3 }} />

        <ViewTitle sx={{ mt: 3 }}>옵션 선택</ViewTitle>
        <Box sx={{ mt: 2 }}>
          <OptionSelectType 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption}
            complete={complete}
            setComplete={setComplete}
          />
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}

export default OrderSelector