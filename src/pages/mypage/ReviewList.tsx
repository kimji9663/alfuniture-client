import React, { useState, } from "react"
import { Box, Typography, Button, FormControl } from "@mui/material"
import { deliveryProduct } from "../../assets/images/product"
import { IconReviewStarBlackSmall, IconReviewStarGraySmall } from "../../assets/images/"
import { useNavigate } from "react-router-dom"
import { RectCheckboxNonChecked } from "../../styles/checkbox.styles"
import { reviewData } from "../../data"

const ReviewList: React.FC = () => {
  const [myReviewList, setMyReviewList] = useState(reviewData)
  
  const renderStarIcons = (score: number) => {
    const maxScore = 5; // 최대 점수
    const filledStars = Math.min(score, maxScore);
    const emptyStars = maxScore - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (<IconReviewStarBlackSmall key={index} style={{marginRight:"4px"}}/>))}
        {[...Array(emptyStars)].map((_, index) => (<IconReviewStarGraySmall key={index} />))}
      </>
    );
  };

  const handleDelete = (index: number) => {
    const updatedList = [...myReviewList];
    updatedList.splice(index, 1);
    setMyReviewList(updatedList);
  };

  const navigate = useNavigate()
  
  const goToModifyReview = () => {
    navigate("/mypage/modify_review")
  }
  
  return (
    <>
      <Typography sx={{color:"#999999", fontSize:12, lineHeight:"20px", letterSpacing:"-0.25px"}}>작성한 리뷰({myReviewList.length})</Typography>
      {myReviewList.map((review, index) => (
        <Box key={index} sx={{pt:2}}>  
        <Box sx={{border:"1px solid #DADADA", display:"flex", justifyContent:"space-between", p:2, alignItems:"center", mb:3}}>
          <Box>
            <Typography sx={{color:"#333333", fontSize:14, lineHeight:"20px", letterSpacing:"0.1px", mb:"4px", fontWeight:"700"}}>{review.brand}</Typography>
            <Typography sx={{color:"#999999", fontSize:12, lineHeight:"17px", letterSpacing:"-0.25px", mb:1}}>{review.optionCode + " " + review.name}</Typography>
            {renderStarIcons(review.score)}
          </Box>
          <Box sx={{display:"flex"}}>
            <img src={review.img} alt="" />
          </Box>
        </Box>
        <Typography sx={{color:"#333333", fontSize:14, lineHeight:"20px", letterSpacing:"-0.25px", mb:1, fontWeight:"700"}}>상품 태그</Typography>
        <Box sx={{mb:2}}>
          {review.tagList.map((el, index) => (
            <RectCheckboxNonChecked key={index} sx={{ mr: 1, mb: 1 }}>
              <input
                type="checkbox"
                id={`check_${index}`}
              />
              <label htmlFor={`check_${index}`}>{el.name}</label>
            </RectCheckboxNonChecked>
          ))}
        </Box>
        <Typography sx={{color:"#333333", fontSize:14, lineHeight:"20px", letterSpacing:"-0.25px", mb:1, fontWeight:"700"}}>상품 후기</Typography>
        <Box sx={{backgroundColor:"#F7F7F7", display:"flex", py:3, px:2}}>
          <Typography sx={{color:"#999999", fontSize:14, lineHeight:"20px", letterSpacing:"-0.25px", fontWeight:"400"}}>{review.contents}</Typography>
        </Box>
        <Box sx={{borderBottom:"1px solid #DADADA", pt:3, pb:"36px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <Button sx={{borderRadius:0, border:"1px solid #DADADA", py:"13px", px:"43px", mr:2, color:"#666"}} onClick={() => goToModifyReview()}>
            <Typography sx={{color:"#666666", fontSize:12, lineHeight:"16px", letterSpacing:"-0.25px", fontWeight:"700"}}>수정</Typography>
          </Button>
          <Button sx={{borderRadius:0, border:"1px solid #DADADA", py:"13px", px:"43px", color:"#666"}} onClick={() => handleDelete(index)}>
            <Typography sx={{color:"#666666", fontSize:12, lineHeight:"16px", letterSpacing:"-0.25px", fontWeight:"700"}}>삭제</Typography>
          </Button>
        </Box>
      </Box>
      ))}
    </>
  )
}
export default ReviewList