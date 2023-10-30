import React, { useState, } from "react"
import { Box, Button } from "@mui/material"
import { IconReviewStarBlackSmall, IconReviewStarGraySmall } from "../../assets/images/"
import { useNavigate } from "react-router-dom"
import { RectCheckboxNonChecked } from "../../styles/checkbox.styles"
import { reviewData } from "../../data"
import NoData from "../../components/NoData"
import { C999Fs12Lh20Typography, C333Fs14Fw700Ls01Typography, C999Fs12Lh18Typography, C333Fs14Fw700Typography, C999Fs14Typography, C666Fs12Lh16BoldTypography} from "../../components/Typography"

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
      {myReviewList.length > 0 ? (
        <Box sx={{p:2, pt:6}}>
          <C999Fs12Lh20Typography>작성한 리뷰({myReviewList.length})</C999Fs12Lh20Typography>
          {myReviewList.map((review, index) => (
            <Box key={index} sx={{pt:2}}>  
            <Box sx={{border:"1px solid #DADADA", display:"flex", justifyContent:"space-between", p:2, alignItems:"center", mb:3}}>
              <Box>
                <C333Fs14Fw700Ls01Typography sx={{mb:"4px"}}>{review.brand}</C333Fs14Fw700Ls01Typography>
                <C999Fs12Lh18Typography sx={{mb:1}}>{review.optionCode + " " + review.name}</C999Fs12Lh18Typography>
                {renderStarIcons(review.score)}
              </Box>
              <Box sx={{display:"flex"}}>
                <img src={review.img} alt="" />
              </Box>
            </Box>
            <C333Fs14Fw700Typography sx={{mb:1}}>상품 태그</C333Fs14Fw700Typography>
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
            <C333Fs14Fw700Typography sx={{mb:1}}>상품 후기</C333Fs14Fw700Typography>
            <Box sx={{backgroundColor:"#F7F7F7", display:"flex", py:3, px:2}}>
              <C999Fs14Typography>{review.contents}</C999Fs14Typography>
            </Box>
            <Box sx={{borderBottom:"1px solid #DADADA", pt:3, pb:"36px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Button sx={{borderRadius:0, border:"1px solid #DADADA", py:"13px", px:"43px", mr:2, color:"#666"}} onClick={() => goToModifyReview()}>
                <C666Fs12Lh16BoldTypography>수정</C666Fs12Lh16BoldTypography>
              </Button>
              <Button sx={{borderRadius:0, border:"1px solid #DADADA", py:"13px", px:"43px", color:"#666"}} onClick={() => handleDelete(index)}>
                <C666Fs12Lh16BoldTypography>삭제</C666Fs12Lh16BoldTypography>
              </Button>
            </Box>
          </Box>
          ))}
        </Box>
      ):(
        <NoData message={"작성한 리뷰가 없습니다."} linkText={"홈으로 가기"} linkTo={"/"} insideTheTab={true}/>
      )}
      
    </>
  )
}
export default ReviewList