import { Box, IconButton, Link,Typography } from "@mui/material"
import { FlexAlignItemsCenterBox, FlexBox, FlexColumnAlignItemsCenterBox, FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"

import { ListDetailBoxType2, ListImageBoxType2 } from "./preview.styles"
import { useState } from "react"
import { IconLikeOff, IconLikeOn } from "../../assets/images"

export interface PreviewProps {
  id?: number;
  imgsrc?: string;
  like?: boolean;
  likeCount?: number;
  rank?: number;
  shopName: string;
  modelName: string;
  productName: string;
}

const ListItemType2: React.FC<PreviewProps> = ({
  id,
  rank,
  imgsrc,
  shopName,
  modelName,
  productName,
}: PreviewProps) => {
  
  return (
    <>
      {/* 가로형 상품 리스트 */}
        <GridBox
          sx={{
            gridTemplateColumns: '96px auto',
            borderTop: '1px solid #DADADA',
          }}
        >
          <Link href='/shop/product_view' underline='none'>
            <ListImageBoxType2>
              <img
                src={imgsrc}
                alt="상품이미지"
              />
              {rank !== undefined && (
                <Box sx={{width:"24px", height: "24px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <Typography sx={{ fontSize: 14, fontWeight: "700" }}>{rank}</Typography>
                </Box>
              )}
            </ListImageBoxType2>
          </Link>
          <FlexAlignItemsCenterBox>
            <ListDetailBoxType2>
              <Link href='/shop/product_view' underline='none'>
                <Box>
                  <Box sx={{mb:"5px"}}>
                    <BoldGray9Typography>
                      {shopName}
                    </BoldGray9Typography>
                  </Box>
                  <Gray7Typography>
                    {modelName}
                  </Gray7Typography>
                  <Gray7Typography>
                    {productName}
                  </Gray7Typography>
                </Box>
              </Link>
            </ListDetailBoxType2>
          </FlexAlignItemsCenterBox>
        </GridBox>
    </>
  )
}

export default ListItemType2