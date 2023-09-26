import { Box, IconButton } from "@mui/material"
import { FlexAlignItemsCenterBox, FlexBox, FlexColumnAlignItemsCenterBox, FlexSpaceBetweenCenterBox, GridBox } from "../Box"
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
          gridTemplateColumns: '119px auto',
          borderTop: '1px solid #DADADA',
          '&:last-child': {
            borderBottom: '1px solid #DADADA'
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
            <Box>
              <BoldGray9Typography>
                {shopName}
              </BoldGray9Typography>
              <Gray7Typography>
                {modelName}
              </Gray7Typography>
              <Gray7Typography>
                {productName}
              </Gray7Typography>
            </Box>
            <FlexSpaceBetweenCenterBox>
              <BoldGray8Typography>
                {Intl.NumberFormat().format(price)} 원
              </BoldGray8Typography>
              <FlexAlignItemsCenterBox flexDirection={'row'}>
                <IconButton
                  onClick={handleClickLike}
                >
                  {isLike ? <IconLikeOn /> : <IconLikeOff />}
                </IconButton>
                <Gray7Typography>
                  {likeCount}
                </Gray7Typography>
              </FlexAlignItemsCenterBox>
            </FlexSpaceBetweenCenterBox>
          </ListDetailBox>
        </FlexAlignItemsCenterBox>
      </GridBox>
    </>
  )
}

export default ListItem