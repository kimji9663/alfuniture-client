/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import { Typography, Box } from '@mui/material'
import { IconDownWhite } from "../../assets/images"

interface PostMagazineHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImg: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

const PostMagazineHeader: React.FC<PostMagazineHeaderProps> = (props) => {
  const { title, subtitle, backgroundImg, ctaTitle, ctaSubtitle } = props;

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <NoTitle />
      </Box>
      <Box sx={{ position: "absolute", top: "97px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography sx={{ fontSize: 55, fontWeight: "700", color: "#000000" }}>{title}</Typography>
        
        {subtitle && (<Typography sx={{ fontSize: 12, fontWeight: "400", color: "#242223", letterSpacing: "-0.25px" }}>{subtitle}</Typography>)}
      </Box>
      <Box sx={{ position: "absolute", bottom: "39px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {ctaTitle && ctaSubtitle && (
          <>
            <Typography sx={{ fontSize: 20, fontWeight: "600", color: "#FFFFFF", lineHeight:"24.2px" }}>{ctaTitle}</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "600", color: "#FFFFFF", mb: 2 }}>{ctaSubtitle}</Typography>
          </> 
        )}
        <Typography sx={{ fontSize: 14, fontWeight: "500", color: "#FFFFFF", mb: 2 }}>브랜드 스토리 보러가기</Typography>
        <Box sx={{ border: "1px solid #FFFFFF", borderRadius: 100, width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconDownWhite />
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <img src={backgroundImg} alt="" style={{ objectFit: "cover", width: "100%" }} />
      </Box>
    </Box>
  )
}

export default PostMagazineHeader;
