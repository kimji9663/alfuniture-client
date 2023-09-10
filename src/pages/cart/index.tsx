import React, { useState, useEffect  } from "react"
import CenterTitle from "../../components/title/CenterTitle"
import { sofa01, table01 } from "../../assets/images/product"
import NoData from "../../components/NoData"
import ListItem from "./ListItem";

interface cartData {
  imgsrc: any,
  shopName: string,
  modelName: string,
  productName: string,
  option1: string,
  option2: string,
  price: Number,
  deliveryCharge: Number,
  coupon: Array<object>,
}


const Cart = () => {
  const [data, setData] = useState<cartData[]>([]);
  const message = "장바구니에 담은 상품이 없습니다.";
  const linkText = "상품 보러가기";
  const linkTo = "/shop";

  const testData: never[] = [
    // {
    //   imgsrc: sofa01,
    //   shopName: "ALFDEN",
    //   modelName: "[23Series] AD-388",
    //   productName: "카멜피아",
    //   option1: "베이지",
    //   option2: "라탄",
    //   price: 240000,
    //   deliveryCharge: 100000,
    //   coupon: [{
    //     name: "쿠폰1",
    //     discount: 14000
    //   }],
    // },
    // {
    //   imgsrc: table01,
    //   shopName: "ALFDEN",
    //   modelName: "[23Series] AD-388",
    //   productName: "모닝 데스크",
    //   option1: "옐로우 우든",
    //   option2: "",
    //   price: 300000,
    //   deliveryCharge: 0,
    //   coupon: [],
    // },
  ]
  useEffect(() => {
    setData([...data, ...testData]);
  }, []); 

  return (
    <>
      <CenterTitle title={["장바구니"]} />
      {data.length > 0 ? (
        // 데이터가 있을 때 렌더링
        data.map((item, index) => (
          <ListItem key={index} item={item} isLastItem={index === data.length - 1}/>
        ))
      ) : (
        // 데이터가 없을 때 렌더링
        <NoData  message={message} linkText={linkText} linkTo={linkTo}/>
      )}
    </>
  );
};

export default Cart;