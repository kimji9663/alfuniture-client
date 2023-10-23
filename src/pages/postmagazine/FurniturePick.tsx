/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import NavigationBar from "../../components/NavigationBar"
import {Paper, IconButton, Typography, Box, FormControl, Tabs, Tab, Button } from '@mui/material'

import {aerobiey02, aerobiey03, aerobiey04, aerobiey05} from "../../assets/images/brand"
import {aerobiey06, aerobiey07, aerobiey08, aerobiey09, } from "../../assets/images/product"
import PostMagazineHeader from './PostMagazineHeader'
import BestWorkAllButton from './BestWorkAllButton'
import List from '../like/Like/List'


export const testData = [
  {
    id: 0,
    imgsrc: aerobiey06,
    like: false,
    likeCount: 0,
    shopName: 'Aerobiey',
    modelName: '[3Color] AB-201',
    productName: '화이트 아크 체어',
    price: 3230000,
    colors: ['#CBC6C3']
  },
  {
    id: 1,
    imgsrc: aerobiey07,
    like: false,
    likeCount: 0,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-102',
    productName: '클래식 무드등',
    price: 1430000,
    colors: ['#192552', '#CBC6C3']
  },
  {
    id: 2,
    imgsrc: aerobiey08,
    like: false,
    likeCount: 0,
    shopName: 'Aerobiey',
    modelName: '[1Color] AB-205',
    productName: '1인용 릴렉스 체어',
    price: 3230000,
    colors: ['#1B464D', '#FADA5F']
  },
  {
    id: 3,
    imgsrc: aerobiey09,
    like: false,
    likeCount: 0,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-392',
    productName: '에어로비 4인용 쇼파',
    price: 1430000,
    colors: ['#292522']
  },
]

const FurniturePick = () => {
  
  return (
    <Box>
      {/* 첫번째 섹션 */}
      <PostMagazineHeader 
        title="Aerobiey"
        subtitle="스웨덴 혁신적인 가구의 한획을 긋다"
        backgroundImg={aerobiey02}
        />
      {/* 두번째 섹션 */}
      <Box sx={{mt:"50px"}}>
        <Box sx={{mr:2, borderRight:"0.5px solid #868686"}}>
          <Box sx={{pr:2, pb:3, display:"flex", borderBottom:"0.5px solid #868686"}}>
            <img src={aerobiey03} alt="" style={{width:"100%", objectFit:"cover"}}/>
          </Box>
          <Box sx={{px:2, pt:3}}>
            <Typography sx={{ fontSize: 22, fontWeight: "700", color: "#333333", mb: 2 }}>Aerobiey 의 핵심가치 “존중”</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#999999", letterSpacing:"-0.25px" }}>
              Aerobiey의 핵심 가치 중 하나는 존중입니다.
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#999999", mb: 2, letterSpacing:"-0.25px" }}>
              우수한 디자인과 품질을 고객에게 적절한 가격에 제공함으로써 고객을 존중하고 싶습니다.
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#999999", mb: 2, letterSpacing:"-0.25px" }}>
              작업실은 프랑스를 거점으로 하고 있으며, 품질, 환경, 작업 프로세스에 관해서, 소비자의 기대를 만족시키기 위해 노력하고 있습니다.
            </Typography>
          </Box>
        </Box>
        <Box sx={{mt:6, ml:2, pt:4, borderLeft:"0.5px solid #868686"}}>
          <Box sx={{position:"relative", display: "flex", flexDirection:"row-reverse", mb:3}}>
            <Box sx={{bottom:0, right:0, height:"250px"}}>
              <img src={aerobiey05} alt="" style={{height:"100%", objectFit:"cover"}}/>
            </Box>
            <Box sx={{position:"absolute",zIndex:1, bottom:0, left:0, height:"150px"}}>
              <img src={aerobiey04} alt="" style={{height:"100%", objectFit:"cover"}}/>
            </Box>
          </Box>
          <Box sx={{pl:2, pt:3, pr:5, borderTop:"0.5px solid #868686"}}>
            <Typography sx={{ fontSize: 22, fontWeight: "700", color: "#333333", mb: 2 }}>친환경적 브랜드계의 거장</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#999999", mb: 2, letterSpacing:"-0.25px" }}>
              Aerobiey 의 브랜드 제품 생산 시 환경 개선을 위해
              지속적으로 노력하고 있으며, 글로벌 환경에 미치는
              영향이 최소화되도록 노력하고 있으며
              Aerobiey 만의 60년 이상의 경험과 노하우로
              최고의 제품을 고객에게 전달합니다.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* 세번째 섹션 */}
      <Box sx={{mt:10}}>
        <BestWorkAllButton title='Aerobiey'/>
        <List data={testData} />
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default FurniturePick;
