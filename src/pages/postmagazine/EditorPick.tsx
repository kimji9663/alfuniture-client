/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import NavigationBar from "../../components/NavigationBar"
import { Box } from '@mui/material'
import {henredn01, henredn02, henredn03} from "../../assets/images/brand"
import RightImageCard from './RightImageCard'
import BestWorkAllButton from './BestWorkAllButton'
import List from '../like/Like/List'
import { editorPickData } from '../../data'
import { ScrollToTop } from '../../App'
import { C333Fs16Typography, C242Fs55Typography, CFFFFs14Fw700Typography, C666Fs14Lh22Typography, C333Fs22Fw700Lh28Typography, C999Fs14NoLhTypography } from '../../components/Typography'

const EditorPick = () => {
  ScrollToTop();
  return (
    <Box>
      {/* 첫번째 섹션 */}
      <NoTitle/>
      <Box sx={{mt:"50px", mx:2}}>
        <Box sx={{display:"flex", width:"100", flexDirection:"row-reverse"}}>
          <C333Fs16Typography sx={{ mb: "11px" }}>소중한 추억의 기억을 담는 가구</C333Fs16Typography>
        </Box>
        <Box sx={{display:"flex", position:"relative"}}>
          <Box sx={{ width: "70px", display: "flex"}}>
            <Box sx={{ width: "70px", display: "flex", flexDirection: "column-reverse", transform: "rotate(270deg)", transformOrigin: "left bottom", position:'absolute', bottom:0, left:35}}>
              <C242Fs55Typography>Henredn</C242Fs55Typography>
            </Box>
          </Box>

          <Box sx={{minWidth:"259px", flex:1, position:'relative', display:"flex"}}>
            <img src={henredn01} alt="" style={{width:"100%", objectFit:"cover"}}/>
            <Box sx={{ position: "absolute", zIndex: 1, backgroundColor: "#000000", bottom: "0", right:"0", px:2, py:1 }}>
              <CFFFFs14Fw700Typography sx={{ fontSize: 14, fontWeight: "400", color: "#FFFFFF", textAlign: "center" }}>에디터 pick</CFFFFs14Fw700Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{display:"flex", mt:"21px", pb:"84px"}}>
          <Box sx={{width: "70px"}}></Box>
          <Box sx={{flex:1}}>
            <C666Fs14Lh22Typography>프렌치 헤리티지는 가구 형태의 예술작품을 만드는데 탁월합니다.</C666Fs14Lh22Typography>
            <C666Fs14Lh22Typography>세부와 완벽에 대한 그들의 시선은 나머지 부분에서 눈에 띄는 것입니다.</C666Fs14Lh22Typography>
          </Box>
        </Box>
      </Box>
      {/* 두번째 섹션 */}
      <RightImageCard
        imageSrc={henredn02}
        title="친환경적 브랜드계의 거장"
        description="Aerobiey 의 브랜드 제품 생산 시 환경 개선을 위해
        지속적으로 노력하고 있으며, 글로벌 환경에 미치는
        영향이 최소화되도록 노력하고 있으며
        Aerobiey 만의 60년 이상의 경험과 노하우로
        최고의 제품을 고객에게 전달합니다."/>
      {/* 세번째 섹션 */}
      <Box sx={{mt:10, px:2, pb:"26px", borderBottom:"0.5px solid #868686"}}>
        <img src={henredn03} alt="" style={{width:"100%", objectFit:"cover"}}/>
        <C333Fs22Fw700Lh28Typography sx={{ mb: 1, mt:2 }}>Brand story</C333Fs22Fw700Lh28Typography>
        <C999Fs14NoLhTypography>
          Aerobiey의 핵심 가치 중 하나는 존중입니다.우수한 디자인과 품질을 고객에게 적절한 가격에 제공함
          으로써 고객을 존중하고 싶습니다.본사는 프랑스를 거점으로 하고 있으며, 품질, 환경,
          작업 프로세스에 관해서, 소비자의 기대를 만족시키기
          위해 노력하고 있습니다.
        </C999Fs14NoLhTypography>
      </Box>
      
      {/* 네번째 섹션 */}
      <Box sx={{mt:10}}>
        <BestWorkAllButton title='Henredn'/>
        <List data={editorPickData} />
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default EditorPick;
