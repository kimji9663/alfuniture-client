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
          "category": "인테리어의자",
          "url": "/",
        },
        {
          "category": "스툴·벤치",
          "url": "/",
        },
        {
          "category": "빈백",
          "url": "/",
        },
        {
          "category": "안락의자",
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
          "category": "일반소파",
          "url": "/",
        },
        {
          "category": "리클라이너",
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
          "category": "서랍장",
          "url": "/",
        },
        {
          "category": "수납장",
          "url": "/",
        },
        {
          "category": "캐비닛",
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
          "category": "침대프레임",
          "url": "/",
        },
        {
          "category": "침대+매트리스",
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
      ]
    }
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
          "category": "BAHA",
          "url": "/",
        },
        {
          "category": "BESPOKE",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_C",
      "category": "C",
      "children": [
        {
          "category": "Cocon",
          "url": "/",
        },
        {
          "category": "Centrocasa",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_D",
      "category": "D",
      "children": [
        {
          "category": "DOD",
          "url": "/",
        },
        {
          "category": "Dodot",
          "url": "/",
        },
        {
          "category": "Dolce Vita",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_E",
      "category": "E",
      "children": [
        {
          "category": "Elo",
          "url": "/",
        },
        {
          "category": "Essa",
          "url": "/",
        },
        {
          "category": "EXfuniture",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_F",
      "category": "F",
      "children": [
        {
          "category": "Fatboy",
          "url": "/",
        },
        {
          "category": "Ff collective",
          "url": "/",
        },
        {
          "category": "Flos",
          "url": "/",
        },
        {
          "category": "FMH",
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

  useEffect(() => {
  }, [])

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
            <ShopAllList className={menuOpen === el.id ? 'open' : ''}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el) => (
                    <ListItem disablePadding>
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
            <ShopAllList className={menuOpen === el.id ? 'open' : ''}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el) => (
                    <ListItem disablePadding>
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