import React, { useState, useEffect  } from "react"
import { Box, Tabs, Tab, Typography, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { HalfArrowDownGray } from "../../assets/images"
import { onerain_coupon03 } from "../../assets/images/product"
import CouponCard from "./CouponCard"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const data = [
  {
    imgsrc: onerain_coupon03,
    shopName: 'Aerobiey',
    couponName: '에어로우뷔 브랜드 10% 쿠폰',
    startDate: '20230925',
    endDate: '20231120',
  },
  {
    imgsrc: onerain_coupon03,
    shopName: 'James Lee',
    couponName: '제임스 리  브랜드 10% 쿠폰',
    startDate: '20230920',
    endDate: '20231115',
  },
  {
    imgsrc: onerain_coupon03,
    shopName: 'One rain',
    couponName: '원레인  브랜드 10% 쿠폰',
    startDate: '20230922',
    endDate: '20231128',
  },
]

const data2 = [
  {
    imgsrc: onerain_coupon03,
    shopName: 'James Lee',
    couponName: '제임스 리  브랜드 10% 쿠폰',
    startDate: '20230920',
    endDate: '20231118',
  },
  {
    imgsrc: onerain_coupon03,
    shopName: 'Aerobiey',
    couponName: '에어로우뷔 브랜드 10% 쿠폰',
    startDate: '20230925',
    endDate: '20231118',
  },
  {
    imgsrc: onerain_coupon03,
    shopName: 'One rain',
    couponName: '원레인  브랜드 10% 쿠폰',
    startDate: '20230822',
    endDate: '20231128',
  },
]

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

const formattedData = data.map((item) => ({
  imgsrc: item.imgsrc,
  shopName: item.shopName,
  couponName: item.couponName,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
  dDay: calculateDDay(item.endDate),
}));

const formattedData2 = data2.map((item) => ({
  imgsrc: item.imgsrc,
  shopName: item.shopName,
  couponName: item.couponName,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
  dDay: calculateDDay(item.endDate),
}));

type CouponData = {
  imgsrc: string;
  shopName: string;
  couponName: string;
  startDate: string;
  endDate: string;
  dDay: number;
};

function couponProps(index: number) {
  return {
    id: `coupon-tab-${index}`,
    'aria-controls': `coupon-tabpanel-${index}`,
  }
}

function CouponTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`coupon-tabpanel-${index}`}
      aria-labelledby={`coupon-tab-${index}`}
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

const title = ['쿠폰'];

const Coupon: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [dataPanel1, setDataPanel1] = useState<CouponData[]>(formattedData);
  const [sortedDataPanel1, setSortedDataPanel1] = useState<CouponData[]>([]);
  const [isSortedPanel1, setIsSortedPanel1] = useState(false);
  const [dataPanel2, setDataPanel2] = useState<CouponData[]>(formattedData2);
  const [sortedDataPanel2, setSortedDataPanel2] = useState<CouponData[]>([]);
  const [isSortedPanel2, setIsSortedPanel2] = useState(false);
  const [couponCount, setCouponCount] = useState(0);


  const handleCouponTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  useEffect(() => {
    setDataPanel1(formattedData);
    setDataPanel2(formattedData2);
    setCouponCount(formattedData2.length);
  }, []);

  const sortData = (unsortedData: CouponData[]) => {
    const sortedDataCopy = [...unsortedData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return sortedDataCopy;
  };

  const handleCouponClick = (index: number) => {
    if (isSortedPanel2) {
      const deletedValue = sortedDataPanel2[index];
      const updatedSortedData = sortedDataPanel2.filter((item) => item !== deletedValue);
      const updatedUnsortedData = dataPanel2.filter((item) => item !== deletedValue);
      setSortedDataPanel2(updatedSortedData);
      setDataPanel2(updatedUnsortedData);
      setCouponCount(updatedUnsortedData.length);
    } else {
      const deletedValue = dataPanel2[index];
      const updatedData = dataPanel2.filter((item) => item !== deletedValue);
      setSortedDataPanel2(updatedData);
      setDataPanel2(updatedData);
      setCouponCount(updatedData.length);
    }
  };

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
            onChange={handleCouponTab} 
            aria-label="main category"
          >
            <Tab label="보유 쿠폰" {...couponProps(0)} />
            <Tab label="쿠폰 받기" {...couponProps(1)} />
          </Tabs>
        </Box>

        <CouponTabPanel value={tabValue} index={0}>
          <Box sx={{mx:"20px", mt:6}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mb:"21px"}}>
              <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#333333", fontWeight:"500"}}>{"쿠폰 "+formattedData.length+"개"}</Typography>
              <Box sx={{display:"flex"}}>
                <Button sx={{color:"#333", display:"flex", borderRadius:0}} onClick={() => {
                  if (!isSortedPanel1) {
                    const sortedDataCopy = sortData(dataPanel1);
                    setSortedDataPanel1(sortedDataCopy);
                    setIsSortedPanel1(true);
                  } else {
                    setIsSortedPanel1(false);
                  }
                }}>
                  <Typography sx={{fontSize: "12px", lineHeight: "16px", color:"#999999", fontWeight:"400"}}>최신순</Typography>
                  <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
                </Button>
              </Box>  
            </Box>
            
            {/* 쿠폰 */}
            
            {isSortedPanel1 ? (
              <CouponCard data={sortedDataPanel1} hasCoupon={true} />
            ) : (
              <CouponCard data={dataPanel1} hasCoupon={true} />
            )}
          </Box>
        </CouponTabPanel>

        <CouponTabPanel value={tabValue} index={1}>
          <Box sx={{mx:"20px", mt:6}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mb:"21px"}}>
              <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#333333", fontWeight:"500"}}>{"쿠폰 "+couponCount+"개"}</Typography>
              <Box sx={{display:"flex"}}>
                <Button sx={{color:"#333", display:"flex", borderRadius:0}} onClick={() => {
                  if (!isSortedPanel2) {
                    const sortedDataCopy = sortData(dataPanel2);
                    setSortedDataPanel2(sortedDataCopy);
                    setIsSortedPanel2(true);
                  } else {
                    setIsSortedPanel2(false);
                  }
                }}>
                <Typography sx={{fontSize: "12px", lineHeight: "16px", color:"#999999", fontWeight:"400"}}>최신순</Typography>
                <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
              </Button>
              </Box>  
            </Box>
            
            {/* 쿠폰 */}
            {isSortedPanel2 ? (
              <CouponCard data={sortedDataPanel2} hasCoupon={false} onCouponClick={(index) => handleCouponClick(index)} />
            ) : (
              <CouponCard data={dataPanel2} hasCoupon={false} onCouponClick={(index) => handleCouponClick(index)} />
            )}
          </Box>
        </CouponTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Coupon