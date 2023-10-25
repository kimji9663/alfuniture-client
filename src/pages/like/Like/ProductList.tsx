import React, { useState, useEffect } from "react"
import { Box, FormControlLabel, Button } from "@mui/material"
import { IconShift } from "../../../assets/images"
import List from "./List"
import { CustomCheckbox } from "../../../styles/checkbox.styles"
import {likeProductData, styleTypes} from "../../../data/index"
import {RectCheckbox} from "../../../styles/checkbox.styles"

const ProductList = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredStyles, setFilteredStyles] = useState(likeProductData);

  const itemList = styleTypes.map(style => ({
    id: (styleTypes.indexOf(style) + 1).toString(),
    name: style.name,
  }));

  useEffect(() => {
    setFilterItem(itemList.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredStyles = likeProductData.filter((style) => filterItem.includes(style.name));
    setFilteredStyles(updatedFilteredStyles);
  }, [filterItem]);

  useEffect(() => {
    if (filterItem.length === styleTypes.length) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [filterItem]);

  const handleCheckedFilterItem = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (name === 'all') {
      if (e.currentTarget.checked) {
        setFilterItem(itemList.map(el => el.name))
      } else {
        setFilterItem([])
      }
    } else {
      if (e.currentTarget.checked) {
        setFilterItem([...filterItem, name])
      } else {
        setFilterItem(filterItem.filter(el => el !== name))
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
            checked={isAllChecked}
          />
          <label htmlFor={`check_all`}>전체</label>
        </RectCheckbox>
        {itemList.map((el) => (
          <RectCheckbox key={el.id} sx={{ ml: 1 }}>
            <input
              type="checkbox"
              id={el.name}
              onChange={e => handleCheckedFilterItem(e, el.name)}
              checked={filterItem.includes(el.name)}
            />
            <label htmlFor={`check_${el.name}`}>{el.name}</label>
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
          control={<CustomCheckbox type="checkbox" style={{marginLeft:"12px", marginRight: "8px"}}/>}
          label="품절 제외"
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
        <List data={filteredStyles} />
      </Box>
    </>
  )
}

export default ProductList
