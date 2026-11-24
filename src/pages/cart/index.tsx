import React, { useState } from "react";
import { IconXblack } from "../../assets/images";
import { Box, IconButton } from "@mui/material";
import CenterTitle from "../../components/title/CenterTitle"
import NoData from "../../components/NoData"
import { CustomCheckbox } from "../../styles/checkbox.styles"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import { useCart, productImage } from "../../store/cart"
import { LabelMediumGray7Typography, LabelMediumGray9ypography, TitleMediumBoldGray9Typography } from "../../components/Typography"

function CartPage() {
  // 장바구니 내용은 전역 스토어(src/store/cart.tsx)에서 가져온다
  const { items: data, removeItem, setCount } = useCart();

  // 선택 상태는 이 화면에서만 쓰므로 로컬 상태. 배열 위치가 아니라 장바구니 줄 ID로 관리한다.
  // "선택 해제한 ID"를 저장해서, 새로 담긴 상품은 자동으로 선택된 상태가 된다.
  const [deselected, setDeselected] = useState<Set<string>>(() => new Set());
  const isSelected = (id: string) => !deselected.has(id);
  const selectedItems = data.filter((product) => isSelected(product.id));

  // 선택된 상품을 토글하는 함수
  const toggleProduct = (id: string) => {
    setDeselected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // 선택된 상품들의 가격 합계 (단가 × 수량)
  const productPrice = selectedItems.reduce((total, product) => total + product.price * product.count, 0);
  const deliveryCharge = selectedItems.reduce((total, product) => total + product.deliveryCharge, 0);
  const totalPrice = productPrice + deliveryCharge;
  // "N개 선택상품": 선택된 상품 종류(장바구니 줄) 수. 수량 합계가 아님 (예: 2개+1개 담은 2종 → "2개")
  const totalCount = selectedItems.length;

  // + / - 버튼: 수량 1~99 범위는 스토어에서 보장
  const increaseQuantity = (id: string, count: number) => setCount(id, count + 1);
  const decreaseQuantity = (id: string, count: number) => {
    if (count > 1) setCount(id, count - 1);
  };

  const handleActiveOrder = selectedItems.length === 0;
  const navigate = useNavigate()
  const handleGoToOrder = () => {
    navigate("/order")
  }

  const deleteItem = (id: string) => {
    removeItem(id);
    setDeselected((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }
  return (
    <>
      <CenterTitle title={["장바구니"]} />
      {data.length > 0 ? (
        // 데이터가 있을 때 렌더링
        <Box sx={{minHeight:"calc(100vh - 57px)", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <Box>
            {data.map((product) => (
              <Box
                key={product.id}
                sx={{
                  p: "24px 16px",
                  display: "flex",
                  background: "#F7F7F7",
                  mb: "26px",
                  alignItems: "flex-start",
                  pb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "16px",
                    mr: 2
                  }}>
                <CustomCheckbox
                  type="checkbox"
                  checked={isSelected(product.id)}
                  onChange={() => toggleProduct(product.id)}
                />
                </Box>
                <Box sx={{flexGrow: "1"}}>
                  <Box 
                    sx={{
                    display: "flex"
                  }}>
                    <Box 
                      sx={{
                      width: "100px",
                      height: "100px",
                      mr: 2
                    }}>
                      <img
                        src={productImage(product.productId)}
                        alt={product.productName}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </Box>
                    <Box 
                      sx={{flexGrow: "1", position:"relative", height: "100px"}}>
                      <Box sx={{height: "20px", display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <Box >
                          <LabelMediumGray9ypography sx={{fontWeight:"600"}}>{product.shopName}</LabelMediumGray9ypography>
                        </Box>
                        {/* 닫기 버튼 예정 */}
                        <IconXblack onClick={() => deleteItem(product.id)} />
                      </Box>
                      <TitleMediumBoldGray9Typography>{product.productName}</TitleMediumBoldGray9Typography>
                      <Box sx={{fontSize: "12px", height: "20px", lineHeight: "20px", letterSpacing: "-0.25px", color: "#707070"}}>
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
                            onClick={() => decreaseQuantity(product.id, product.count)}>
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
                              readOnly
                              aria-label={`${product.productName} 수량`}
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
                            onClick={() => increaseQuantity(product.id, product.count)}>
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
                      <Box sx={{color: "#707070"}}>배송비</Box>
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
                  <LabelMediumGray7Typography sx={{lineHeight: "16px",}}>총 상품금액</LabelMediumGray7Typography>
                  <LabelMediumGray9ypography>{productPrice.toLocaleString()+"원"}</LabelMediumGray9ypography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mb:2}}>
                  <LabelMediumGray7Typography sx={{lineHeight: "16px",}}>배송비</LabelMediumGray7Typography>
                  <LabelMediumGray9ypography>{deliveryCharge.toLocaleString()+"원"}</LabelMediumGray9ypography>
                </Box>
              </Box>
              <Box sx={{borderTop:"1px solid #333333", py:2}}>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <TitleMediumBoldGray9Typography>결제금액</TitleMediumBoldGray9Typography>
                  <TitleMediumBoldGray9Typography>{totalPrice.toLocaleString()+"원"}</TitleMediumBoldGray9Typography>
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
