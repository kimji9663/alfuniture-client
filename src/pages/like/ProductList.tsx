import React, { useState } from "react"
import { Box, FormControlLabel, Checkbox, Button } from "@mui/material"
import { RectCheckbox } from "./index.styles"
import { IconShift } from "../../assets/images"

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

const BrandList = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])

  const handleCheckedFilterItem = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
    if(id === 'all') {
      if(e.currentTarget.checked) {
        setFilterItem(itemList.map(el => el.id))
      } else {
        setFilterItem([])
      }
    } else {
      if(e.currentTarget.checked) {
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
              ml: 1/2,
              verticalAlign: 'middle' 
            } 
          }}
        >
          최근 찜한 순
          <IconShift />
        </Button>
      </Box>
    </>
  )
}

export default BrandList
