import { Box, IconButton } from "@mui/material"
import { FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { PreviewProps } from "./Preview"
import { ListDetailBox, ListImageBox } from "./preview.styles"
import { Favorite, FavoriteBorder } from "@mui/icons-material"

const ListItem: React.FC<PreviewProps> = ({
  imgsrc,
  like,
  likeCount,
  shopName,
  modelName,
  productName,
  price
}: PreviewProps) => {
  return (
    <>
    {/* 가로형 상품 리스트 */}
    <GridBox
      gridColumn={'3fr 5fr'}
    >
      <ListImageBox>
        <img src={imgsrc} alt="상품이미지"/>
      </ListImageBox>
      <ListDetailBox>
          <BoldGray9Typography>
            {shopName}
          </BoldGray9Typography>
        <Gray7Typography>
          {modelName}
        </Gray7Typography>
        <Gray7Typography>
          {productName}
        </Gray7Typography>
        <FlexSpaceBetweenCenterBox>
          <BoldGray8Typography>
            {price} 원
          </BoldGray8Typography>
          <Box>
          <IconButton>
            {like ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <Gray7Typography>
            {likeCount}
          </Gray7Typography>
          </Box>
        </FlexSpaceBetweenCenterBox>
      </ListDetailBox>
    </GridBox>
    </>
  )
}

export default ListItem