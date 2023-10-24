import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import { Box, FormControl, Card, CardHeader, CardMedia, CardActions, Typography } from "@mui/material"
import { styled } from "@mui/material/styles" 
import { OutlineButton } from "../../styles/buttons.styles"

const OrderCard = styled(Card)(() => ({
  marginBottom: '16px',
  borderRadius: 0,
  border: '1px solid #dadada', 
  boxShadow: 'none', 
  '& .MuiCardHeader-root': {
    padding: '8px 16px',
    borderBottom: '1px solid #dadada',
    '& .MuiCardHeader-title': {
      color: '#666',
      fontSize: '.875rem',
    },
  },
  '& .MuiCardMedia-root': {
    marginRight: '24px',
    flex: '0 0 100px',
  },
  '& .card_content': {
    padding: '16px',
  },
  '& .card_content .state': {
    fontSize: '.75rem', 
    color: '#333', 
    fontWeight: 'bold',
  },
  '& .card_content .product': {
    display: 'flex',
    marginTop: '16px', 
    '& .delivery': {
      fontSize: '.6rem', 
      fontWeight: 'bold',
    },
    '& .brand': {
      marginTop: '8px', 
      fontSize: '.875rem', 
      fontWeight: 'bold',
    },
    '& .name': {
      fontSize: '.75rem',
    },
  },
  '& .MuiCardActions-root': {
    padding: '8px 16px 24px',
    '& > button': {
      flex: '1 1 auto',
      borderRadius: 0,
      borderColor: '#dadada',
      color: '#666',
    },
  },
}))

// MyOrder 데이터의 타입 정의
type myOrder = {
  date: string;
  state: string;
  img: string;
  brand: string;
  optionCode: string;
  name: string;
};

// OrderCard 컴포넌트를 정의
const MyOrderCard: React.FC<myOrder> = (props) => {
  const navigate = useNavigate()
  
  const goToOrderDetail = () => {
    navigate("/mypage/order_detail")
  }
  const goToDeliveryDetail = () => {
    navigate("/mypage/delivery_detail")
  }
  return (
    <OrderCard>
      <CardHeader title={props.date} />
      <div className="card_content">
        <p className="state">{props.state}</p>
        <Box className="product">
          <CardMedia
            component="img"
            height="80"
            image={props.img}
            alt="chair"
          />
          <Box sx={{ flex: '1 1 auto' }}>
            <Box className="delivery">빠른배송</Box>
            <Box className="brand">{props.brand}</Box>
            <Box className="name">
              {props.optionCode}
              <br />
              {props.name}
            </Box>
          </Box>
        </Box>
      </div>
      <CardActions>
        <OutlineButton onClick={goToOrderDetail} sx={{p:"13px 42px"}}>
          <Typography sx={{ fontSize: "12px", lineHeight:"16px", letterSpacing: "-0.25px", color: "#666666", fontWeight: "700" }}>주문 상세</Typography>
        </OutlineButton>
        <OutlineButton onClick={goToDeliveryDetail} sx={{p:"13px 42px"}}>
          <Typography sx={{ fontSize: "12px", lineHeight:"16px", letterSpacing: "-0.25px", color: "#666666", fontWeight: "700" }}>배송 상세</Typography>
        </OutlineButton>
      </CardActions>
    </OrderCard>
  );
};

// OrderList 컴포넌트를 정의
type OrderListProps = {
  myOrderList: myOrder[];
};

const OrderList: React.FC<OrderListProps> = ({ myOrderList }) => {
  return (
    <>
      {myOrderList.map((order, index) => (
        <Box key={index}>
          <MyOrderCard
            date={order.date}
            state={order.state}
            img={order.img}
            brand={order.brand}
            optionCode={order.optionCode}
            name={order.name}
          />
        </Box>
      ))}
    </>
  );
};

export default OrderList;
