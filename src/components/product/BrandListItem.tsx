
export interface PreviewProps {
  rank: boolean;
  imgsrc?: string;
  like?: boolean;
  likeCount?: number;
  shopName: string;
  modelName: string;
  productName: string;
  price?: number;
  colors?: Array<string>;
}

const BrandListItem: React.FC<PreviewProps> = ({
  rank,
  imgsrc,
  like,
  shopName,
  modelName,
  productName,
  price,
  colors
}: PreviewProps) => {
  return (
    <>
    {/* 브랜드 상품 리스트 */}
    </>
  )
}

export default BrandListItem