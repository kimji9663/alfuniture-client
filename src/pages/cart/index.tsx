import React, { useState, useEffect } from 'react';
import { IconXblack } from '../../assets/images';
import { Box, IconButton } from '@mui/material';
import CenterTitle from "../../components/title/CenterTitle"
import NoData from "../../components/NoData"
import { CustomCheckbox } from "../../styles/checkbox.styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import { cartProductData } from "../../data"
import { LabelMediumGray7Typography, LabelMediumGray9ypography, TitleMediumBoldGray9Typography } from "../../components/Typography"

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
  coupon?: Array<object>,
}


function CartPage() {
  const [data, setData] = useState<cartData[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [selectedProducts, setSelectedProducts] = useState<number[]>(
    Array(cartProductData.length).fill(true) // 초기에 모든 데이터 항목을 선택함
  );
  useEffect(() => {
    // 초기 데이터를 기존 데이터에 추가
    setData([...data, ...cartProductData]);
  }, []); 

  useEffect(() => {
    const length = cartProductData.length;
    const indexArray = Array.from({ length }, (_, index) => index);
  
    setSelectedProducts(indexArray);
  }, []);

  useEffect(() => {
    setTotalCount(calculateTotalCount());
  }, [selectedProducts]);
  

  // 선택된 상품을 토글하는 함수
  const toggleProduct = (productId: number) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  // 선택된 상품들의 가격을 합산하는 함수
  const calculateProductPrice = () => {
    return data
      .filter((product, index) => selectedProducts.includes(index))
      .reduce((total, product) => total + product.price * product.count, 0); // 가격에 수량을 곱해 총 가격 계산
  };

  const calculateDeliveryCharge = () => {
    return data
      .filter((product, index) => selectedProducts.includes(index))
      .reduce((total, product) => total + product.deliveryCharge, 0);
  };

  const calculateTotalPrice = () => {
    return data
      .filter((product, index) => selectedProducts.includes(index))
      .reduce((total, product) => total + product.price * product.count + product.deliveryCharge, 0);
  };
  
  // + 버튼 클릭 시 수량 증가
  const increaseQuantity = (index: number) => {
    const updatedData = [...data];
    updatedData[index].count += 1;
    setData(updatedData);
    setTotalCount(calculateTotalCount());
  };
  
  // - 버튼 클릭 시 수량 감소
  const decreaseQuantity = (index: number) => {
    const updatedData = [...data];
    if (updatedData[index].count > 1) {
      updatedData[index].count -= 1;
      setData(updatedData);
      setTotalCount(calculateTotalCount());
    }
  };
  
  const calculateTotalCount = () => {
    return data
      .filter((product, index) => selectedProducts.includes(index))
      .reduce((total, product) => total + product.count, 0);
  }

  const handleActiveOrder = selectedProducts.length === 0;
  const navigate = useNavigate()
  const handleGoToOrder = () => {
    navigate('/order')
  }

  const deleteItem = (index: number) => {

    if (index >= 0 && index < data.length) {
      const updatedItems = [...data];
      updatedItems.splice(index, 1);

      // 선택된 상품 목록에서 해당 인덱스 제거
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(index, 1);

      // 데이터 배열과 선택된 상품 목록 상태 업데이트
      setData(updatedItems);
      setSelectedProducts(updatedSelectedProducts);
      setTotalCount(calculateTotalCount());
    }
  }
  return (
    <>
      <CenterTitle title={["장바구니"]} />
      {data.length > 0 ? (
        // 데이터가 있을 때 렌더링
        <Box sx={{minHeight:"calc(100vh - 57px)", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <Box>
            {data.map((product, index) => (
              <Box
                key={index}
                sx={{
                  p: '24px 16px',
                  display: 'flex',
                  background: '#F7F7F7',
                  mb: "26px",
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
                      <Box sx={{height: "20px", display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <Box >
                          <LabelMediumGray9ypography sx={{fontWeight:"600"}}>{product.shopName}</LabelMediumGray9ypography>
                        </Box>
                        {/* 닫기 버튼 예정 */}
                        <IconXblack onClick={() => deleteItem(index)} />
                      </Box>
                      <TitleMediumBoldGray9Typography>{product.productName}</TitleMediumBoldGray9Typography>
                      <Box sx={{fontSize: "12px", height: "20px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#999999"}}>
                        <span style={{marginRight: "8px"}}>{product.option1}</span>
                        <span style={{fontSize: "14px", marginRight: "8px"}}>|</span>
                        {product.option2 && 
                        <span>
                          <span style={{marginRight: "8px"}}>{product.option2}</span>
                          <span style={{fontSize: "14px", marginRight: "8px"}}>|</span>
                        </span>}
                        <span><span>{product.count}</span>개</span>
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
                                backgroundColor:"#F7F7F7"
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
                  </Box>
                </Box>
              </Box>
            ))}
            <Box sx={{pt:2, px:2, pb:5}}>
              <Box sx={{borderTop:"1px solid #DADADA", py:3}}>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mb:2}}>
                  <LabelMediumGray7Typography sx={{lineHeight: '16px',}}>총 상품금액</LabelMediumGray7Typography>
                  <LabelMediumGray9ypography>{calculateProductPrice().toLocaleString()+"원"}</LabelMediumGray9ypography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mb:2}}>
                  <LabelMediumGray7Typography sx={{lineHeight: '16px',}}>배송비</LabelMediumGray7Typography>
                  <LabelMediumGray9ypography>{calculateDeliveryCharge().toLocaleString()+"원"}</LabelMediumGray9ypography>
                </Box>
              </Box>
              <Box sx={{borderTop:"1px solid #333333", py:2}}>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <TitleMediumBoldGray9Typography>결제금액</TitleMediumBoldGray9Typography>
                  <TitleMediumBoldGray9Typography>{calculateTotalPrice().toLocaleString()+"원"}</TitleMediumBoldGray9Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
            <NaviWrap className="single">
              <PrimaryButton 
                disabled={handleActiveOrder}
                onClick={handleGoToOrder}
              >
                {totalCount+"개 선택상품 구매하기"}
              </PrimaryButton>
            </NaviWrap>
          </Box>
          
        </Box>
        //
      ) : (
        // 데이터가 없을 때 렌더링
        <NoData  message={"장바구니에 담은 상품이 없습니다."} linkText={"상품 보러가기"} linkTo={"/shop"}/>
      )}
      
    </>
  );
}


export default CartPage;
