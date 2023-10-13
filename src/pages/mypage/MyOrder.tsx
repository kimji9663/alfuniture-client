import React, { useState } from "react"
import { Box, FormControl, Card, CardHeader, CardMedia, CardActions, } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { chair01, chair02, chair03, sofa04 } from "../../assets/images/product"
import { styled } from "@mui/material/styles" 
import { OutlineButton } from "../../styles/buttons.styles"

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
    padding: '16px',
    '& > button': {
      flex: '1 1 auto',
      borderRadius: 0,
      borderColor: '#dadada',
      color: '#666',
    },
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
        <Box sx={{ p: 2 }}>
          {
            MyOrderList.map((el) => (
              <>
                <OrderCard>
                  <CardHeader title={el.date} />
                  <div className="card_content">
                    <p className="state">{el.state}</p>
                    <Box className="product">
                      <CardMedia
                        component="img"
                        height="80"
                        image={el.img}
                        alt="chair"
                      />
                      <Box
                        sx={{
                          flex: '1 1 auto'
                        }}
                      >
                        <Box className="delivery">빠른배송</Box>
                        <Box className="brand">{el.brand}</Box>
                        <Box className="name">
                          {el.optionCode}<br />
                          {el.name}
                        </Box>
                      </Box>
                    </Box>
                  </div>
                  <CardActions>
                    <OutlineButton>
                      주문 상세
                    </OutlineButton>
                    <OutlineButton>
                      배송 상세
                    </OutlineButton>
                  </CardActions>
                </OrderCard>
              </>
            ))
          }
        </Box>
      </Box>
      <NavigationBar />
    </>
  )
}

export default MyOrder