import React, { useEffect, useState } from "react"
import { Tabs, Tab, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ShopAllList } from "./shopAll.styles"
import TitleOneLine from "../../components/titleOneLine"
import NavigationBar from "../../components/NavigationBar"

const shopJson = {
  "funiture":[
    {
      "id": "menu_table",
      "category": "테이블",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "다이닝테이블",
          "url": "/",
        },
        {
          "category": "데스크",
          "url": "/",
        },
        {
          "category": "사이드테이블",
          "url": "/",
        },
        {
          "category": "소반",
          "url": "/",
        },
        {
          "category": "소파테이블",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_chair",
      "category": "의자",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "다이닝체어",
          "url": "/",
        },
        {
          "category": "라운지체어",
          "url": "/",
        },
        {
          "category": "스툴",
          "url": "/",
        },
        {
          "category": "바체어",
          "url": "/",
        },
        {
          "category": "벤치",
          "url": "/",
        },
        {
          "category": "펫체어",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_sofa",
      "category": "소파",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "1인용",
          "url": "/",
        },
        {
          "category": "2-3인용",
          "url": "/",
        },
        {
          "category": "4인용",
          "url": "/",
        },
        {
          "category": "모듈",
          "url": "/",
        },
        {
          "category": "풋스툴",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_closet",
      "category": "수납장",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "낮은거실장",
          "url": "/",
        },
        {
          "category": "책장",
          "url": "/",
        },
        {
          "category": "서랍장",
          "url": "/",
        },
        {
          "category": "장식장",
          "url": "/",
        },
        {
          "category": "화장대",
          "url": "/",
        },
        {
          "category": "옷장",
          "url": "/",
        },
        {
          "category": "협탁",
          "url": "/",
        },
        {
          "category": "트롤리",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_bed",
      "category": "침대",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "침대모듈",
          "url": "/",
        },
        {
          "category": "s",
          "url": "/",
        },
        {
          "category": "ss",
          "url": "/",
        },
        {
          "category": "D",
          "url": "/",
        },
        {
          "category": "Q",
          "url": "/",
        },
        {
          "category": "K",
          "url": "/",
        },
        {
          "category": "LK-",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_lights",
      "category": "조명",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "펜던트",
          "url": "/",
        },
        {
          "category": "벽조명",
          "url": "/",
        },
        {
          "category": "스탠드",
          "url": "/",
        },
        {
          "category": "테이블조명",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_homedeco",
      "category": "홈데코",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "인테리어소품",
          "url": "/",
        },
        {
          "category": "월데코",
          "url": "/",
        },
        {
          "category": "다이닝",
          "url": "/",
        },
        {
          "category": "거울",
          "url": "/",
        },
        {
          "category": "행거",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_kids",
      "category": "키즈",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "옷,서랍장",
          "url": "/",
        },
        {
          "category": "책,서랍장",
          "url": "/",
        },
        {
          "category": "침대",
          "url": "/",
        },
      ]
    },
  ],
  "alphabet": [
    {
      "id": "menu_A",
      "category": "A",
      "children": [
        {
          "category": "Aarikka",
          "url": "/",
        },
        {
          "category": "Adea",
          "url": "/",
        },
        {
          "category": "Adi",
          "url": "/",
        },
        {
          "category": "Aerobie",
          "url": "/",
        },
        {
          "category": "AGO",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_B",
      "category": "B",
      "children": [
        {
          "category": "B-LINE",
          "url": "/",
        },
        {
          "category": "B&B Italia",
          "url": "/",
        },
        {
          "category": "Bacsac",
          "url": "/",
        },
        {
          "category": "BALERI ITALIA",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_C",
      "category": "C",
      "children": [
        {
          "category": "Caccaro",
          "url": "/",
        },
        {
          "category": "CACOON",
          "url": "/",
        },
        {
          "category": "calligaris",
          "url": "/",
        },
        {
          "category": "Cane-Line",
          "url": "/",
        },
        {
          "category": "cappellini",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_D",
      "category": "D",
      "children": [
        {
          "category": "Danese Milano",
          "url": "/",
        },
        {
          "category": "DANTE",
          "url": "/",
        },
        {
          "category": "davide groppi",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_E",
      "category": "E",
      "children": [
        {
          "category": "EBB&FLOW",
          "url": "/",
        },
        {
          "category": "EcoSmart Fire",
          "url": "/",
        },
        {
          "category": "edra",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_F",
      "category": "F",
      "children": [
        {
          "category": "Fabbian",
          "url": "/",
        },
        {
          "category": "Fabula Living",
          "url": "/",
        },
        {
          "category": "Fast",
          "url": "/",
        },
        {
          "category": "Fatboy",
          "url": "/",
        },
      ]
    },
  ]
}


interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function shopProps(index: number) {
  return {
    id: `shop-tab-${index}`,
    'aria-controls': `shop-tabpanel-${index}`,
  }
}

function ShopTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`shop-tabpanel-${index}`}
      aria-labelledby={`shop-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

const ShopAll = () => {
  const [tabValue, setTabValue] = useState(0)
  const [menuOpen, setMenuOpen] = useState('')

  const handleShopTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  const handleMenuOpen = (event: React.SyntheticEvent, name: string) => {
    setMenuOpen(name)
  }

  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <TitleOneLine />
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          '.MuiTab-root.Mui-selected': { color: '#333' },
          '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
        }}>
          <Tabs 
            value={tabValue}
            variant="fullWidth" 
            onChange={handleShopTab} 
            aria-label="main category"
          >
            <Tab label="가구" {...shopProps(0)} />
            <Tab label="브랜드" {...shopProps(1)} />
          </Tabs>
        </Box>
        <ShopTabPanel value={tabValue} index={0}>
          {shopJson.funiture.map((el) => (
            <ShopAllList key={el.id} className={menuOpen === el.id ? 'open' : ''}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el, index) => (
                    <ListItem disablePadding key={`${el}_${index}`}>
                      <ListItemButton>
                        <ListItemText primary={el.category} />
                        <ArrowForwardIosIcon />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ShopAllList>
          ))}
        </ShopTabPanel>

        <ShopTabPanel value={tabValue} index={1}>
          {shopJson.alphabet.map((el) => (
            <ShopAllList key={el.id} className={menuOpen === el.id ? 'open' : ''}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el, index) => (
                    <ListItem disablePadding key={`${el}_${index}`}>
                      <ListItemButton>
                        <ListItemText primary={el.category} />
                        <ArrowForwardIosIcon />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ShopAllList>
          ))}
        </ShopTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default ShopAll