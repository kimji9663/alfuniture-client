import React, { useState, useEffect } from "react"
import { Box, FormControlLabel, Button } from "@mui/material"
import { IconShift } from "../../../assets/images"
import List from "./List"
import { CustomCheckbox } from "../../../styles/checkbox.styles"
import {likeProductData, styleTypes} from "../../../data/index"
import {RectCheckbox} from "../../../styles/checkbox.styles"
import { handleCheckedFilterItem } from "../../../components/filterUtils";

const itemList = styleTypes.map(style => ({
  id: (styleTypes.indexOf(style) + 1).toString(),
  name: style.name,
}));

const ProductList = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredStyles, setFilteredStyles] = useState(likeProductData);

  useEffect(() => {
    setFilterItem(itemList.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredStyles = isAllChecked ? likeProductData : likeProductData.filter((style) => filterItem.includes(style.name));
    setFilteredStyles(updatedFilteredStyles);
    
    if (filterItem.length === styleTypes.length) {
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
      <Box sx={{
        p: 2,
        overflow: "auto",
        whiteSpace: "nowrap",
        ".MuiFormControl-root:first-of-type": {
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
      <Box
        sx={{
          mt: 3,
          mx: 2,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #DADADA",
        }}
      >
        <FormControlLabel
          control={<CustomCheckbox type="checkbox" style={{marginLeft:"12px", marginRight: "8px"}}/>}
          label="품절 제외"
        />
        <Button
          sx={{
            color: "#333",
            fontSize: ".875rem",
            "& > svg": {
              ml: 1 / 2,
              verticalAlign: "middle"
            }
          }}
        >
          최근 찜한 순
          <IconShift />
        </Button>
      </Box>
      <Box>
        {isAllChecked ? (
          <List data={likeProductData} />
        ) : (
          
          <>
            {filteredStyles.length != 0 ? 
            <List data={filteredStyles} /> 
            : 
            <Box>상품준비중</Box>
            }
          </>
        ) }
      </Box>
    </>
  )
}

export default ProductList
