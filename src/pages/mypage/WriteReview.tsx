import React, { useState, } from "react"
import { Box, Tabs, Tab, } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import WriteReviewPanel from "./WriteReviewPanel"
import ReviewList from "./ReviewList"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function ReviewProps(index: number) {
  return {
    id: `Review-tab-${index}`,
    'aria-controls': `Review-tabpanel-${index}`,
  }
}

function ReviewTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`Review-tabpanel-${index}`}
      aria-labelledby={`Review-tab-${index}`}
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

const title = ['리뷰 작성'];

const WriteReview: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleReviewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <>
      <CenterTitle title={title}/>
      <Box sx={{ height: 'calc(100vh - 131px)', overflow: 'auto' }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          '.MuiTab-root.Mui-selected': { color: '#333', fontWeight:"700" },
          '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
        }}>
          <Tabs 
            value={tabValue}
            variant="fullWidth" 
            onChange={handleReviewTab} 
            aria-label="main category"
          >
            <Tab label="작성 가능한 리뷰" {...ReviewProps(0)} />
            <Tab label="작성한 리뷰" {...ReviewProps(1)} />
          </Tabs>
        </Box>

        <ReviewTabPanel value={tabValue} index={0}>
          <Box sx={{p:2}}>
            <WriteReviewPanel/>
          </Box>
        </ReviewTabPanel>
        <ReviewTabPanel value={tabValue} index={1}>
          <Box sx={{p:2, pt:6}}>
            <ReviewList/>
          </Box>
        </ReviewTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default WriteReview