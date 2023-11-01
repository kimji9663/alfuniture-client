import React, { useState, useEffect  } from "react"
import { Box, Tabs, Tab, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { hasCouponData, getCouponData} from "../../data"
import { TabPanel, TabProps } from "../../components/Tabs"
import NoData from "../../components/NoData"
import { HalfArrowDownGray } from "../../assets/images"
import CouponCard from "./CouponCard"
import { LabelMediumGray9ypography, LabelMediumGray7Typography } from "../../components/Typography"

type CouponData = {
  imgsrc: string;
  shopName: string;
  couponName: string;
  startDate: string;
  endDate: string;
  dDay: number;
};

const formatDate = (dateString: string) => {
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);
  return `${year}. ${month}. ${day}`;
};

// D-day 계산 함수
const calculateDDay = (endDate: string): number => {
  const today = new Date();
  const end = new Date(
    `${endDate.slice(0, 4)}-${endDate.slice(4, 6)}-${endDate.slice(6, 8)}`
  );
  const timeDiff = end.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

//보유 쿠폰 D-day 추가한 데이터 초기화
const formattedHasCouponData = hasCouponData.map((item) => ({
  imgsrc: item.imgsrc,
  shopName: item.shopName,
  couponName: item.couponName,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
  dDay: calculateDDay(item.endDate),
}));

//쿠폰 빋기 D-day 추가한 데이터 초기화
const formattedGetCouponData = getCouponData.map((item) => ({
  imgsrc: item.imgsrc,
  shopName: item.shopName,
  couponName: item.couponName,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
  dDay: calculateDDay(item.endDate),
}));

const Coupon: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [hasCouponDataPanel, setHasCouponDataPanel] = useState<CouponData[]>(formattedHasCouponData);
  const [sortedHasCouponDataPanel, setSortedHasCouponDataPanel] = useState<CouponData[]>([]);
  const [isSortedHasCouponPanel, setIsSortedHasCouponPanel] = useState(false);
  const [getCouponDataPanel, setGetCouponDataPanel] = useState<CouponData[]>(formattedGetCouponData);
  const [sortedGetCouponDataPanel, setSortedGetCouponDataPanel] = useState<CouponData[]>([]);
  const [isSortedGetCouponPanel, setIsSortedGetCouponPanel] = useState(false);
  const [couponCount, setCouponCount] = useState(0);

  const handleCouponTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  useEffect(() => {
    setHasCouponDataPanel(formattedHasCouponData);
    setGetCouponDataPanel(formattedGetCouponData);
    setCouponCount(formattedGetCouponData.length);
  }, []);

  const sortData = (unsortedData: CouponData[]) => {
    const sortedDataCopy = [...unsortedData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return sortedDataCopy;
  };

  const handleCouponClick = (index: number) => {
    if (isSortedGetCouponPanel) {
      const deletedValue = sortedGetCouponDataPanel[index];
      const updatedSortedData = sortedGetCouponDataPanel.filter((item) => item !== deletedValue);
      const updatedUnsortedData = getCouponDataPanel.filter((item) => item !== deletedValue);
      setSortedGetCouponDataPanel(updatedSortedData);
      setGetCouponDataPanel(updatedUnsortedData);
      setCouponCount(updatedUnsortedData.length);
    } else {
      const deletedValue = getCouponDataPanel[index];
      const updatedData = getCouponDataPanel.filter((item) => item !== deletedValue);
      setSortedGetCouponDataPanel(updatedData);
      setGetCouponDataPanel(updatedData);
      setCouponCount(updatedData.length);
    }
  };

  const title = ["쿠폰"];
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
            onChange={handleCouponTab} 
            aria-label="main category"
          >
            <Tab label="보유 쿠폰" {...TabProps(0)} />
            <Tab label="쿠폰 받기" {...TabProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
        { sortedHasCouponDataPanel.length > 0 ||  hasCouponDataPanel.length > 0 ? (
          <Box sx={{mx:"20px", mt:6}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mb:"21px"}}>
              <LabelMediumGray9ypography>{"쿠폰 "+formattedHasCouponData.length+"개"}</LabelMediumGray9ypography>
              <Box sx={{display:"flex"}}>
                <Button sx={{color:"#333", display:"flex", borderRadius:0}} onClick={() => {
                  const sortedDataCopy = sortData(hasCouponDataPanel);
                  if (!isSortedHasCouponPanel) {
                    setSortedHasCouponDataPanel(sortedDataCopy);
                    setIsSortedHasCouponPanel(true);
                  } else {
                    setHasCouponDataPanel(sortedDataCopy.reverse());
                    setIsSortedHasCouponPanel(false);
                  }
                }}>
                  <LabelMediumGray7Typography sx={{lineHeight: "16px"}}>최신순</LabelMediumGray7Typography>
                  <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
                </Button>
              </Box>  
            </Box>
            
            {/* 쿠폰 */}
            {isSortedHasCouponPanel ? (
              <CouponCard data={sortedHasCouponDataPanel}/>
            ) : (
              <CouponCard data={hasCouponDataPanel}/>
            )}
          </Box>
          ):(
            <NoData message={"보유중인 쿠폰이 없습니다."} linkText={"홈으로 가기"} linkTo={"/"} insideTheTab={true}/>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
        { sortedGetCouponDataPanel.length > 0 ||  getCouponDataPanel.length > 0 ? (
          <Box sx={{mx:"20px", mt:6}}>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mb:"21px"}}>
            <LabelMediumGray9ypography>{"쿠폰 "+couponCount+"개"}</LabelMediumGray9ypography>
            <Box sx={{display:"flex"}}>
              <Button sx={{color:"#333", display:"flex", borderRadius:0}} onClick={() => {
                const sortedDataCopy = sortData(getCouponDataPanel);
                if (!isSortedGetCouponPanel) {
                  setSortedGetCouponDataPanel(sortedDataCopy);
                  setIsSortedGetCouponPanel(true);
                } else {
                  setGetCouponDataPanel(sortedDataCopy.reverse());
                  setIsSortedGetCouponPanel(false);
                }
              }}>
                <LabelMediumGray7Typography sx={{lineHeight: "16px"}}>최신순</LabelMediumGray7Typography>
                <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
              </Button>
            </Box>  
          </Box>
          
          {/* 쿠폰 */}
          {isSortedGetCouponPanel ? (
            <CouponCard data={sortedGetCouponDataPanel} onCouponClick={(index) => handleCouponClick(index)} />
          ) : (
            <CouponCard data={getCouponDataPanel}onCouponClick={(index) => handleCouponClick(index)} />
          )}
        </Box>
        ):(
          <NoData message={"받을 수 있는 쿠폰이 없습니다."} linkText={"홈으로 가기"} linkTo={"/"} insideTheTab={true}/>
        )}
        </TabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Coupon