import { Global } from "@emotion/react"
import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Box, IconButton, Divider, Typography, ButtonGroup } from "@mui/material"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../../styles/buttons.styles"
import { ProductMainInfo, OrderButton, ProductViewTabs } from "./index.styles"
import { IconLikeOff, IconLikeOn } from "../../../assets/images"
import { BasicModal } from "../../../styles/modal.styles"
import { sofa01 } from "../../../assets/images/product"
import { alfdn } from "../../../assets/images/logo"
import NoTitle from "../../../components/title/NoTitle"
import DetailViewPanel from "./DetailViewPanel"
import ReviewPanel from "./ReviewPanel"
import PersonalQnaPanel from "./PersonalQnaPanel"
import OrderSelector, { OptionSelection, isSelectionComplete } from "./OrderSelector"
import BrandButton from "../../../components/BrandButton"
import { NewCartItem, useCart } from "../../../store/cart"
import type { OrderState } from "../../order/Order"
import { won } from "../../../utils/pricing"
import { useLikes } from "../../../store/likes"

// 이 화면이 보여 주는 상품 (상품 ID 라우팅·API 연동 전까지 고정)
const product = {
  productId: "camelfton",
  shopName: "ALFDN",
  modelName: "",
  productName: "카멜프튼",
  price: 1594500,
  deliveryCharge: 0, // 배송비 및 관부가세 포함 가격
}

const brandData = {
  name: "ALFDN",
  description: "알프든",
  image: alfdn, 
  isLiked: true, 
};


const globalStyle = {
  ".MuiModal-root": {
    maxWidth: "420px",
    margin: "auto",

    ".MuiBackdrop-root": {
      maxWidth: "420px",
      margin: "auto",
    },
    ".MuiDrawer-paper": {
      maxWidth: "420px",
      margin: "auto",
    },
  },
  "#basic-menu.MuiModal-root": {
    maxWidth: "none",
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const viewProps = (index: number) => {
  return {
    id: `view-tab-${index}`,
    "aria-controls": `view-tabpanel-${index}`,
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

const ProductView = () => {
  const navigate = useNavigate()
  const [tabValue, setTabValue] = useState(0)
  const { isLiked, toggleLike } = useLikes()
  const isLike = isLiked(product)
  const [optionOpen, setOptionOpen] = useState(false)
  const [selection, setSelection] = useState<OptionSelection>({ colors: [], option: null })
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("")
  const { addItem } = useCart()
  const addingRef = useRef(false)
  // 옵션 서랍을 붙일 스크롤 영역 (하단 버튼은 이 밖에 있음)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const selectComplete = isSelectionComplete(selection)

  // 지금 고른 옵션으로 만든 주문 상품 (장바구니 담기·바로 구매 공통)
  const selectedItem = (): NewCartItem => ({
    ...product,
    option1: selection.colors.map((c) => c.name).join("/"),
    option2: selection.option?.name ?? null,
    count: 1,
  })

  const goToCart = (event: React.MouseEvent) => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후
      if (selectComplete) {
        // 장바구니로 이동하시겠습니까? 모달 띄움
        addingRef.current = false // 새 담기 확인 창마다 다시 허용
        setModalType("cart")
        setModalOpen(true)
      } else {
        // 필수 옵션 체크 에러
        setModalType("error")
        setModalOpen(true)
      }
    }
    setOptionOpen(true)
  }

  const goToOrder = () => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후 주문하기 이동
      if (selectComplete) {
        // 바로 구매: 장바구니를 거치지 않고 이 상품만 주문서로 넘긴다
        const state: OrderState = { source: "buyNow", item: selectedItem() }
        navigate("/order", { state })
      } else {
        // 필수 옵션 체크 에러
        setModalType("error")
        setModalOpen(true)
      }
    }
    setOptionOpen(true)
  }

  const handleClickLike = (event: React.MouseEvent) => {
    toggleLike({ ...product, colors: ["#494A4C", "#192552", "#D67531"] })
  }

  const handleViewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const toggleDrawer = (val:boolean) => {
    setOptionOpen(val)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const handleAddCart = () => {
    // "확인"을 빠르게 두 번 눌러도 한 번만 담는다 (화면이 "담았습니다"로 바뀌기 전 두 번째 클릭 방지)
    if (!selectComplete || addingRef.current) return
    addingRef.current = true
    addItem({
      ...selectedItem(),
    })
    // 담은 뒤 결과 안내 (계속 쇼핑 / 장바구니로 이동)
    setOptionOpen(false)
    setModalType("added")
  }

  return (
    <>
      <Global styles={globalStyle} />
      <NoTitle/>
      <Box ref={contentRef} sx={{ height: "calc(100vh - 74px)", overflow: "auto" }}>
        {/* LCP 요소: 우선 로드 + 원본 비율(360x458)로 자리를 미리 잡아 레이아웃 밀림 방지 */}
        <Box sx={{ "& > img": { width: "100%", height: "auto" } }}>
          <img src={sofa01} alt="소파" width={360} height={458} {...{ fetchpriority: "high" }} />
        </Box>
        <Box sx={{ p: 2 }}>
          <ProductMainInfo>
            <Box className="product_brand">
              <Typography className="brand_name">ALFDN</Typography>
              <IconButton aria-label="좋아요" aria-pressed={!!isLike}
                onClick={handleClickLike}
              >
                {isLike ? <IconLikeOn /> : <IconLikeOff />}
              </IconButton>
            </Box>
            <Box className="product_title">
              <Typography>카멜프튼</Typography>
              <Box className="color_info">
                <Box component="span" className="text">3 COLOR</Box>
                <Box component="span" className="color" sx={{ backgroundColor: "#494A4C" }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: "#192552" }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: "#D67531" }}></Box>
              </Box>
            </Box>
            <Box className="product_price">
              <span className="price">{won(product.price)}</span>
              <span className="fee">배송비 및 관부가세 포함</span>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box className="product_delivery">
              <Box>
                <Box component="p" className="delivery_title">
                  배송정보
                </Box>
                <Box component="p" className="delivery_info">
                  <Box component="span" sx={{ color: "#666" }}>
                    빠른배송
                  </Box>
                  <Box component="span" sx={{ ml: 1, color: "#D32F2F" }}>
                    불가능
                  </Box>
                </Box>
              </Box>
              <Box className="button">
                <OrderButton fullWidth>주문제작</OrderButton>
              </Box>
            </Box>
          </ProductMainInfo>
          <BrandButton brandData={brandData}/>
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
          <PersonalQnaPanel />
        </ViewTabPanel>
      </Box>

      <OrderSelector 
        container={() => contentRef.current}
        drawerOpen={optionOpen} 
        toggleDrawer={toggleDrawer} 
        selection={selection}
        onSelectionChange={setSelection}
      />

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={goToCart}>장바구니</SecondaryButton>
        <PrimaryButton onClick={goToOrder}>구매하기</PrimaryButton>
      </NaviWrap>
      
      <BasicModal open={modalOpen} onClose={handleClose}>
        <Box>
          {modalType === "error" && (
            <>
              <div className="content">필수 옵션을 선택해주세요.</div>
              <ButtonGroup fullWidth>
                <PrimaryButton onClick={handleClose}>확인</PrimaryButton>
              </ButtonGroup>
            </>
          )}
          {modalType === "cart" && (
            <>
              <div className="content">선택된 상품을 장바구니에 담으시겠습까?</div>
              <ButtonGroup fullWidth>
                <SecondaryButton onClick={handleClose}>취소</SecondaryButton>
                <PrimaryButton onClick={handleAddCart}>확인</PrimaryButton>
              </ButtonGroup>
            </>
          )}
          {modalType === "added" && (
            <>
              <div className="content">장바구니에 담았습니다.</div>
              <ButtonGroup fullWidth>
                <SecondaryButton onClick={handleClose}>계속 쇼핑하기</SecondaryButton>
                <PrimaryButton onClick={() => navigate("/cart")}>장바구니 보기</PrimaryButton>
              </ButtonGroup>
            </>
          )}
        </Box>
      </BasicModal>
    </>
  )
}
export default ProductView