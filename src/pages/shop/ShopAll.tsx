import React, { useState } from "react"
import { Tabs, Tab, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ShopAllList } from "./shopAll.styles"
import TitleOneLine from "../../components/title/TitleOneLine"
import NavigationBar from "../../components/NavigationBar"
import { useNavigate } from "react-router-dom"
import { shopJson } from "../../data"
import { TabPanel, TabProps } from "../../components/Tabs"

const ShopAll = () => {
  const navigate = useNavigate()
  const [tabValue, setTabValue] = useState(0)
  const [menuOpen, setMenuOpen] = useState("")

  const handleShopTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  const handleMenuOpen = (event: React.SyntheticEvent, name: string) => {
    setMenuOpen(name)
  }

  const title = ['SHOP ALL'];
  
  const goToProductList = () => {
    navigate("/shop/product_list")
  } 

  return (
    <>
      <TitleOneLine title={title}/>
      <Box sx={{ height: "calc(100vh - 138px)", overflow: "auto" }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: "divider",
          ".MuiTab-root.Mui-selected": { color: "#333" },
          ".MuiTabs-indicator": { height: "1px", backgroundColor: "#333" },
        }}>
          <Tabs 
            value={tabValue}
            variant="fullWidth" 
            onChange={handleShopTab} 
            aria-label="main category"
          >
            <Tab label="가구" {...TabProps(0)} />
            <Tab label="브랜드" {...TabProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          {shopJson.funiture.map((el) => (
            <ShopAllList key={el.id} className={menuOpen === el.id ? "open" : ""}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el, index) => (
                    <ListItem disablePadding key={`${el}_${index}`}>
                      <ListItemButton onClick={goToProductList}>
                        <ListItemText primary={el.category} />
                        <ArrowForwardIosIcon />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ShopAllList>
          ))}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {shopJson.alphabet.map((el) => (
            <ShopAllList key={el.id} className={menuOpen === el.id ? "open" : ""}>
              <Box className="middle_category" onClick={e => handleMenuOpen(e, el.id)}>{el.category}</Box>
              <Box className="subdivision"> 
                <List>
                  {el.children?.map((el, index) => (
                    <ListItem disablePadding key={`${el}_${index}`}>
                      <ListItemButton onClick={goToProductList}>
                        <ListItemText primary={el.category} />
                        <ArrowForwardIosIcon />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ShopAllList>
          ))}
        </TabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default ShopAll