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
    startDate: '20230918',
    endDate: '20231118',
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
  const [tabValue, setTabValue] = useState(0)

  const handleCouponTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const [data, setData] = useState<CouponData[]>([]); 
  const [sortedData, setSortedData] = useState<CouponData[]>([]); 
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setData(formattedData);
  }, []);

  const sortData = (unsortedData: CouponData[]) => {
    const sortedDataCopy = [...unsortedData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return sortedDataCopy;
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
                <Button sx={{color:"#333", display:"flex"}} onClick={() => {
                  if (!isSorted) {
                    const sortedDataCopy = sortData(formattedData);
                    setSortedData(sortedDataCopy);
                    setIsSorted(true);
                  } else {
                    setIsSorted(false);
                  }
                }}>
                  <Typography sx={{fontSize: "12px", lineHeight: "16px", color:"#999999", fontWeight:"400"}}>최신순</Typography>
                  <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
                </Button>
              </Box>  
            </Box>
            
            {/* 쿠폰 */}
            
            {isSorted ? (
              <CouponCard data={sortedData} hasCoupon={true}/>
            ) : (
              <CouponCard data={formattedData} hasCoupon={true}/>
            )}
          </Box>
        </CouponTabPanel>

        <CouponTabPanel value={tabValue} index={1}>
          <Box sx={{mx:"20px", mt:6}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mb:"21px"}}>
              <Typography sx={{fontSize: "12px", lineHeight: "12px", letterSpacing: "0.4px", color:"#333333", fontWeight:"500"}}>{"쿠폰 "+formattedData2.length+"개"}</Typography>
              <Box sx={{display:"flex"}}>
              <Button sx={{color:"#333", display:"flex"}} onClick={() => {
                if (!isSorted) {
                  const sortedDataCopy = sortData(formattedData2);
                  setSortedData(sortedDataCopy);
                  setIsSorted(true);
                } else {
                  setIsSorted(false);
                }
              }}>
                <Typography sx={{fontSize: "12px", lineHeight: "16px", color:"#999999", fontWeight:"400"}}>최신순</Typography>
                <HalfArrowDownGray style={{paddingTop:2, paddingLeft:4}}/>
              </Button>
              </Box>  
            </Box>
            
            {/* 쿠폰 */}
            {isSorted ? (
              <CouponCard data={sortedData} hasCoupon={false}/>
            ) : (
              <CouponCard data={formattedData2} hasCoupon={false}/>
            )}
          </Box>
        </CouponTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default Coupon