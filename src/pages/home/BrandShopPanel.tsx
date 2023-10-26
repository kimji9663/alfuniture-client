import List from "../like/Like/List"
import { brandShopPanelProductData, brandData } from "../../data"
import BrandButton from "../../components/BrandButton"
import { Box } from "@mui/material"

const BrandShopPanel = () => {
  return (
    <>
      <Box sx={{mt: 7, mb: 6, mx:2 }}>
        <BrandButton brandData={ brandData }/>
      </Box>
      <List data={brandShopPanelProductData}/>
    </>
  )
}

export default BrandShopPanel