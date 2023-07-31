import React, { useState } from "react"
import { Tabs, Tab, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ShopAllList } from "./shopAll.styles"
import TitleOneLine from "../../components/titleOneLine"
import NavigationBar from "../../components/NavigationBar"

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
          <ShopAllList className={menuOpen === "menu_table" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_table")}>테이블</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="다이닝테이블" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="데스크" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="사이드테이블" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="소반" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="소파테이블" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_chair" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_chair")}>의자</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="인테리어의자" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="스툴·벤치" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="빈백" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="안락의자" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_sofa" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_sofa")}>쇼파</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="일반소파" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="리클라이너" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_closet" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_closet")}>수납장</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="서랍장" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="수납장" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="캐비닛" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_bed" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_bed")}>침대</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="침대프레임" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="침대+매트리스" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_lights" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_lights")}>조명</Box>
            <Box className="subdivision"> 
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="전체" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
        </ShopTabPanel>

        <ShopTabPanel value={tabValue} index={1}>
          <ShopAllList className={menuOpen === "menu_A" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_A")}>A</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Aarikka" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Adea" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Adi" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Aerobie" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="AGO" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_B" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_B")}>B</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="BAHA" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="BESPOKE" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_C" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_C")}>C</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Cocon" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Centrocasa" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_D" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_D")}>D</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="DOD" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Dodot" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Dolce Vita" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_E" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_E")}>E</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Elo" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Essa" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="EXfuniture" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_F" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_F")}>F</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Fatboy" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Ff collective" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Flos" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="FMH" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
          <ShopAllList className={menuOpen === "menu_G" ? 'open' : ''}>
            <Box className="middle_category" onClick={e => handleMenuOpen(e, "menu_G")}>G</Box>
            <Box className="subdivision">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Gakyu" />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </List>  
            </Box>
          </ShopAllList>
        </ShopTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default ShopAll