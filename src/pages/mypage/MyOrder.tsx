import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { RectCheckbox } from "../../styles/checkbox.styles"
import OrderList from "./OrderList"
import { deliveryStatusFilterData, myOrderList } from "../../data"
import { handleCheckedFilterItem } from "../../components/filterUtils";

const centerTitle = ['주문배송']

<<<<<<< HEAD
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

const MyOrderList = [
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

=======
>>>>>>> d4ada5d25eb487ebef3e0e884c56ca58afc3a9bb
const MyOrder = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredOrders, setFilteredOrders] = useState(myOrderList);

  useEffect(() => {
    setFilterItem(deliveryStatusFilterData.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredOrders = myOrderList.filter((order) => {
      if (filterItem.length !== 0 && filterItem.includes("취소/교환/반품")) {
        return order.state === "취소" || order.state === "교환" || order.state === "반품" || filterItem.includes(order.state);
      } else {
        return filterItem.includes(order.state);
      }
    });
    setFilteredOrders(updatedFilteredOrders);
  }, [filterItem]);

  useEffect(() => {
    if (filterItem.length === deliveryStatusFilterData.length) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [filterItem]);

  const handleCheckFilterItem  = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    handleCheckedFilterItem(filterItem, setFilterItem, deliveryStatusFilterData, e, name);
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
            onChange={e => handleCheckFilterItem(e, 'all')}
            checked={isAllChecked}
          />
          <label htmlFor={`check_all`}>전체</label>
        </RectCheckbox>
        {deliveryStatusFilterData.map((el) => (
          <RectCheckbox key={el.name} sx={{ ml: 1 }}>
            <input
              type="checkbox"
              id={el.name}
              onChange={e => handleCheckFilterItem(e, el.name)}
              checked={filterItem.includes(el.name)}
            />
            <label htmlFor={el.name}>{el.name}</label>
          </RectCheckbox>
          ))}
        </Box>
        <Box sx={{ p: 2, pt: 3 }}>
          {filteredOrders.length == 0 ? ("데이터가 없습니다.") : (<OrderList myOrderList={filteredOrders} review={false} />)}
          
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}

export default MyOrder
