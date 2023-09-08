import React, { useState, useEffect  } from "react"
import CenterTitle from "../../components/title/CenterTitle"
import { sofa01, table01 } from "../../assets/images/product"
import NoData from "../../components/NoData"

export const data = [
  {
    imgsrc: sofa01,
    like: true,
    likeCount: 556,
    shopName: 'One Rain',
    modelName: '[3Color] OR-205',
    productName: '원레인 4인용 소파',
    price: 3230000,
    colors: ['#1B464D', '#192552', '#4414CD']
  },
  {
    imgsrc: table01,
    like: false,
    likeCount: 556,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '알프든 옐로우소파',
    price: 1430000,
    colors: ['#BC862E']
  },
]

const Cart = () => {
  const [data, setData] = useState(null);

  const message = "장바구니에 담은 상품이 없습니다.";
  const linkText = "상품 보러가기";
  const linkTo = "/shop";
  return (
    <>
      <CenterTitle title={["장바구니"]} />
      {data ? (
        // 데이터가 있을 때 렌더링
        <div>데이터가 있을 때 렌더링</div>
      ) : (
        // 데이터가 없을 때 렌더링
        <NoData  message={message} linkText={linkText} linkTo={linkTo}/>
      )}
    </>
  );
};

export default Cart;