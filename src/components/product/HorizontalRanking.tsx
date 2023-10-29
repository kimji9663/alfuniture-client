/** @jsxImportSource @emotion/react */
import {Typography, Box, Link } from '@mui/material'

interface RankingItem {
  id: number;
  rank: number;
  imgsrc: string;
  shopName: string;
  modelName: string;
  productName: string;
  name: string;
}

interface HorizontalRankingProps {
  data: RankingItem[];
  title: string;
  subTitle: string;
  discription: string
}

const HorizontalRanking: React.FC<HorizontalRankingProps> = ({ data, title, subTitle, discription }) => {

  return (
    <>
      {/* 랭킹형 가로 */}
      <Box sx={{ px: 2 }}>
        <Typography sx={{ fontSize: 22, fontWeight: "700" }}>{title}</Typography>
        {/* <Link href='/shop/product_view' underline='none'> */}
          <Box sx={{ mt: 2, mb: 3, position: "relative", display: "flex" }}>
            <img src={data[0].imgsrc} alt={`1순위 이미지`} style={{ width: "100%" }}/>
            <Box sx={{width:"40px", height: "40px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{ fontSize: 22, fontWeight: "700" }}>{data[0].rank}</Typography>
            </Box>
          </Box>
        {/* </Link> */}
        <Box sx={{mb:2}}>
          <Typography sx={{ fontSize: 16, fontWeight: "700", letterSpacing: "0.15px", mb: "4px" }}>{subTitle}</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "700", letterSpacing: "-0.25px", color: "#999999" }}>{discription}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {data.slice(1, 5).map((item: any, index: any) => (
            // <Link href='/shop/product_view' underline='none' key={index}>
              <Box sx={{borderTop: item.rank === 2 ? "1px solid #DADADA" : "none",}} key={index}>
                <Box  sx={{position: "relative", display: "flex", mt:3 }}>
                  <img  src={item.imgsrc} alt={`순위 ${item.id}`} style={{ width: "76px", height: "76px" }} />
                  <Box sx={{width:"24px", height: "24px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Typography sx={{ fontSize: 14, fontWeight: "700" }}>{item.rank}</Typography>
                  </Box>
                </Box>
              </Box>
            // </Link>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default HorizontalRanking
