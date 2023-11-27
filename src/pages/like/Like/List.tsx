import PreviewItem from "../../../components/product/Preview"
import { Box } from "@mui/material"
import { GridBox } from "../../../components/Box"

interface ProductData {
  id: number;
  imgsrc: string;
  like: boolean;
  shopName: string;
  modelName: string;
  productName: string;
  price: number;
  colors: string[];
  likeCount: number
}

interface ProductListProps {
  data: ProductData[]; 
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {

  return (
    <>
      <Box padding="1.5rem 1rem">
        <GridBox
          sx={{
            gridTemplateColumns: "1fr 1fr"
          }}
          columnGap="0.5rem"
          rowGap="1.5rem"
        >
          {data.map((product: ProductData) =>
            <PreviewItem
              key={`product-${product.id}`}
              id={product.id}
              imgsrc={product.imgsrc}
              shopName={product.shopName}
              modelName={product.modelName}
              productName={product.productName}
              price={product.price}
              colors={product.colors}
            />
          )}
        </GridBox>
      </Box>
    </>
  )
}
export default ProductList