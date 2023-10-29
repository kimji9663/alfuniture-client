/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import { Box } from '@mui/material'
import { IconDownWhite } from "../../assets/images"
import { C000Fs55Fw700Typography, C242Fs12Typography, CFFFFs20Fw700Typography, CFFFFs20Ls24Fw700Typography, CFFFFs14Typography } from "../../components/Typography"

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
    <Box sx={{ position: "relative", height: 'calc(100vh - 74px)', overflow: 'hidden' }}>
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <NoTitle />
      </Box>
      <Box sx={{ position: "absolute", top: "97px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <C000Fs55Fw700Typography>{title}</C000Fs55Fw700Typography>
        
        {subtitle && (<C242Fs12Typography>{subtitle}</C242Fs12Typography>)}
      </Box>
      <Box sx={{ position: "absolute", bottom: "39px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {ctaTitle && ctaSubtitle && (
          <>
            <CFFFFs20Ls24Fw700Typography>{ctaTitle}</CFFFFs20Ls24Fw700Typography>
            <CFFFFs20Fw700Typography sx={{ mb: 2 }}>{ctaSubtitle}</CFFFFs20Fw700Typography>
          </> 
        )}
        <CFFFFs14Typography sx={{ mb: 2 }}>브랜드 스토리 보러가기</CFFFFs14Typography>
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
