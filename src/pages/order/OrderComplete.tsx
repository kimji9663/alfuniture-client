import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Divider, Typography } from "@mui/material"
import StatusScreen from "../../components/StatusScreen"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton, SecondaryButton } from "../../styles/buttons.styles"
import { productImage } from "../../store/cart"
import { OrderAmounts, won } from "../../utils/pricing"

/** 주문서 → 주문 완료로 넘기는 내용 (react-router location.state) */
export interface OrderCompleteState {
  orderNo: string
  lines: { productId: string; shopName: string; productName: string; option1: string; option2: string | null; price: number; count: number }[]
  amounts: OrderAmounts
  deliveryType: string
  couponName?: string
}

/** 주문 번호: 날짜 + 임의 6자리 (백엔드 연동 전 임시) */
export const createOrderNo = (now = new Date(), random = Math.random) => {
  const ymd = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map((n) => String(n).padStart(2, "0")).join("")
  return `${ymd}-${String(Math.floor(random() * 1_000_000)).padStart(6, "0")}`
}

const Row = ({ label, value, bold }: { label: string; value: string; bold?: boolean }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", py: 0.75, fontSize: bold ? ".9375rem" : ".8125rem", fontWeight: bold ? "bold" : "normal", color: bold ? "#333" : "#707070" }}>
    <span>{label}</span>
    <span>{value}</span>
  </Box>
)

const OrderComplete: React.FC = () => {
  const navigate = useNavigate()
  const order = useLocation().state as OrderCompleteState | null

  // 주소창으로 바로 들어오거나 새 탭에서 연 경우
  if (!order?.orderNo) {
    return (
      <StatusScreen
        standalone={false}
        title="주문 정보가 없어요"
        description="주문 내역은 마이페이지에서 확인할 수 있어요."
        actions={<PrimaryButton sx={{ height: 52 }} onClick={() => navigate("/mypage/my_order")}>주문 내역 보기</PrimaryButton>}
      />
    )
  }

  return (
    <>
      <Box sx={{ minHeight: "calc(100vh - 74px)", px: 2, pt: 7, pb: 4 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h1" sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>
            주문이 완료되었어요
          </Typography>
          <Typography sx={{ mt: 1, fontSize: ".875rem", color: "#707070" }}>
            주문번호 <strong style={{ color: "#333" }}>{order.orderNo}</strong>
          </Typography>
        </Box>

        <Box component="section" aria-labelledby="order-items" sx={{ mt: 5 }}>
          <Typography id="order-items" component="h2" sx={{ fontSize: ".9375rem", fontWeight: "bold", mb: 2 }}>
            주문 상품 {order.lines.length}개
          </Typography>
          {order.lines.map((line, i) => (
            <Box key={`${line.productId}-${i}`} sx={{ display: "flex", gap: 2, mb: 2 }}>
              <img src={productImage(line.productId)} alt={line.productName} width={72} height={72} style={{ objectFit: "cover", background: "#F7F7F7" }} />
              <Box sx={{ flex: 1, fontSize: ".8125rem", color: "#707070" }}>
                <Typography sx={{ fontSize: ".875rem", fontWeight: "bold", color: "#333" }}>{line.shopName} - {line.productName}</Typography>
                <div>{[line.option1, line.option2].filter(Boolean).join(" / ")} · {line.count}개</div>
                <div style={{ color: "#333" }}>{won(line.price * line.count)}</div>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box component="section" aria-label="결제 정보">
          <Row label="총 상품금액" value={won(order.amounts.productTotal)} />
          <Row label={order.couponName ? `쿠폰 (${order.couponName})` : "쿠폰"} value={order.amounts.discount ? `-${won(order.amounts.discount)}` : won(0)} />
          <Row label={`배송비 (${order.deliveryType})`} value={won(order.amounts.deliveryFee)} />
          <Divider sx={{ my: 1 }} />
          <Row label="총 결제금액" value={won(order.amounts.final)} bold />
        </Box>
      </Box>

      <NaviWrap className="pair">
        <SecondaryButton onClick={() => navigate("/mypage/my_order")}>주문 내역 보기</SecondaryButton>
        <PrimaryButton onClick={() => navigate("/")}>쇼핑 계속하기</PrimaryButton>
      </NaviWrap>
    </>
  )
}

export default OrderComplete
