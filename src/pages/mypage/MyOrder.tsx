import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { RectCheckbox } from "../../styles/checkbox.styles"
import OrderList from "./OrderList"
import { deliveryStatusFilterData, myOrderList } from "../../data"
import { handleCheckedFilterItem } from "../../components/filterUtils";

const centerTitle = ['주문배송']

const itemList = deliveryStatusFilterData.map(style => ({
  id: (deliveryStatusFilterData.indexOf(style) + 1).toString(),
  name: style.name,
}));

const MyOrder = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredOrders, setFilteredOrders] = useState(myOrderList);

  useEffect(() => {
    setFilterItem(itemList.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredStyles = isAllChecked ? 
    myOrderList
    : 
    myOrderList.filter((order) => {
      if (filterItem.length !== 0 && filterItem.includes("취소/교환/반품")) {
        return order.state === "취소" || order.state === "교환" || order.state === "반품" || filterItem.includes(order.state);
      } else {
        return filterItem.includes(order.state);
      }
    });
        
    setFilteredOrders(updatedFilteredStyles);
    
    if (filterItem.length === deliveryStatusFilterData.length) {
      setIsAllChecked(true);
      setFilterItem([]);
    } else if (filterItem.length === 0) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [filterItem, isAllChecked]);

  const handleCheckFilterItem  = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    handleCheckedFilterItem(filterItem, setFilterItem, itemList, e, name);
  }

  const handleToggleIsAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAllChecked(true)
    setFilterItem(itemList.map((el) => el.name));
  };

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
            onChange={e => handleToggleIsAllChecked(e)}
            checked={isAllChecked}
          />
          <label htmlFor={`check_all`}>전체</label>
        </RectCheckbox>
        {isAllChecked ? (
          <>
            {itemList.map((el) => (
              <RectCheckbox key={el.name} sx={{ ml: 1 }}>
                <input
                  type="checkbox"
                  id={el.name}
                  onChange={e => handleCheckFilterItem(e, el.name)}
                  checked={false}
                />
                <label htmlFor={el.name}>{el.name}</label>
              </RectCheckbox>
            ))}
          </>
          ) : (
          <>
            {itemList.map((el) => (
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
          </>
        )}
        </Box>
        <Box sx={{ p: 2, pt: 5 }}>
          {filteredOrders.length == 0 ? ("데이터가 없습니다.") : (<OrderList myOrderList={filteredOrders} review={false} />)}
          
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}

export default MyOrder
