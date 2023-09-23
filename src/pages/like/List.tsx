import PreviewItem from "../../components/product/Preview"
import { Box } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { chair03, sofa01, sofa02, sofa03 } from "../../assets/images/product"
import { GridBox } from "../../components/Box"

export const testData = [
  {
    id: 0,
    imgsrc: chair03,
    like: true,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-0152',
    productName: '릴렉스 체어 (3colors)',
    price: 4834000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
  {
    id: 1,
    imgsrc: sofa02,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[22s] HRD-210',
    productName: '1인 모던 쇼파 ',
    price: 6790000,
    colors: ['#864000']
  },
  {
    id: 2,
    imgsrc: sofa03,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-251',
    productName: '기획전 시티 쇼파',
    price: 2230000,
    colors: ['#CBC6C3']
  },
  {
    id: 3,
    imgsrc: sofa01,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-123',
    productName: '올드 가죽쇼파',
    price: 1230000,
    colors: ['#A55555']
  },
]

const ProductList = () => {

  return (
    <>
      <Box sx={{ height: 'calc(100% - 57px)', overflow: 'auto' }}>
        <Box padding='1.5rem 1rem'>
          <GridBox
            sx={{
              gridTemplateColumns: '1fr 1fr'
            }}
            columnGap='0.5rem'
            rowGap='1.5rem'
          >
            {testData.map((product: any) =>
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
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList