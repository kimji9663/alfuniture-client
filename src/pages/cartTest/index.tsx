import React, { useState, useEffect } from 'react';
import { sofa01, table01 } from '../../assets/images/product';
import { Box, Typography, Checkbox, Input, IconButton, Button } from '@mui/material';
import CenterTitle from "../../components/title/CenterTitle"
import NoData from "../../components/NoData"
import { CustomCheckbox } from "./index.styles"

interface cartData {
  imgsrc: any,
  shopName: string,
  modelName: string,
  productName: string,
  option1: string,
  option2: any,
  price: number,
  count: number,
  deliveryCharge: number,
  coupon: Array<object>,
}
const testData = [
  {
    imgsrc: sofa01,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '카멜피아',
    option1: '베이지',
    option2: '라탄',
    count: 2,
    price: 240000,
    deliveryCharge: 100000,
    coupon: [
      {
        name: '쿠폰1',
        discount: 14000,
      },
    ],
  },
  {
    imgsrc: table01,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '모닝 데스크',
    option1: '옐로우 우든',
    option2: null,
    count: 1,
    price: 300000,
    deliveryCharge: 0,
    coupon: [],
  },
];

function CartPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [data, setData] = useState<cartData[]>([]);
  const message = "장바구니에 담은 상품이 없습니다.";
  const linkText = "상품 보러가기";
  const linkTo = "/shop";

  useEffect(() => {
    // 초기 데이터를 기존 데이터에 추가
    setData([...data, ...testData]);
  }, []); 

  // 선택된 상품을 토글하는 함수
  const toggleProduct = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // 선택된 상품들의 가격을 합산하는 함수
  const calculateTotalPrice = () => {
    return data
      .filter((product, index) => selectedProducts.includes(index))
      .reduce((total, product) => total + product.price, 0);
  };

  // + 버튼 클릭 시 수량 증가
  const increaseQuantity = (index: number) => {
    const updatedData = [...data];
    updatedData[index].count += 1;
    setData(updatedData);
  };

  // - 버튼 클릭 시 수량 감소
  const decreaseQuantity = (index: number) => {
    const updatedData = [...data];
    if (updatedData[index].count > 1) {
      updatedData[index].count -= 1;
      setData(updatedData);
    }
  };

  return (
    <>
      <CenterTitle title={["장바구니"]} />
      {data.length > 0 ? (
        // 데이터가 있을 때 렌더링
        <>
          {testData.map((product, index) => (
            <Box
              key={index}
              sx={{
                p: '24px 16px',
                display: 'flex',
                background: '#F7F7F7',
                mb: 1,
                alignItems: 'flex-start',
                pb: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  width: "16px",
                  mr: 2
                }}>
              <CustomCheckbox
                type="checkbox"
                checked={selectedProducts.includes(index)}
                onChange={() => toggleProduct(index)}
              />
              </Box>
              <Box sx={{flexGrow: "1"}}>
                <Box 
                  sx={{
                  display: 'flex'
                }}>
                  <Box 
                    sx={{
                    width: '100px',
                    height: '100px',
                    mr: 2
                  }}>
                    <img
                      src={product.imgsrc}
                      alt={product.productName}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box 
                    sx={{flexGrow: "1", position:"relative", height: "100px"}}>
                    <Box sx={{height: "20px"}}>
                      <Box sx={{fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.25px"}}>{product.shopName}</Box>
                      {/* 닫기 버튼 예정 */}
                    </Box>
                    <Box sx={{fontSize: "16px", lineHeight: "23px", letterSpacing: "0.15px", height: "23px"}}>{product.productName}</Box>
                    <Box sx={{fontSize: "12px", height: "20px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999"}}>
                      <span style={{marginRight: "4px"}}>{product.option1}</span>
                      <span style={{fontSize: "14px", marginRight: "4px"}}>|</span>
                      {product.option2 && 
                      <span>
                        <span style={{marginRight: "4px"}}>{product.option2}</span>
                        <span style={{fontSize: "14px", marginRight: "4px"}}>|</span>
                      </span>}
                      <span><span>1</span>개</span>
                    </Box>
                    <Box sx={{position:"absolute", bottom: "0", display: "flex", justifyContent: "space-between", width: "100%"}}>
                      <Box sx={{display: "flex", height: "20px"}}>
                        <IconButton 
                          sx={{fontSize: "16px",
                            color: "#666666",
                            background: "#EEEEEE",
                            width: "20px",
                            height: "20px",
                            fontWeight: "200"}}
                          onClick={() => decreaseQuantity(index)}>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "45%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                -
                              </span>
                          </IconButton>
                          <input
                            value={product.count}
                            style={{
                              padding: "0",
                              fontSize: "12px",
                              height: "20px",
                              width: "26px",
                              textAlign: "center", 
                              verticalAlign: "middle",
                              margin: "0 7px",
                              border: "0.5px solid #E4E4E4",
                            }}
                          />
                        <IconButton 
                          sx={{fontSize: "16px",
                            color: "#666666",
                            background: "#EEEEEE",
                            width: "20px",
                            height: "20px",
                            fontWeight: "200"}}
                          onClick={() => increaseQuantity(index)}>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "45%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                +
                              </span>
                          </IconButton>
                      </Box>
                      <Box sx={{fontSize: "12px",
                            height: "16px",
                            letterSpacing: "-0.25px",
                            fontWeight: "bold"
                          }}>
                          <span>{product.price.toLocaleString()}</span>원
                        </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{fontSize: "12px",
                            height: "52px",
                            letterSpacing: "-0.25px",
                            pt: 1,
                            mt: 3,
                            borderTop: "1px solid #DADADA"                            
                          }}>
                  <Box 
                    sx={{display: "flex",
                      height: "20px",
                      justifyContent: "space-between",
                      mb: "4px"
                    }}>
                    <Box sx={{color: "#999999"}}>배송비</Box>
                    <Box>
                    {product.deliveryCharge === 0 ? (
                      <span>무료배송</span>
                      ) : (
                        <>
                          <span>{product.deliveryCharge.toLocaleString()}</span>
                          <span>원</span>
                        </>
                      )}
                    </Box>
                  </Box>
                  <Box 
                    sx={{display: "flex",
                      height: "20px",
                      justifyContent: "space-between"
                    }}>
                    <Box sx={{color: "#999999"}}>쿠폰사용</Box>
                    <Box >
                      {product.coupon.length > 0 ? (
                        <Box sx={{color: "#EC4343"}}>
                          <span>
                            {product.coupon.map((coupon: any) => (
                              <span key={coupon.name}>
                                -{coupon.discount.toLocaleString()}
                              </span>
                            ))}
                          </span>
                          <span>원 할인</span>
                          <Button
                            sx={{
                              color: "#666666",
                              background: "#DADADA",
                              heigth: "16px",
                              width: "32px",
                              fontSize: "8px",
                              letterSpacing: "0.4px",
                              p: 0,
                              borderRadius: 0,
                              minWidth: "32px",
                              ml: "4px",
                            }}
                          >
                            취소
                          </Button>
                        </Box>
                      ) : (
                        <Box sx={{display: "flex"}}>
                          <Box sx={{color: "#666666", fontSize: "12px", letterSpacing: "0.4px"}}>선택쿠폰없음</Box>
                          <Button
                              sx={{
                                color: "#FAFAFA",
                                background: "#242223",
                                heigth: "16px",
                                fontSize: "7px",
                                letterSpacing: "0.4px",
                                p: 0,
                                borderRadius: 0,
                                minWidth: "32px",
                                ml: "4px",
                                px: 1
                              }}
                            >
                              쿠폰선택하기
                            </Button>
                          </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
          <Box>Total Price: {calculateTotalPrice()}</Box>
        </>
        //
      ) : (
        // 데이터가 없을 때 렌더링
        <NoData  message={message} linkText={linkText} linkTo={linkTo}/>
      )}
      
    </>
  );
}


export default CartPage;
