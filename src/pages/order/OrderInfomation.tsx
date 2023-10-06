import { Box, Divider } from "@mui/material"
import {OrderTitle, AccordionMenu } from "./order.styles"

const OrderInfomation = () => {
  return (
    <>
      <Box sx={{ px: 2, py: 1 }}>
        <AccordionMenu fullWidth>
          <OrderTitle>사용가능 쿠폰조회</OrderTitle>
          <span>쿠폰 선택</span>
        </AccordionMenu>
        <Divider />
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <AccordionMenu fullWidth>
          <OrderTitle>배송방법 선택</OrderTitle>
          <span>일반배송</span>            
        </AccordionMenu>
        <Divider />
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <AccordionMenu fullWidth>
          <OrderTitle>결제방법</OrderTitle>
          <span>신용카드</span>            
        </AccordionMenu>
        <Divider />
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <AccordionMenu fullWidth>
          <OrderTitle>결제금액</OrderTitle>
          <span className="total_amount">1,435,050원</span>            
        </AccordionMenu>
        <Divider />
      </Box>
    </>
  )
}

export default OrderInfomation