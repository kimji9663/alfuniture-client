import { Card, CardContent, CardMedia, IconButton, Link, Paper } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { IconLikeOff, IconLikeOn } from "../../assets/images"
import { ColorPalette, PreviewDetailBox } from "./preview.styles"
import { Navigate } from "react-router-dom"

export interface PreviewProps {
  id: number;
  imgsrc?: string;
  like?: boolean;
  likeCount?: number;
  shopName: string;
  modelName: string;
  productName: string;
  price: number;
  colors?: Array<string>;
}

const PreviewItem: React.FC<PreviewProps> = ({
  id,
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
    event.preventDefault();
    event.stopPropagation();
    setIsLike(!isLike)
  }

  return (
    <Paper elevation={0} square>
      <Link href='/shop/product_view' underline='none'>
      <CardMedia
        component="img"
        image={imgsrc}
        width="100%"
        alt="상품이미지"
        sx={{
          aspectRatio: "1 / 1"
        }}
      />
      <PreviewDetailBox>
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
            {Intl.NumberFormat().format(price)} 원
          </BoldGray8Typography>
          <ColorPalette
            sx={{
              gridTemplateColumns: `repeat(${colors?.length}, 10px)`
            }}
            columnGap='4px'
          >
            {colors?.map((color: string, idx: number) => (
              <Box
                key={`item-color-${idx}`}
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: color
                }}
              />
            ))}
          </ColorPalette>
        </FlexSpaceBetweenCenterBox>
      </PreviewDetailBox>
      </Link>
    </Paper>
  )
}

export default PreviewItem