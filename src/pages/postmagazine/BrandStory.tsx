/** @jsxImportSource @emotion/react */
import NavigationBar from "../../components/NavigationBar"
import { Typography, Box } from '@mui/material'
import {aerobiey02, aerobiey03, aerobiey04, aerobiey05} from "../../assets/images/brand"
import PostMagazineHeader from './PostMagazineHeader'
import BestWorkAllButton from './BestWorkAllButton'
import List from '../like/Like/List'
import { brandStoryData } from '../../data'
import { ScrollToTop } from '../../App'
import { TitleLargeBoldGray9Typography, TitleSmallGray7Typography } from '../../components/Typography'

const BrandStory = () => {
  ScrollToTop();
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
            <TitleLargeBoldGray9Typography sx={{ mb: 2 }}>Aerobiey 의 핵심가치 “존중”</TitleLargeBoldGray9Typography>
            <TitleSmallGray7Typography>
              Aerobiey의 핵심 가치 중 하나는 존중입니다.
            </TitleSmallGray7Typography>
            <TitleSmallGray7Typography sx={{ mb: 2 }}>
              우수한 디자인과 품질을 고객에게 적절한 가격에 제공함으로써 고객을 존중하고 싶습니다.
            </TitleSmallGray7Typography>
            <TitleSmallGray7Typography sx={{ mb: 2 }}>
              작업실은 프랑스를 거점으로 하고 있으며, 품질, 환경, 작업 프로세스에 관해서, 소비자의 기대를 만족시키기 위해 노력하고 있습니다.
            </TitleSmallGray7Typography>
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
            <TitleLargeBoldGray9Typography sx={{ mb: 2 }}>친환경적 브랜드계의 거장</TitleLargeBoldGray9Typography>
            <TitleSmallGray7Typography sx={{ mb: 2 }}>
              Aerobiey 의 브랜드 제품 생산 시 환경 개선을 위해
              지속적으로 노력하고 있으며, 글로벌 환경에 미치는
              영향이 최소화되도록 노력하고 있으며
              Aerobiey 만의 60년 이상의 경험과 노하우로
              최고의 제품을 고객에게 전달합니다.
            </TitleSmallGray7Typography>
          </Box>
        </Box>
      </Box>
      {/* 세번째 섹션 */}
      <Box sx={{mt:10}}>
        <BestWorkAllButton title='Aerobiey'/>
        <List data={brandStoryData} />
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default BrandStory;
