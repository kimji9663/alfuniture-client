import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { Link } from "react-router-dom";
import { RectCheckbox } from "../../styles/checkbox.styles";
import { styleTabPanelStyleTypes } from "../../data";
import { handleCheckedFilterItem } from "../../components/filterUtils";
import { TitleSmallBoldTypography, TitleSmallTypography } from "../../components/Typography";

const itemList = styleTabPanelStyleTypes.map(style => ({
  id: (styleTabPanelStyleTypes.indexOf(style) + 1).toString(),
  name: style.name,
}));

const StyleTabPanel = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [filteredStyles, setFilteredStyles] = useState(styleTabPanelStyleTypes);

  const evenIndexStyles = filteredStyles.filter((_, index) => index % 2 === 0);
  const oddIndexStyles = filteredStyles.filter((_, index) => index % 2 !== 0);

  useEffect(() => {
    setFilterItem(itemList.map(el => el.name));
  }, []);

  useEffect(() => {
    const updatedFilteredStyles = isAllChecked ? styleTabPanelStyleTypes : styleTabPanelStyleTypes.filter((style) => filterItem.includes(style.name));
    setFilteredStyles(updatedFilteredStyles);
    
    if (filterItem.length === styleTabPanelStyleTypes.length) {
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
        pl: 2,
        pt: 5,
        pb: 3,
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
          borderBottom: "1px solid #DADADA",
        }}
      >
        <Box sx={{ mr: 1, width: "calc(50vw - 20px)"}}>
          {/* 반복1 */}
          {evenIndexStyles.map((style, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: evenIndexStyles.length >= 2 ? (index === evenIndexStyles.length - 1 ? "200px" : "250px") : "250px",
                mb: 1
              }}
            >
              <Link to="/style/home_styling">
                <img
                  src={style.avatar}
                  alt={style.name}
                  style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
                  }}
                />
                <Box sx={{ ml: 2, mb: 2, position: "absolute", bottom: 0, left: 0, color: "white" }}>
                  <TitleSmallBoldTypography sx={{ mb: "4px" }}>{style.discription}</TitleSmallBoldTypography>
                  <TitleSmallTypography>{"# "+style.name}</TitleSmallTypography>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: "calc(50vw - 20px)"}}>
          {/* 반복2 */}
          {oddIndexStyles.map((style, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: index === 0 ? "200px" : "250px", 
                mb: 1
              }}
            >
              <Link to="/style/home_styling">
                <img
                  src={style.avatar}
                  alt={style.name}
                  style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
                  }}
                />
                <Box sx={{ ml: 2, mb: 2, position: "absolute", bottom: 0, left: 0, color: "#FAFAFA" }}>
                  <TitleSmallBoldTypography sx={{ mb: "4px" }}>{style.discription}</TitleSmallBoldTypography>
                  <TitleSmallTypography>{"# "+style.name}</TitleSmallTypography>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default StyleTabPanel
