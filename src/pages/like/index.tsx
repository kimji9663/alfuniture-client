import React, { useState } from "react"
import { Box, Tabs, Tab, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import ProductList from "./ProductList"
import BrandList from "./BrandList"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function likeProps(index: number) {
  return {
    id: `like-tab-${index}`,
    'aria-controls': `like-tabpanel-${index}`,
  }
}

function LikeTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`like-tabpanel-${index}`}
      aria-labelledby={`like-tab-${index}`}
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

const Like = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{}}>Like</Typography>
        </Box>

        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          '.MuiTab-root.Mui-selected': { color: '#333' },
          '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
        }}>
          <Tabs 
            value={tabValue}
            variant="fullWidth" 
            onChange={handleLikeTab} 
            aria-label="main category"
          >
            <Tab label="상품" {...likeProps(0)} />
            <Tab label="브랜드" {...likeProps(1)} />
          </Tabs>
        </Box>

        <LikeTabPanel value={tabValue} index={0}>
          <ProductList />
        </LikeTabPanel>

        <LikeTabPanel value={tabValue} index={1}>
          <BrandList />
        </LikeTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Like