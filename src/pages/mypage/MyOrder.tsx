import React, { useState } from "react"
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { RectCheckbox } from "../../styles/checkbox.styles"
import OrderList from "./OrderList"
import { deliveryStatusFilterData, myOrderList } from "../../data"

const centerTitle = ['주문배송']

const MyOrder = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])

  const handleCheckedFilterItem = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === 'all') {
      if (e.currentTarget.checked) {
        setFilterItem(deliveryStatusFilterData.map(el => el.id))
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
          {deliveryStatusFilterData.map((el) => (
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
