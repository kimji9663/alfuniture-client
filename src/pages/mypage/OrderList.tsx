import React from 'react';
import { useNavigate } from "react-router-dom"
import { Box, CardHeader, CardMedia, CardActions, Typography } from "@mui/material"
import { OutlineButton } from "../../styles/buttons.styles"
import { MyPageOrderCard } from "../../styles/card.style"

type myOrder = {
  date: string;
  state: string;
  img: string;
  brand: string;
  optionCode: string;
  name: string;
};

type OrderListProps = {
  myOrderList: myOrder[];
  review: boolean;
};

const OrderList: React.FC<OrderListProps> = ({ myOrderList, review }) => {
  const navigate = useNavigate()
  const goToOrderDetail = () => {
    navigate("/mypage/order_detail")
  }
  const goToDeliveryDetail = () => {
    navigate("/mypage/delivery_detail")
  }
  const goToWriteReview = () => {
    navigate("/mypage/write_review")
  }
  return (
    <>
      {myOrderList.map((order, index) => (
        <Box key={index}>
          <MyPageOrderCard>
            <CardHeader title={order.date} />
            <div className="card_content">
              <p className="state">{order.state}</p>
              <Box className="product">
                <CardMedia
                  component="img"
                  height="80"
                  image={order.img}
                  alt="chair"
                />
                <Box sx={{ flex: '1 1 auto' }}>
                  <Box className="delivery">빠른배송</Box>
                  <Box className="brand">{order.brand}</Box>
                  <Box className="name">
                    {order.optionCode}
                    <br />
                    {order.name}
                  </Box>
                </Box>
              </Box>
            </div>
            <CardActions>
              <OutlineButton onClick={goToOrderDetail} sx={{p:"13px 42px"}}>
                <Typography sx={{ fontSize: "12px", lineHeight:"16px", letterSpacing: "-0.25px", color: "#666666", fontWeight: "700" }}>주문 상세</Typography>
              </OutlineButton>
              {review ? 
              (<OutlineButton onClick={goToWriteReview} sx={{p:"13px 42px"}}>
                <Typography sx={{ fontSize: "12px", lineHeight:"16px", letterSpacing: "-0.25px", color: "#666666", fontWeight: "700" }}>리뷰 쓰기</Typography>
              </OutlineButton>)
              :
              (<OutlineButton onClick={goToDeliveryDetail} sx={{p:"13px 42px"}}>
              <Typography sx={{ fontSize: "12px", lineHeight:"16px", letterSpacing: "-0.25px", color: "#666666", fontWeight: "700" }}>배송 상세</Typography>
            </OutlineButton>)}
            </CardActions>
          </MyPageOrderCard>
        </Box>
      ))}
    </>
  );
};

export default OrderList;