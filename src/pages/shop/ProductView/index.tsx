import { Global } from "@emotion/react"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Box, IconButton, Divider, Typography, SwipeableDrawer, Button, List, ListItem, ListItemButton } from "@mui/material"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../../styles/buttons.styles"
import { ProductMainInfo, BrandInfo, OrderButton, ProductViewTabs, ViewTitle, OutlinedSelect, OutlinedCheckbox } from "./index.styles"
import { ArrowRight, IconHeartSmall, IconLikeOff, IconLikeOn, IconX } from "../../../assets/images"
import { sofa01 } from "../../../assets/images/product"
import { alfdn } from "../../../assets/images/brand"
import NoTitle from '../../../components/title/NoTitle'
import DetailViewPanel from "./DetailViewPanel"
import ReviewPanel from "./ReviewPanel"
import PersonalQna from "./PersonalQna"
import { brown, white, black, green, blue, grey } from "../../../assets/images/filterIcon/colors"


const globalStyle = {
  '.MuiModal-root': {
    maxWidth: '420px',
    margin: 'auto',

    '.MuiBackdrop-root': {
      maxWidth: '420px',
      margin: 'auto',
    },
    '.MuiDrawer-paper': {
      maxWidth: '420px',
      margin: 'auto',
    },
  },
  '#basic-menu.MuiModal-root': {
    maxWidth: 'none',
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
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

const viewProps = (index: number) => {
  return {
    id: `view-tab-${index}`,
    'aria-controls': `view-tabpanel-${index}`,
  }
}

const ViewTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`view-tabpanel-${index}`}
      aria-labelledby={`view-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

const OptionSelectType = () => {
  const [selectedOption, setSelectedOption] = useState({ name: '컬러 선택', img: '' })
  const dropMenuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

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
    setSelectedOption({ name: name, img: img})
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
        {selectedOption.img !== '' && (
          <img src={selectedOption.img} alt={selectedOption.name} />
        )}
        <span>{selectedOption.name}</span>
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


const ProductView = () => {
  // ios에서 스와이프 동작 활성화
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const navigate = useNavigate()
  const [tabValue, setTabValue] = useState(0)
  const [isLike, setIsLike] = useState(false)
  const [optionOpen, setOptionOpen] = useState(false)
  const [checkedColor, setCheckedColor] = useState<ColorOptions[]>([])

  const goToCart = (event: React.MouseEvent) => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후
      // 장바구니로 이동하시겠습니까? 모달 띄움
      // 이동하기 클릭 시 장바구니로 이동
      navigate("/") // 장바구니 링크로
    }
    setOptionOpen(true)
  }

  const goToOrder = () => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후 주문하기 이동
      navigate("/order") // 주문하기 링크로
    }
    setOptionOpen(true)
  }

  const handleClickLike = (event: React.MouseEvent) => {
    setIsLike(!isLike)
  }

  const handleViewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  
  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setOptionOpen(open)
  }

  const hadleSelectedColor = (color: string, image: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && !checkedColor.some(el => el.name === color)){
      setCheckedColor([...checkedColor, {name: color, img: image}])
    } else {
      setCheckedColor(checkedColor.filter((el) => el.name !== color))
    }
    if (checkedColor.length > 1){
      setCheckedColor(checkedColor.filter((el) => el.name !== color))
      event.target.checked = false
    }
  }

  return (
    <>
      <Global styles={globalStyle} />
      <NoTitle/>
      <Box sx={{ height: 'calc(100% - 57px)', overflow: 'auto' }}>
        <Box sx={{ '& > img': { width: '100%' } }}>
          <img src={sofa01} alt="소파" />
        </Box>
        <Box sx={{ p: 2 }}>
          <ProductMainInfo>
            <Box className="product_brand">
              <Typography className="brand_name">ALFDN</Typography>
              <IconButton
                onClick={handleClickLike}
              >
                {isLike ? <IconLikeOn /> : <IconLikeOff />}
              </IconButton>
            </Box>
            <Box className="product_title">
              <Typography>카멜프튼</Typography>
              <Box className="color_info">
                <Box component="span" className="text">3 COLOR</Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#494A4C' }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#192552' }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#D67531' }}></Box>
              </Box>
            </Box>
            <Box className="product_price">
              <span className="price">1,594,500원</span>
              <span className="fee">배송비 및 관부가세 포함</span>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box className="product_delivery">
              <Box>
                <Box component="p" className="delivery_title">
                  배송정보
                </Box>
                <Box component="p" className="delivery_info">
                  <Box component="span" sx={{ color: '#666' }}>
                    빠른배송
                  </Box>
                  <Box component="span" sx={{ ml: 1, color: '#FD6868' }}>
                    불가능
                  </Box>
                </Box>
              </Box>
              <Box className="button">
                <OrderButton fullWidth>주문제작</OrderButton>
              </Box>
            </Box>
          </ProductMainInfo>
          <BrandInfo fullWidth sx={{ mt: 3 }}>
            <Box sx={{ px: 2 }}>
              <img src={alfdn} alt="알프든" />
            </Box>
            <Box>
              <Typography sx={{ color: '#333', fontSize: '.875rem', fontWeight: 'bold', '& > svg': { ml: 1/2 } }}>
                ALFDN
                <ArrowRight />
              </Typography>
              <Typography sx={{ color: '#999', fontSize: '.75rem' }}>알프든</Typography>
            </Box>
            <Box sx={{ ml: 'auto', px: 4, '& > svg': { display: 'block' } }}>
              <IconHeartSmall />
            </Box>
          </BrandInfo>
        </Box>
        
        <ProductViewTabs>
          <Tabs
            value={tabValue}
            variant="fullWidth" 
            onChange={handleViewTab} 
            aria-label="main category"
          >
            <Tab label="상품설명" {...viewProps(0)} />
            <Tab label="리뷰" {...viewProps(1)} />
            <Tab label="문의사항" {...viewProps(2)} />
          </Tabs>
        </ProductViewTabs>

        <ViewTabPanel value={tabValue} index={0}>
          <DetailViewPanel />
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={1}>
          <ReviewPanel />
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={2}>
          <PersonalQna />
        </ViewTabPanel>
      </Box>

      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        disableSwipeToOpen={false}
        anchor='bottom'
        open={optionOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {checkedColor.length !== 0 && (
                checkedColor.map((color) => (
                  <Box 
                    key={color.name}
                    sx={{
                      mb: 2, 
                      display: 'flex',
                      alignItems: 'center',
                      flex: '1 1 auto',
                      boxSizing: 'border-box',
                      padding: '12.7px 8px 12.7px 16px',
                      maxWidth: '48%',
                      borderRadius: 0,
                      border: '1px solid #DADADA',
                      color: '#999999',
                      '& > img': {
                        width: '18px',
                        marginRight: '4px',
                      }
                    }}
                  >
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
                  </Box>
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
          </Box>

          <Divider sx={{ mt: 3 }} />

          <ViewTitle sx={{ mt: 3 }}>옵션 선택</ViewTitle>
          <Box sx={{ mt: 2 }}>
            <OptionSelectType />
          </Box>
        </Box>
      </SwipeableDrawer>

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={goToCart}>장바구니</SecondaryButton>
        <PrimaryButton onClick={goToOrder}>구매하기</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default ProductView