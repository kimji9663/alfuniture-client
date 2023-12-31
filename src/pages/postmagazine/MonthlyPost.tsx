/** @jsxImportSource @emotion/react */
import NavigationBar from "../../components/NavigationBar"
import { Box } from "@mui/material"
import RightImageCard from "./RightImageCard"
import {umasqu01, umasqu02, umasqu03} from "../../assets/images/brand"
import PostMagazineHeader from "./PostMagazineHeader"
import BestWorkAllButton from "./BestWorkAllButton"
import List from "../like/Like/List"
import { monthlyPostData } from "../../data"
import { ScrollToTop } from "../../App"
import { TitleLargeBoldGray9Typography, TitleLargeBoldWhiteUmasquTypography } from "../../components/Typography"

const MonthlyPost = () => {
  ScrollToTop();
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
      <RightImageCard
        imageSrc={umasqu02}
        title="친환경적 브랜드계의 거장"
        description="Umasqu 의 브랜드 제품 생산 시 환경 개선을 위해
        지속적으로 노력하고 있으며, 글로벌 환경에 미치는
        영향이 최소화되도록 노력하고 있으며
        Umasqu 만의 60년 이상의 경험과 노하우로
        최고의 제품을 고객에게 전달합니다."/>
      {/* 세번째 섹션 */}
      <Box>
        <TitleLargeBoldGray9Typography sx={{ pl:2, mt:10 }}>봄과 어울리는 브랜드</TitleLargeBoldGray9Typography>
        <Box sx={{position:"relative", width:"100%", mt:"19px", display:"flex", mb:3}}>
          <img src={umasqu03} alt="" style={{width:"100%", objectFit:"cover"}}/>
          <TitleLargeBoldWhiteUmasquTypography>Umasqu</TitleLargeBoldWhiteUmasquTypography>
        </Box>
      </Box>
      <Box>
        <BestWorkAllButton/>
        <List data={monthlyPostData} />
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default MonthlyPost;
