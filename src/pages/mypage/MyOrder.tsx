import React, { useState } from "react"
import { Box, FormControl } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { chair01, chair02, chair03, sofa04 } from "../../assets/images/product"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import OrderList from "./OrderList"

const RectCheckbox = styled(FormControl)(() => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '3px 12px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

const centerTitle = ['주문배송']

const filterList = [
  {
    id: 'waiting',
    name: '배송준비중',
  },
  {
    id: 'shipping',
    name: '배송중',
  },
  {
    id: 'completed',
    name: '배송완료',
  },
  {
    id: 'cancel',
    name: '취소/교환/반품',
  },
]

const myOrderList = [
  {
    date: '2023.02.23',
    state: '배송준비중',
    img: chair03,
    brand: 'OneRain',
    optionCode: '[23s] OR-045',
    name: '2인 릴렉스 체어',
  },
  {
    date: '2022.03.13',
    state: '배송완료',
    img: chair02,
    brand: 'HC ART',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
  },
  {
    date: '2022.03.13',
    state: '취소',
    img: sofa04,
    brand: 'HC ART',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
  },
  {
    date: '2022.03.13',
    state: '반품',
    img: sofa04,
    brand: 'HC ART',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
  },
]

const MyOrder = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])

  const handleCheckedFilterItem = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === 'all') {
      if (e.currentTarget.checked) {
        setFilterItem(filterList.map(el => el.id))
      } else {
        setFilterItem([])
      }
    } else {
      if (e.currentTarget.checked) {
        setFilterItem([...filterItem, id])
      } else {
        setFilterItem(filterItem.filter(el => el !== id))
      }
    }
  }

  const navigate = useNavigate()
  
  const goToOrderDetail = () => {
    navigate("/mypage/order_detail")
  }
  const goToDeliveryDetail = () => {
    navigate("/mypage/delivery_detail")
  }

  return (
    <>
      <CenterTitle title={centerTitle}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{
          p: 2,
          overflow: 'auto',
          whiteSpace: 'nowrap',
          '.MuiFormControl-root:first-of-type': {
            ml: 0
          }
        }}
        >
          <RectCheckbox key={`all`} sx={{ ml: 1 }}>
            <input
              type="checkbox"
              id={`check_all`}
              onChange={e => handleCheckedFilterItem(e, 'all')}
            />
            <label htmlFor={`check_all`}>전체</label>
          </RectCheckbox>
          {filterList.map((el) => (
            <RectCheckbox key={el.id} sx={{ ml: 1 }}>
              <input
                type="checkbox"
                id={`check_${el.id}`}
                onChange={e => handleCheckedFilterItem(e, el.id)}
                checked={filterItem.includes(el.id)}
              />
              <label htmlFor={`check_${el.id}`}>{el.name}</label>
            </RectCheckbox>
          ))}
        </Box>
        <Box sx={{ p: 2, pt: 3 }}>
          <OrderList myOrderList={myOrderList} review={false} />
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}

export default MyOrder
