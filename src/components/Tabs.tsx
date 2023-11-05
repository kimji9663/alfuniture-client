import React, { useState } from "react"
import { Tabs, Tab, Box } from "@mui/material"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

export function TabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const NormalTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: "divider",
        ".MuiTab-root.Mui-selected": { color: "#333" },
        ".MuiTabs-indicator": { height: "1px", backgroundColor: "#333" },
      }}>
        <Tabs 
          value={value}
          variant="fullWidth" 
          onChange={handleChange} 
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...TabProps(0)} />
          <Tab label="Item Two" {...TabProps(1)} />
          <Tab label="Item Three" {...TabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}

export default NormalTabs