import { Box, IconButton } from "@mui/material"
import { FlexAlignItemsCenterBox, FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { PreviewProps } from "./Preview"
import { ListDetailBox, ListImageBox } from "./preview.styles"
import { useState } from "react"
import { IconLikeOff, IconLikeOn } from "../../assets/images"

const ListItem: React.FC<PreviewProps> = ({
  imgsrc,
  like,
  likeCount,
  shopName,
  modelName,
  productName,
  price
}: PreviewProps) => {
  const [isLike, setIsLike] = useState(like)
  const handleClickLike = (event: any) => {
    setIsLike(!isLike)
  }
  return (
    <>
      {/* 가로형 상품 리스트 */}
      <GridBox
        sx={{
          gridTemplateColumns: '3fr 5fr',
          borderTop: '1px solid #999999',
          '&:last-child': {
            borderBottom: '1px solid #999999'
          }
        }}
      >
        <ListImageBox>
          <img
            src={imgsrc}
            alt="상품이미지"
          />
        </ListImageBox>
        <FlexAlignItemsCenterBox>
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
                <IconButton
                  onClick={handleClickLike}
                >
                  {isLike ? <IconLikeOn /> : <IconLikeOff />}
                </IconButton>
                <Gray7Typography>
                  {likeCount}
                </Gray7Typography>
              </Box>
            </FlexSpaceBetweenCenterBox>
          </ListDetailBox>
        </FlexAlignItemsCenterBox>
      </GridBox>
    </>
  )
}

export default ListItem