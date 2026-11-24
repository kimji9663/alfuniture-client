import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, FormControl, Input, FormHelperText, ButtonGroup, Typography, Button } from "@mui/material"
import { SecondaryButton, PrimaryButton } from "../../styles/buttons.styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import NoTitle from "../../components/title/NoTitle"
import {OrderTitle, SearchZipcodeWrap, AgreeCheckbox } from "./order.styles"
import DaumPostcodeEmbed from "react-daum-postcode"
import { BasicModal } from "../../styles/modal.styles"
import OrderInfomation from "./OrderInfomation"
import OrderTermsAgreement from "./OrderTermsAgreement"
import CheckboxIcon from "../../components/CheckBoxIcon"
import CouponSelector, { findCoupon } from "./CouponSelector"
import NoData from "../../components/NoData"
import { CartItem, NewCartItem, productImage, useCart } from "../../store/cart"
import { DeliveryType, orderAmounts, won } from "../../utils/pricing"

/**
 * 주문서로 넘어오는 방법 (react-router location.state, 새로 고침해도 유지됨)
 * - 장바구니 "구매하기": 선택한 장바구니 줄 ID 목록
 * - 상품 상세 "구매하기": 장바구니를 거치지 않는 바로 구매 상품
 */
export type OrderState =
  | { source: "cart"; ids: string[] }
  | { source: "buyNow"; item: NewCartItem }

type OrderLine = Pick<CartItem, "id" | "productId" | "shopName" | "productName" | "option1" | "option2" | "price" | "count">

const Order = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const orderState = location.state as OrderState | null
  const { items: cartItems, removeItem } = useCart()

  // 주문할 상품: 장바구니에서 고른 줄, 또는 바로 구매 상품
  const lines: OrderLine[] =
    orderState?.source === "buyNow"
      ? [{ ...orderState.item, id: "buy-now", count: orderState.item.count ?? 1 }]
      : orderState?.source === "cart"
        ? cartItems.filter((item) => orderState.ids.includes(item.id))
        : []
  // 입력한 모든 정보 저장
  const [orderData, setOrderData] = useState({
    recipient: "",
    zipcode: "",
    deliveryAddress: "",
    phoneNumber: "",
    addressSave: false,
    termsAgree: false,
    coupon: "",
    deliveryType: "빠른배송" as DeliveryType, // 배송방법 기본값 (OrderInfomation의 기본 선택과 같음)
    card: "",
  })
  const [recipientError, setRecipientError] = useState({
    errorActive: false,
    errorText: ""
  })
  const [phoneError, setPhoneError] = useState({
    errorActive: false,
    errorText: ""
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [couponOpen, setCouponOpen] = useState(false)
  const [selectCoupon, setSelectCoupon] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // 금액은 화면 상태에서 바로 계산 (src/utils/pricing.ts)
  const selectedCoupon = findCoupon(selectCoupon)
  const amounts = orderAmounts(lines, orderData.deliveryType, selectedCoupon)
  const selectedCouponName = selectedCoupon
    ? selectedCoupon.scope === "all" ? "전 상품 10%" : `${selectedCoupon.brand} 10%`
    : ""

  const handleClose = () => {
    setModalOpen(false)
  }

  const handleCompleteOrder = () => {
    // 연속 클릭으로 두 번 주문되지 않게 막는다
    if (submitting) return
    setSubmitting(true)
    // 장바구니에서 주문한 상품은 장바구니에서 뺀다
    if (orderState?.source === "cart") lines.forEach((line) => removeItem(line.id))
    navigate("/", { replace: true })
  }

  // 필수정보 체크 후 주문 버튼 활성화
  const handleActiveOrder =
    lines.length > 0 &&
    !submitting &&
    orderData.recipient !== "" &&
    orderData.zipcode !== "" &&
    orderData.deliveryAddress !== "" &&
    orderData.phoneNumber !== "" &&
    orderData.termsAgree === true &&
    orderData.card !== ""
  ? (
    false
  ) : (
    true
  )

  const validateError = () => {
    if (recipientError.errorText === "") {
      return false
    } else if (recipientError.errorText !== "" && recipientError.errorActive) {
      return true
    }
  }
  
  const handleNameField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    setOrderData({ ...orderData, recipient: event.target.value })

    if (event.target.value) {
      setRecipientError({
        errorActive: false, 
        errorText: ""
      })
    } else {
      setRecipientError({
        errorActive: true, 
        errorText: "수령인을 입력해주세요."
      })
    }
  }
  
  const handleSearchPostcode = () => {
    // 우편번호 검색 클릭 시 다음 우편번호 API 연동
    setOrderData({ ...orderData, zipcode: "", deliveryAddress: "" })
    setModalOpen(true)
  }
  
  const handlePhoneField = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const phoneNumberPattern = /^(010)[0-9]{3,4}[0-9]{4}$/
    const onlyNumber = event.target.value.replace(/[^-0-9]/g, "")
    setOrderData({ ...orderData, phoneNumber: onlyNumber })

    // 입력 시 핸드폰 번호 양식 체크
    // 양식에 맞지 않으면 애러 표시

    // 결제하기 클릭 시 연락처 입력 안되어있는지 체크
    // 입력 안되었을 시 애러 표시

    if (phoneNumberPattern.test(onlyNumber)) {
      setPhoneError({
        errorActive: false,
        errorText: ""
      })
    } else {      
      if (event.target.value !== "") {
        setPhoneError({
          errorActive: false,
          errorText: ""
        })
      }
      setPhoneError({
        errorActive: true,
        errorText: "휴대전화 형식이 올바르지 않습니다."
      })
    }
  }
  
  const handleAddressSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked){
      setOrderData({ ...orderData, addressSave: true })
      if (event.currentTarget.id === "check_agree_all"){
        setOrderData({ ...orderData, addressSave: true })
      }
    } else {
      setOrderData({ ...orderData, addressSave: false })
    }
  }

  const onCompletePost = (data:any) => {
    setModalOpen(false)
    setOrderData({
      ...orderData, 
      zipcode: data.zonecode,
      deliveryAddress: data.address
    })
  }

  const changeOrderDataDelivery = (val:string) => {
    setOrderData({...orderData, deliveryType: val as DeliveryType})
  }

  const changeOrderDataCard = (val:string) => {
    setOrderData({...orderData, card: val})
  }

  const changeOrderDataTermsAgree = (val:boolean) => {
    setOrderData({...orderData, termsAgree: val})
  }

  const toggleDrawer = (val:boolean) => {
    setCouponOpen(val)
  }

  // 주소창으로 바로 들어왔거나, 주문할 상품이 장바구니에서 모두 빠진 경우
  if (lines.length === 0) {
    return (
      <>
        <NoTitle />
        <NoData message={"주문할 상품이 없습니다."} linkText={"장바구니로 가기"} linkTo={"/cart"} />
      </>
    )
  }

  return (
    <>
      <NoTitle />
      <Box sx={{ height: "calc(100vh - 131px)", overflow: "auto" }}>
        <Box sx={{ p: 2 }}>
          <OrderTitle>배송지정보</OrderTitle>

          <Box>
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handleNameField}
              error={validateError()}
            >
              <Box 
                  sx={{ position: "absolute", top: "13px", fontSize: ".875rem", fontWeight: "bold" }}
              >
                수령인
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, "& > input": { height: "2.5rem", fontSize: ".875rem" } }}
                value={orderData.recipient}
              />
              <FormHelperText>{recipientError.errorText}</FormHelperText>
            </FormControl>
            
            <SearchZipcodeWrap
              variant="standard"
              margin="normal"
              sx={{height: "auto"}}
            >
              <Box>
                <Box 
                  sx={{ position: "absolute", top: "13px", fontSize: ".875rem", fontWeight: "bold" }}
                >
                  배송지
                </Box>
                <Input
                  name="user_id"
                  type="text"
                  sx={{ pl: 7, "& > input": { height: "2.5rem", fontSize: ".875rem" } }}
                  value={orderData.zipcode}
                  readOnly
                />
              </Box>
              <PrimaryButton 
                sx={{ maxWidth: "111px" }}
                onClick={handleSearchPostcode}
              >
                우편번호 검색
              </PrimaryButton>
            </SearchZipcodeWrap>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
            >
              <Input
                name="user_id"
                type="text"
                sx={{ "& > input": { height: "2.5rem", fontSize: ".875rem" } }}
                value={orderData.deliveryAddress}
                readOnly
              />
            </FormControl>

            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
            >
              <Input
                name="user_id"
                placeholder="상세주소를 입력해 주세요"
                type="text"
                sx={{ "& > input": { height: "2.5rem", fontSize: ".875rem" } }}
              />
            </FormControl>
            
            <FormControl
              fullWidth
              variant="standard"
              margin="normal"
              onChange={handlePhoneField}
              error={validateError()}
            >
              <Box 
                sx={{ position: "absolute", top: "13px", fontSize: ".875rem", fontWeight: "bold" }}
              >
                연락처
              </Box>
              <Input
                name="recipient"
                type="text"
                sx={{ pl: 7, "& > input": { height: "2.5rem", fontSize: ".875rem" } }}
                value={orderData.phoneNumber}
              />
              <FormHelperText
                sx={{
                "&.error": { color: "#d32f2f" } 
                }}
                className="error"
              >
                {phoneError.errorText}
              </FormHelperText>
            </FormControl>

            <AgreeCheckbox 
              sx={{ mb: 2 }}
              control={
                <CheckboxIcon 
                  id="check_agree_all"
                  onChange={handleAddressSave}
                  checked={orderData.addressSave}
                />
              } 
              labelPlacement="end" 
              label="기본 배송지로 등록"
            />
          </Box>
        </Box>

        <Box sx={{ p: 2, background: "#FAFAFA" }}>
          <OrderTitle>상품 정보</OrderTitle>
          {lines.map((line) => (
          <Box key={line.id} sx={{
            mt: 3,
            display: "flex",
            alignItems: "center"
          }}>
            <Box sx={{ mr: 2, position: "relative", width: "35%", paddingTop: "35%" }}>
              <Box 
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  background: "#000",
                  "& > img": { minWidth: "100%", minHeight: "100%" },
                }}
              >
                <img src={productImage(line.productId)} alt={line.productName} />
              </Box>
            </Box>
            <Box sx={{ flex: "1 1 auto" }}>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                {line.shopName} - {line.productName}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  "& > p": {
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#707070",
                    fontSize: ".75rem",
                  },
                  "& .title, & .total": {
                    fontWeight: "bold",
                    color: "#333",
                  },
                  '& .MuiButton-root': {
                    fontSize: '.75rem',
                    width: '62px',
                    padding: 0,
                    borderRadius: 0,
                  }
                }}
              >
                <p>
                  <span className="title">옵션</span><span>{line.option1}</span>
                </p>
                {line.option2 && (
                  <p>
                    <span className="title">추가 옵션</span><span>{line.option2}</span>
                  </p>
                )}
                <p>
                  <span className="title">수량</span><span>{line.count}개</span>
                </p>
                <p>
                  <span className="title">상품 금액</span>
                  <span className="total">{won(line.price * line.count)}</span>
                </p>
              </Box>
            </Box>
          </Box>
          ))}

          {/* 쿠폰은 주문당 1장: 전 상품 쿠폰은 상품 금액 합계, 브랜드 쿠폰은 해당 브랜드 상품 금액에 할인 */}
          <Box
            sx={{
              mt: 3,
              "& > p": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#707070",
                fontSize: ".75rem",
              },
              "& .title": {
                fontWeight: "bold",
                color: "#333",
              },
              '& .MuiButton-root': {
                fontSize: '.75rem',
                width: '62px',
                padding: 0,
                borderRadius: 0,
              }
            }}
          >
            {selectCoupon === null ? (
              <p>
                <span className="title">쿠폰적용</span>
                <PrimaryButton onClick={() => setCouponOpen(true)}>쿠폰 선택</PrimaryButton>
              </p>
            ) : (
              <p>
                <span className="title">쿠폰적용</span>
                <span>
                  <span>{selectedCouponName} -{won(amounts.discount)}</span>
                  <Button
                    onClick={() => setSelectCoupon(null)}
                    sx={{
                      ml: 1,
                      backgroundColor: '#bdbdbd',
                      color: '#fff',
                    }}
                  >
                    취소
                  </Button>
                </span>
              </p>
            )}
          </Box>
        </Box>

        {/* 배송방법, 결제방법, 결제금액 */}
        <OrderInfomation 
          selectedCard={orderData.card}
          setSelectedCard={changeOrderDataCard}
          selectedDelivery={orderData.deliveryType}
          setSelectedDelivery={changeOrderDataDelivery}
          amounts={amounts}
        />

        <OrderTermsAgreement 
          termsAgree={orderData.termsAgree}
          changeOrderData={changeOrderDataTermsAgree}
        />
      </Box>

      <CouponSelector
        drawerOpen={couponOpen} 
        toggleDrawer={toggleDrawer} 
        lines={lines}
        selectedId={selectCoupon}
        onSelect={(id) => { setSelectCoupon(id); setCouponOpen(false) }}
      />

      <NaviWrap className="single">
        <PrimaryButton
          disabled={handleActiveOrder}
          onClick={handleCompleteOrder}
        >
          {won(amounts.final)} 결제하기
        </PrimaryButton>
      </NaviWrap>

      <BasicModal
        open={modalOpen}
      >
        <Box>
          <DaumPostcodeEmbed
            onComplete={onCompletePost}
          />
          <ButtonGroup fullWidth>
            <SecondaryButton onClick={handleClose}>닫기</SecondaryButton>
          </ButtonGroup>
        </Box>
      </BasicModal>
    </>
  )
}
export default Order