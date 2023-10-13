/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import NavigationBar from "../../components/NavigationBar"
import {Paper, IconButton, Typography, Box, FormControl, Tabs, Tab, Button } from '@mui/material'
import RigthImageCard from './RigthImageCard'
import {umasqu01, umasqu02, umasqu03} from "../../assets/images/brand"
import {umasqu04, umasqu05, umasqu06, umasqu07, } from "../../assets/images/product"
import PostMagazineHeader from './PostMagazineHeader'
import BestWorkAllButton from './BestWorkAllButton'
import List from '../like/Like/List'


export const testData = [
  {
    id: 0,
    imgsrc: umasqu04,
    like: false,
    likeCount: 0,
    shopName: 'Umasqu',
    modelName: '[3Color] AB-201',
    productName: '그린쇼파',
    price: 3230000,
    colors: ['#CBC6C3']
  },
  {
    id: 1,
    imgsrc: umasqu05,
    like: false,
    likeCount: 0,
    shopName: 'Umasqu',
    modelName: '[23s] AB-102',
    productName: '1인 클래식 의자',
    price: 1430000,
    colors: ['#192552', '#CBC6C3']
  },
  {
    id: 2,
    imgsrc: umasqu06,
    like: false,
    likeCount: 0,
    shopName: 'Umasqu',
    modelName: '[1Color] AB-205',
    productName: '1인용 릴렉스 체어',
    price: 3230000,
    colors: ['#1B464D', '#FADA5F']
  },
  {
    id: 3,
    imgsrc: umasqu07,
    like: false,
    likeCount: 0,
    shopName: 'Umasqu',
    modelName: '[23s] AB-392',
    productName: '에어로비 4인용 쇼파',
    price: 1430000,
    colors: ['#292522']
  },
]

const MonthlyPost = () => {
  
  return (
    <Box>
      {/* 첫번째 섹션 */}
      <PostMagazineHeader 
        title="Umasqu"
        ctaTitle="봄이 시작되는 3월"
        ctaSubtitle="화사함이 어울리는 가구"
        backgroundImg={umasqu01}
        />
      {/* 두번째 섹션 */}
      <RigthImageCard
        imageSrc={umasqu02}
        title="친환경적 브랜드계의 거장"
        description="Umasqu 의 브랜드 제품 생산 시 환경 개선을 위해
        지속적으로 노력하고 있으며, 글로벌 환경에 미치는
        영향이 최소화되도록 노력하고 있으며
        Umasqu 만의 60년 이상의 경험과 노하우로
        최고의 제품을 고객에게 전달합니다."/>
      {/* 세번째 섹션 */}
      <Box>
        <Typography sx={{ fontSize: 22, fontWeight: "700", color: "#333333", lineHeight:"28px", pl:2, mt:10 }}>봄과 어울리는 브랜드</Typography>
        <Box sx={{position:"relative", width:"100%", mt:"19px", display:"flex", mb:3}}>
          <img src={umasqu03} alt="" style={{width:"100%", objectFit:"cover"}}/>
          <Typography sx={{ fontSize: 20, fontWeight: "700", color: "#FFFFFF", lineHeight:"23px", position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}}>Umasqu</Typography>
        </Box>
      </Box>
      <Box>
        <BestWorkAllButton/>
        <List data={testData} />
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default MonthlyPost;
