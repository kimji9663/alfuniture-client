import { CardMedia, IconButton, Link, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { FlexSpaceBetweenCenterBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { IconLikeOff, IconLikeOn } from "../../assets/images"
import { ColorPalette, PreviewDetailBox } from "./preview.styles"

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
  /** 첫 화면에 보이는 항목이면 true: 지연 로딩하지 않는다 */
  priority?: boolean;
}

const PreviewItem: React.FC<PreviewProps> = ({
  id,
  imgsrc,
  like,
  shopName,
  modelName,
  productName,
  price,
  colors,
  priority = false,
}: PreviewProps) => {

  const [isLike, setIsLike] = useState(like)

  const handleClickLike = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLike(!isLike)
  }

  return (
    <Paper elevation={0} square>
      <Link href="/shop/product_view" underline="none">
      <CardMedia
        component="img"
        image={imgsrc}
        width="100%"
        alt="상품이미지"
        loading={priority ? "eager" : "lazy"}
        sx={{
          aspectRatio: "1 / 1"
        }}
      />
      <PreviewDetailBox>
        <FlexSpaceBetweenCenterBox>
          <BoldGray9Typography>
            {shopName}
          </BoldGray9Typography>
          <IconButton aria-label="좋아요" aria-pressed={!!isLike}
            onClick={handleClickLike}
          >
            {isLike ? <IconLikeOn /> : <IconLikeOff />}
          </IconButton>
        </FlexSpaceBetweenCenterBox>
        <Box sx={{mb:1}}>
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
          <ColorPalette
            sx={{
              gridTemplateColumns: `repeat(${colors?.length}, 10px)`
            }}
            columnGap="4px"
          >
            {colors?.map((color: string, idx: number) => (
              <Box
                key={`item-color-${idx}`}
                sx={{
                  width: "10px",
                  height: "10px",
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