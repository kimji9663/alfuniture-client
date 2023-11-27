import React, { useEffect, useState, useRef } from "react"
import { Box, Avatar, ListItemAvatar, ListItemText, SwipeableDrawer, ListItemButton } from "@mui/material"
import SelectBox from "../../components/SelectBox"
import { OrderTitle } from "./order.styles"
import { AvatarList } from "./couponSelector.styles"
import { couponItems } from "../../data"

interface CompleteProps {
  complete: string
  setComplete: React.Dispatch<React.SetStateAction<string>>
}

interface ToggleProps extends CompleteProps {
  drawerOpen: boolean 
  toggleDrawer: (val:boolean) => void
}

interface OptionsProps {
  name?: string | undefined
  img?: string | undefined
}

interface OptionSelectProps extends CompleteProps {
  complete: string
  setComplete: React.Dispatch<React.SetStateAction<string>>
  selectedCoupon: OptionsProps | null
  setSelectedCoupon: React.Dispatch<React.SetStateAction<OptionsProps>>
}

// 셀렉트박스 타입
const OptionSelectType = ({selectedCoupon, setSelectedCoupon, complete, setComplete }: OptionSelectProps) => {
  const [selected, setSelected] = useState<OptionsProps>(
    { name: "쿠폰을 선택해 주세요", img: "" }
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

  const handleListItemClick = (
    brand: string,
    logo: string,
    title: string,
  ) => {
    setOpen(false)
    const option = {...selected,  name: brand + '\u00A0' + title, img: logo}
    setSelected(option)
    selectedCoupon = selected
    setSelectedCoupon(selected)

    // 옵션 선택 시 complete = ture
    if (selectedCoupon !== null) {
      complete = brand + title
      setComplete(complete)
    } else {
      complete = brand + title
      setComplete(complete)
    }
  }

  return (
    <SelectBox
      selected={selected}
      setSelected={setSelected}
      open={open}
      setOpen={setOpen}
    >
      <AvatarList>
        {couponItems.map((el) => (
          <ListItemButton
            component="li"
            key={el.id}
            onClick={() => handleListItemClick(el.brand, el.logo, el.title)}
          >
            <ListItemAvatar>
              <Avatar alt={el.brand} src={el.logo} />
            </ListItemAvatar>
            <Box>
              <ListItemText primary={el.brand} />
              <ListItemText primary={el.title} />
            </Box>
            <Box sx={{ ml: 'auto', fontSize: '.875rem' }}>
              D-{el.expiration}
            </Box>
          </ListItemButton>
        ))}
      </AvatarList>
    </SelectBox>
  )
}


const CouponSelector = ({drawerOpen, toggleDrawer, complete, setComplete}: ToggleProps) => {
  // ios에서 스와이프 동작 활성화
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [selectedCoupon, setSelectedCoupon] = useState<OptionsProps>({})

  const setToggleDrawer = (val: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleDrawer(val)
  }

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      disableSwipeToOpen={false}
      anchor='bottom'
      open={drawerOpen}
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
        <OrderTitle>사용가능 쿠폰조회</OrderTitle>
        <Box 
          component="p"
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            color: '#999',
            fontSize: '.8rem',
            '& .title': {
              color: '#000',
            }
          }}
        >
          <p className="title">보유중인 쿠폰</p>
          <p>3개</p>
        </Box>
        <Box sx={{ mt: 2 }}>
          <OptionSelectType
            selectedCoupon={selectedCoupon} 
            setSelectedCoupon={setSelectedCoupon}
            complete={complete}
            setComplete={setComplete}
          />
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}

export default CouponSelector