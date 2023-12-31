import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import LeftTitleNoIcon from "../../components/title/LeftTitleNoIcon"
import ListItemType2 from "../../components/product/ListItemType2"
import NavigationBar from "../../components/NavigationBar"
import {rankingProductData, styleTypes} from "../../data/index"
import {RectCheckbox} from "../../styles/checkbox.styles"
import { handleCheckedFilterItem } from "../../components/filterUtils";
import { ScrollToTop } from "../../App"
import { TitleMediumTypography } from "../../components/Typography"

const itemList = styleTypes.map(style => ({
  id: (styleTypes.indexOf(style) + 1).toString(),
  name: style.name,
}));

const RankingList = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredStyles, setFilteredStyles] = useState(rankingProductData);

  useEffect(() => {
    setFilterItem(itemList.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredStyles = isAllChecked ? rankingProductData : rankingProductData.filter((style) => filterItem.includes(style.name));
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

  ScrollToTop();
  return (
    <>
      <LeftTitleNoIcon title={["TOP5 가구랭킹"]}/>
      <Box sx={{
        py: 3,
        px: 2,
        overflow: "auto",
        whiteSpace: "nowrap",
        ".MuiFormControl-root:first-of-type": {
          ml: 0
        },
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
      <Box sx={{px: 2, minHeight: "calc(100vh - 213.6px)"}}>
        {/* 가구리스트 */}
        {filteredStyles.length != 0 ? (
          filteredStyles.map((product: any, index: any) =>
          <ListItemType2
            key={index}
            rank={index + 1}
            imgsrc={product.imgsrc}
            shopName={product.shopName}
            modelName={product.modelName}
            productName={product.productName}
          />)
          ) : (
          <TitleMediumTypography sx={{ fontSize: 16, fontWeight: "500", letterSpacing: "-0.25px" }}>
            데이터가 없습니다
          </TitleMediumTypography>
          )}
      </Box>
      <NavigationBar/>
    </>
  )
}

export default RankingList;