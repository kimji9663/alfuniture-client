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
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <TitleOneLine />
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        '.MuiTab-root.Mui-selected': { color: '#333' },
        '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
      }}>
        <Tabs 
          value={value}
          variant="fullWidth" 
          onChange={handleChange} 
          aria-label="main category"
        >
          <Tab label="가구" {...shopProps(0)} />
          <Tab label="브랜드" {...shopProps(1)} />
        </Tabs>
      </Box>
      <ShopTabPanel value={value} index={0}>
        <ShopAllList>
          <Box className="middle_category">테이블</Box>
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
        <ShopAllList>
          <ListItemButton sx={{ py: 2, color: '#878787' }}>
            <ListItemText primary="의자" />
          </ListItemButton>
        </ShopAllList>
        <ShopAllList>
          <ListItemButton sx={{ py: 2, color: '#878787' }}>
            <ListItemText primary="쇼파" />
          </ListItemButton>
        </ShopAllList>
      </ShopTabPanel>
      <ShopTabPanel value={value} index={1}>
        브랜드
      </ShopTabPanel>
      <NavigationBar />
    </>
  )
}
export default ShopAll