import React, { useState } from "react"
import { Box, Tabs, Tab } from "@mui/material"
import NavigationBar from "../../../components/NavigationBar"
import {TabPanel, TabProps} from "../../../components/Tabs"
import ProductList from "./ProductList"
import BrandList from "./BrandList"
import TitleOneLine from "../../../components/title/TitleOneLine"

const title = ["Like"];
const Like = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
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
            onChange={handleLikeTab} 
            aria-label="main category"
          >
            <Tab label="상품" {...TabProps(0)} />
            <Tab label="브랜드" {...TabProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <ProductList />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <BrandList />
        </TabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Like