import { Box, IconButton, Link } from "@mui/material"
import { FlexAlignItemsCenterBox, FlexSpaceBetweenCenterBox, GridBox } from "../Box"
import { BoldGray8Typography, BoldGray9Typography, Gray7Typography } from "../Typography"
import { PreviewProps } from "./Preview"
import { ListDetailBox, ListImageBox } from "./preview.styles"
import { IconLikeOff, IconLikeOn } from "../../assets/images"
import { useLikes } from "../../store/likes"

const ListItem: React.FC<PreviewProps> = ({
  imgsrc,
  likeCount,
  shopName,
  modelName,
  productName,
  price,
  colors
}: PreviewProps) => {
  // 찜 상태는 전역 스토어(src/store/likes.tsx)에서 읽는다 → 모든 화면에서 같은 값
  const { isLiked, toggleLike } = useLikes()
  const isLike = isLiked({ shopName, modelName, productName })
  const handleClickLike = (event: any) => {
    toggleLike({ shopName, modelName, productName, price, colors })
  }
  return (
    <>
      {/* 가로형 상품 리스트 */}
        <GridBox
          sx={{
            gridTemplateColumns: "119px auto",
            borderTop: "1px solid #DADADA",
            "&:last-child": {
              borderBottom: "1px solid #DADADA"
            }
          }}
        >
          <Link href="/shop/product_view" underline="none">
            <ListImageBox>
              <img
                src={imgsrc}
                alt="상품이미지"
                loading="lazy"
              />
            </ListImageBox>
          </Link>
          <FlexAlignItemsCenterBox>
            <ListDetailBox>
              <Link href="/shop/product_view" underline="none">
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
              </Link>
              <FlexSpaceBetweenCenterBox>
                <BoldGray8Typography>
                  {Intl.NumberFormat().format(price)} 원
                </BoldGray8Typography>
                <FlexAlignItemsCenterBox flexDirection={"row"}>
                  <IconButton aria-label="좋아요" aria-pressed={!!isLike}
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