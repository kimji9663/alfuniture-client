import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { backGroundImg } from "../../assets/images/onBoarding"
import { LoadingBox } from "./loadingCuration.styles"

const LoadingCuration = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    setTimeout(goToNext, 3000);   
  }, []);

  const goToNext = () => {
    navigate("/onboarding/featured_product")
  };

  return (
    <>
      <Box sx={{
        height: '100%',
        overflow: 'auto',
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${backGroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <LoadingBox>
          <CircularProgress
          // disableShrink
            size={'51px'}
            thickness={2}
          />
          <Typography>
            가구 브랜드를<br />큐레이션 중입니다.
          </Typography>
        </LoadingBox>
      </Box>
    </>
  )
}
export default LoadingCuration;