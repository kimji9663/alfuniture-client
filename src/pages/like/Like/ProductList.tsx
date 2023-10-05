import React, { useState } from "react"
import { Box, FormControl, FormControlLabel, Checkbox, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { IconShift } from "../../../assets/images"
import List from "./List"
import { chair03, sofa01, sofa02, sofa03 } from "../../assets/images/product"

const RectCheckbox = styled(FormControl)(({ }) => ({
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

const itemList = [
  {
    id: 'sofa',
    name: '소파',
  },
  {
    id: 'bed',
    name: '침대',
  },
  {
    id: 'desk',
    name: '책상',
  },
  {
    id: 'table',
    name: '테이블',
  },
  {
    id: 'chair',
    name: '의자',
  },
  {
    id: 'lights',
    name: '조명',
  },
  {
    id: 'kids',
    name: '키즈',
  },
  {
    id: 'closet',
    name: '수납장',
  },
  {
    id: 'home_deco',
    name: '홈데코',
  }
]

export const testData = [
  {
    id: 0,
    imgsrc: chair03,
    like: true,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-0152',
    productName: '릴렉스 체어 (3colors)',
    price: 4834000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
  {
    id: 1,
    imgsrc: sofa02,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[22s] HRD-210',
    productName: '1인 모던 쇼파 ',
    price: 6790000,
    colors: ['#864000']
  },
  {
    id: 2,
    imgsrc: sofa03,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-251',
    productName: '기획전 시티 쇼파',
    price: 2230000,
    colors: ['#CBC6C3']
  },
  {
    id: 3,
    imgsrc: sofa01,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-123',
    productName: '올드 가죽쇼파',
    price: 1230000,
    colors: ['#A55555']
  },
]

const ProductList = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])

  const handleCheckedFilterItem = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === 'all') {
      if (e.currentTarget.checked) {
        setFilterItem(itemList.map(el => el.id))
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
        {itemList.map((el) => (
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
      <Box
        sx={{
          mt: 3,
          mx: 2,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #DADADA',
        }}
      >
        <FormControlLabel
          control={<Checkbox color="default" sx={{ p: '0px 4px 0px 8px' }} />}
          label="품절 제외"
          sx={{
            '& > .MuiTypography-root': {
              color: '#333',
              fontSize: '.875rem'
            }
          }}
        />
        <Button
          sx={{
            color: '#333',
            fontSize: '.875rem',
            '& > svg': {
              ml: 1 / 2,
              verticalAlign: 'middle'
            }
          }}
        >
          최근 찜한 순
          <IconShift />
        </Button>
      </Box>
      <Box>
        <List data={testData} />
      </Box>
    </>
  )
}

export default ProductList
