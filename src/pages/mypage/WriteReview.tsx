import React, { useState, } from "react"
import { Box, Tabs, Tab, } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import WriteReviewPanel from "./WriteReviewPanel"
import ReviewList from "./ReviewList"
import { TabPanel, TabProps } from "../../components/Tabs"

const title = ["리뷰 작성"];

const WriteReview: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleReviewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <>
      <CenterTitle title={title}/>
      <Box sx={{ height: "calc(100vh - 131px)", overflow: "auto" }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: "divider",
          ".MuiTab-root.Mui-selected": { color: "#333", fontWeight:"700" },
          ".MuiTabs-indicator": { height: "1px", backgroundColor: "#333" },
        }}>
          <Tabs 
            value={tabValue}
            variant="fullWidth" 
            onChange={handleReviewTab} 
            aria-label="main category"
          >
            <Tab label="작성 가능한 리뷰" {...TabProps(0)} />
            <Tab label="작성한 리뷰" {...TabProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{p:2}}>
            <WriteReviewPanel/>
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ReviewList/>
        </TabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default WriteReview