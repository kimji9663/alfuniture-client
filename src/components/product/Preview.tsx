import { Card, CardContent, CardMedia, IconButton } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { IconLikeOff, IconLikeOn } from "../../assets/images"

export interface PreviewProps {
  imgsrc?: string;
  like?: boolean;
  likeCount?: number;
  shopName: string;
  modelName: string;
  productName: string;
  price?: number;
  colors?: Array<string>;
}

const PreviewItem: React.FC<PreviewProps> = ({
  imgsrc,
  like,
  shopName,
  modelName,
  productName,
  price,
  colors
}: PreviewProps) => {
  const [isLike, setIsLike] = useState(like)
  const handleClickLike = (event: any) => {
    setIsLike(!isLike)
  }
  return (
    <Card>
      <CardMedia
        component="img"
        image={imgsrc}
        width="100%"
        alt="상품이미지"
        sx={{
          aspectRatio: "1 / 1"
        }}
      />
      <CardContent>
        <FlexSpaceBetweenCenterBox>
          <BoldGray9Typography>
            {shopName}
          </BoldGray9Typography>
          <IconButton
            onClick={handleClickLike}
          >
            {isLike ? <IconLikeOn /> : <IconLikeOff />}
          </IconButton>
        </FlexSpaceBetweenCenterBox>
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
          <GridBox
            sx={{
              gridTemplateColumns: `repeat(${colors?.length}, 10px)`
            }}
            columnGap='4px'
          >
            {colors?.map((color: string) => (
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: color
                }}
              />
            ))}
          </GridBox>
        </FlexSpaceBetweenCenterBox>
      </CardContent>
    </Card>
  )
}

export default PreviewItem