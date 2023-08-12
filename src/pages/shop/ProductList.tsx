import React from "react"
import PreviewItem from "../../components/product/Preview"
import ListItem from "../../components/product/ListItem"

const ProductList = () => {

  const testData = [
    {
      imgsrc: '',
      like: true,
      likeCount: 556,
      shopName: 'One Rain',
      modelName: '[3Color] OR-205',
      productName: '원레인 4인용 소파',
      price: 3230000,
      colors: ['#1B464D', '#192552', '#4414CD']
    }
  ]

  return (
    <>
      {/* 가구리스트 */}
      {testData.map((product: any) => 
        <ListItem
          imgsrc={product.imgsrc}
          shopName={product.shopName}
          modelName={product.modelName}
          productName={product.productName}
          price={product.price}
          colors={product.colors}
        />
      )}
    </>
  )
}
export default ProductList