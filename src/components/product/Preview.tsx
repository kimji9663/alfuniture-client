import { Card, CardContent, CardMedia, IconButton } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Box } from "@mui/system"
import React from "react"
import { FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"

interface PreviewProps {
  imgsrc: string;
  like: boolean;
  shopName: string;
  modelName: string;
  productName: string;
  price: number;
  colors: Array<string>;
}

const Preview: React.FC<PreviewProps> = ({
  imgsrc,
  like,
  shopName,
  modelName,
  productName,
  price,
  colors
}: PreviewProps) => {
  return (
    <Card>
      <CardMedia
        image={imgsrc}
      />
      <CardContent>
        <FlexSpaceBetweenCenterBox>
          <BoldGray9Typography>
            {shopName}
          </BoldGray9Typography>
          <IconButton>
            {like ? <Favorite /> : <FavoriteBorder />}
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
            columnGap={'4px'}
          >
            {colors.map((color: string) => (
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: {color}
                }}
              />
            ))}
          </GridBox>
        </FlexSpaceBetweenCenterBox>
      </CardContent>
    </Card>
  )
}

export default Preview