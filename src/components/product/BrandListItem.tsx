import { FlexBox, FlexCenterCenterBox, GridBox } from "../Box"
import { BoldGray9Typography, Gray7Typography } from "../Typography"
import { PreviewProps } from "./Preview"
import { BrandContainer, BrandDetailBox, BrandImageBox } from "./brandlistitem.styles"

const BrandListItem: React.FC<PreviewProps> = ({
  imgsrc,
  rank,
  shopName,
  modelName,
  productName,
}: PreviewProps) => {
  return (
    <>
      {/* 브랜드 상품 리스트 */}
      <BrandContainer>
        <BrandImageBox>
          <img
            src={imgsrc}
            alt="상품이미지"
          />
          {rank ?
            <FlexCenterCenterBox className="rank">
              {rank}
            </FlexCenterCenterBox>
            : null
          }
        </BrandImageBox>
        <FlexBox>
          <BrandDetailBox>
            <BoldGray9Typography>
              {shopName}
            </BoldGray9Typography>
            <Gray7Typography>
              {modelName}
            </Gray7Typography>
            <Gray7Typography>
              {productName}
            </Gray7Typography>
          </BrandDetailBox>
        </FlexBox>
      </BrandContainer>
    </>
  )
}

export default BrandListItem