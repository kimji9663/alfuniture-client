import { CardMedia, IconButton, Link, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { FlexSpaceBetweenCenterBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { IconLikeOff, IconLikeOn } from "../../assets/images"
import { PreviewDetailBox } from "./preview.styles"

export interface PreviewProps {
  id: number;
  imgsrc?: string;
  like?: boolean;
  likeCount?: number;
  rank?: number;
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
          aspectRatio: "1 / 1.2"
        }}
      />
      <PreviewDetailBox>
        <FlexSpaceBetweenCenterBox>
          <BoldGray9Typography sx={{fontSize:"12px"}}>
            {shopName}
          </BoldGray9Typography>
        </FlexSpaceBetweenCenterBox>
        <Box sx={{mb:1}}>
          <Gray7Typography sx={{fontSize:"10px"}}>
            {modelName}
          </Gray7Typography>
          <Gray7Typography sx={{fontSize:"10px"}}>
            {productName}
          </Gray7Typography>
        </Box>
        <FlexSpaceBetweenCenterBox>
          <BoldGray8Typography sx={{fontSize:"10px"}}>
            {Intl.NumberFormat().format(price)} 원
          </BoldGray8Typography>
          
        </FlexSpaceBetweenCenterBox>
      </PreviewDetailBox>
      </Link>
    </Paper>
  )
}

export default PreviewItem