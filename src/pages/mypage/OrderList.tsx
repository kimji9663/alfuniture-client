import React from "react";
import { useNavigate } from "react-router-dom"
import { Box, CardHeader, CardMedia, CardActions } from "@mui/material"
import { OutlineButton } from "../../styles/buttons.styles"
import { MyPageOrderCard } from "../../styles/card.style"
import { LabelMediumBoldGray8Typography } from "../../components/Typography"
import {IconArrowForwardIcon} from "../../assets/images/"
import {LabelMediumGray7Typography} from "../../components/Typography"

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
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <p className="state">{order.state}</p>  
                {!review && order.state == "배송준비중" && (
                  <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <LabelMediumGray7Typography>주문 취소</LabelMediumGray7Typography>
                    <IconArrowForwardIcon/>
                  </Box>
                )}
                {!review && order.state == "배송완료" && (
                  <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <LabelMediumGray7Typography>교환/반품</LabelMediumGray7Typography>
                    <IconArrowForwardIcon/>
                  </Box>
                )}
              </Box>
              <Box className="product">
                <CardMedia
                  component="img"
                  height="80"
                  image={order.img}
                  alt="chair"
                />
                <Box sx={{ flex: "1 1 auto" }}>
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
                <LabelMediumBoldGray8Typography>주문 상세</LabelMediumBoldGray8Typography>
              </OutlineButton>
              {review ? 
              (<OutlineButton onClick={goToWriteReview} sx={{p:"13px 42px"}}>
                <LabelMediumBoldGray8Typography>리뷰 쓰기</LabelMediumBoldGray8Typography>
              </OutlineButton>)
              :
              (<OutlineButton onClick={goToDeliveryDetail} sx={{p:"13px 42px"}}>
              <LabelMediumBoldGray8Typography>배송 상세</LabelMediumBoldGray8Typography>
            </OutlineButton>)}
            </CardActions>
          </MyPageOrderCard>
        </Box>
      ))}
    </>
  );
};

export default OrderList;
