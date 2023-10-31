/** @jsxImportSource @emotion/react */
import NoTitle from '../../components/title/NoTitle'
import { Box } from '@mui/material'
import { IconDownWhite } from "../../assets/images"
import { HeadlineExtraLargeBoldTypography, LabelMediumGray9Typography, TitleLargeBoldWhiteTypography, TitleSmallWhiteTypography } from "../../components/Typography"

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
        <HeadlineExtraLargeBoldTypography>{title}</HeadlineExtraLargeBoldTypography>
        
        {subtitle && (<LabelMediumGray9Typography>{subtitle}</LabelMediumGray9Typography>)}
      </Box>
      <Box sx={{ position: "absolute", bottom: "39px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {ctaTitle && ctaSubtitle && (
          <>
            <TitleLargeBoldWhiteTypography sx={{lineHeight: "24px"}}>{ctaTitle}</TitleLargeBoldWhiteTypography>
            <TitleLargeBoldWhiteTypography sx={{ mb: 2 }}>{ctaSubtitle}</TitleLargeBoldWhiteTypography>
          </> 
        )}
        <TitleSmallWhiteTypography sx={{ mb: 2 }}>브랜드 스토리 보러가기</TitleSmallWhiteTypography>
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
