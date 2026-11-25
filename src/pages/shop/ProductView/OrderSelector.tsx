import React, { useEffect, useState, useRef } from "react"
import { Box, Divider, SwipeableDrawer, List, ListItem, ListItemButton } from "@mui/material"
import SelectBox from "../../../components/SelectBox"
import { ViewTitle } from "./index.styles"
import { OutlinedTag, OutlinedCheckbox } from "./orderSelector.styles"
import { brown, white, black, green, blue, grey } from "../../../assets/images/filterIcon/colors"
import { IconX } from "../../../assets/images"

export interface OptionsProps {
  id?: string | undefined
  name?: string | undefined
  img?: string | undefined
}

export interface ColorOptions {
  name: string
  img: string
}

/** 상품 상세에서 고른 옵션. 상태는 부모(ProductView)가 갖고, 서랍을 닫았다 열어도 유지된다 */
export interface OptionSelection {
  colors: ColorOptions[]
  option: OptionsProps | null
}

export const REQUIRED_COLOR_COUNT = 2
export const isSelectionComplete = (s: OptionSelection) =>
  s.colors.length === REQUIRED_COLOR_COUNT && !!s.option?.name

interface ToggleProps {
  drawerOpen: boolean
  toggleDrawer: (val:boolean) => void
  selection: OptionSelection
  onSelectionChange: (next: OptionSelection) => void
  /**
   * 서랍을 붙일 요소 (상품 상세의 스크롤 영역).
   * MUI 모달은 붙은 요소 안의 형제만 스크린리더에서 숨기므로, 그 밖에 있는 하단 "장바구니/구매하기" 버튼은 계속 읽힌다.
   */
  container?: () => HTMLElement | null
}

interface OptionTagProps {
  colors: ColorOptions[]
  onChange: (colors: ColorOptions[]) => void
}

interface OptionSelectProps {
  option: OptionsProps | null
  onChange: (option: OptionsProps) => void
}

const productOptions = [
  {
    id: "brown",
    name: "브라운",
    img: brown
  },
  {
    id: "blue",
    name: "블루",
    img: blue
  },
  {
    id: "gray",
    name: "그레이",
    img: grey
  },
]

const colorScheme = [
  {
    name: "브라운",
    img: brown
  },
  {
    name: "화이트",
    img: white
  },
  {
    name: "블랙",
    img: black
  },
  {
    name: "그린",
    img: green
  },
]

// 태그 타입(2개 선택)
const OptionTagType = ({ colors, onChange }: OptionTagProps) => {
  const checkedColor = colors

  const hadleSelectedColor = (color: string, image: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // 컬러 2개까지만 선택 (체크박스는 checked 속성으로 제어되므로 초과 선택은 그대로 무시됨)
      if (checkedColor.length < REQUIRED_COLOR_COUNT && !checkedColor.some(el => el.name === color)) {
        onChange([...checkedColor, { name: color, img: image }])
      }
    } else {
      onChange(checkedColor.filter((el) => el.name !== color))
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {checkedColor.length !== 0 && (
          checkedColor.map((color) => (
            <OutlinedTag key={color.name} sx={{ mb: 2 }}>
              <img src={color.img} alt={color.name} />
              <span>{color.name}</span>
              {/* 태그 X: 이 색상 선택 해제 (키보드로도 누를 수 있는 버튼) */}
              <Box
                component="button"
                type="button"
                aria-label={`${color.name} 선택 해제`}
                onClick={() => onChange(checkedColor.filter((el) => el.name !== color.name))}
                sx={{
                  padding: '0 8px',
                  marginLeft: 'auto',
                  border: 0,
                  background: 'none',
                  cursor: 'pointer',
                  '& > svg': { display: 'block', color: '#8C8C8C' }
                }}
              >
                <IconX aria-hidden="true" />
              </Box>
            </OutlinedTag>
          ))
        )}
      </Box>
      <Box sx={{ overflow: "auto", whiteSpace: "nowrap", backgroundColor: "#FAFAFA", padding: "16px 8px 0 16px" }}>
        {colorScheme.map((color) => (
          <OutlinedCheckbox key={color.name} sx={{ mr: 1, mb: 2 }}>
            <input 
              type="checkbox" 
              id={`check_${color.name}`}
              checked={checkedColor.some(el => el.name === color.name)}
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
const OptionSelectType = ({ option, onChange }: OptionSelectProps) => {
  // 서랍을 다시 열면 이미 고른 옵션을 보여 준다
  const [selected, setSelected] = useState<OptionsProps>(
    option?.name ? option : { name: "컬러 선택", img: "" }
  )
  const dropMenuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClose = (e: {target: any}) => {
      // 바깥 클릭 시 메뉴 닫힘
      if(open && (!dropMenuRef.current?.contains(e.target))) setOpen(false)
    }
    document.addEventListener("click", handleOutsideClose)
    return () => document.removeEventListener("click", handleOutsideClose)
    // 마운트 해제 시 이벤트 삭제!!
  }, [open])

  const handleSelectOption = (id: string, name: string, img: string) => {
    setOpen(false)
    const next = { id, name, img }
    setSelected(next)
    // 방금 고른 값을 그대로 부모에 전달 (이전 코드는 직전 값을 전달해 한 박자 늦었음)
    onChange(next)
  }

  return (
    <SelectBox
      selected={selected}
      setSelected={setSelected}
      open={open}
      setOpen={setOpen}
    >      
      <List>
        {productOptions.map((option) => (
          <ListItem 
            key={option.id} 
            onClick={() => handleSelectOption(option.id, option.name, option.img)}
          >
            <ListItemButton>
              <img src={option.img} alt={option.name} />
              <span>{option.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SelectBox>
  )
}


const OrderSelector = ({drawerOpen, toggleDrawer, selection, onSelectionChange, container}: ToggleProps) => {
  // ios에서 스와이프 동작 활성화
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const setToggleDrawer = (val: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleDrawer(val)
  }

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      disableSwipeToOpen={false}
      anchor="bottom"
      open={drawerOpen}
      // 하단 버튼과 함께 쓰는 서랍: 버튼을 스크린리더에서 숨기지 않고(container) Tab으로 이동할 수 있게(disableEnforceFocus)
      ModalProps={{ container, disableEnforceFocus: true }}
      onClose={setToggleDrawer(false)}
      onOpen={setToggleDrawer(true)}
      sx={{
        zIndex: 1,
        "& .MuiBackdrop-root": {
          bottom: "74px",
        },
        "& .MuiPaper-root": {
          bottom: "74px",
        }
      }}
    >
      <Box
        sx={{ p: 2, width: "auto", height: "50vh" }}
        role="presentation"
      >
        <ViewTitle>색상조합</ViewTitle>
        <Box sx={{ mt: 2 }}>
          <OptionTagType
            colors={selection.colors}
            onChange={(colors) => onSelectionChange({ ...selection, colors })}
          />
        </Box>

        <Divider sx={{ mt: 3 }} />

        <ViewTitle sx={{ mt: 3 }}>옵션 선택</ViewTitle>
        <Box sx={{ py: 2 }}>
          <OptionSelectType
            option={selection.option}
            onChange={(option) => onSelectionChange({ ...selection, option })}
          />
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}

export default OrderSelector