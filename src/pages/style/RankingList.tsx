import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import LeftTitleNoIcon from '../../components/title/LeftTitleNoIcon'
import { rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, onerain01, onerain02 } from "../../assets/images/product"
import { Link } from "react-router-dom";
import ListItemType2 from "../../components/product/ListItemType2"
import { styled } from "@mui/material/styles"
import NavigationBar from "../../components/NavigationBar"


export const rankingData = [
  {
    id: 1,
    imgsrc: rankingItem01,
  },
  {
    id: 2,
    imgsrc: rankingItem02,
  },
  {
    id: 3,
    imgsrc: rankingItem03,
  },
  {
    id: 4,
    imgsrc: rankingItem04,
  },
  {
    id: 5,
    imgsrc: rankingItem05,
  }, 
]

export const brandItemData = [
  {
    id: 0,
    rank: 1,
    imgsrc: rankingItem01,
    shopName: 'ONERAIN',
    modelName: '[23Series] OR-102',
    productName: '원레인 우든 테이블',
  },
  {
    id: 1,
    rank: 2,
    imgsrc: rankingItem02,
    shopName: 'ONERAIN',
    modelName: '[22Series] OR-210',
    productName: '원레인 그랑프리 체어',
  },
  {
    id: 2,
    rank: 3,
    imgsrc: rankingItem03,
    shopName: 'ONERAIN',
    modelName: '[23Series] OR-110',
    productName: '원레인 우든 테이블',
  },
  {
    id: 3,
    rank: 4,
    imgsrc: rankingItem04,
    shopName: 'ONERAIN',
    modelName: '[22Series] OR-214',
    productName: '원레인 커러드 체어',
  },
  {
    id: 4,
    rank: 5,
    imgsrc: rankingItem05,
    shopName: 'ONERAIN',
    modelName: '[23Series] OR-217',
    productName: '원레인 럭커드 화이트 체어',
  },
]

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

const RectCheckbox = styled(FormControl)(({ }) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '6px 16px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
    color: '#999999',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

const RankingList = () => {

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
      <LeftTitleNoIcon title={["TOP5 가구랭킹"]}/>
      <Box sx={{
        py: 3,
        px: 2,
        overflow: 'auto',
        whiteSpace: 'nowrap',
        '.MuiFormControl-root:first-of-type': {
          ml: 0
        },
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
      <Box sx={{px: 2, minHeight: 'calc(100vh - 213.6px)'}}>
        {/* 가구리스트 */}
        {brandItemData.map((product: any, index) =>
        <ListItemType2
          key={index}
          rank={product.rank}
          imgsrc={product.imgsrc}
          shopName={product.shopName}
          modelName={product.modelName}
          productName={product.productName}
        />
      )}
      </Box>
      <NavigationBar/>
    </>
  )
}

export default RankingList;