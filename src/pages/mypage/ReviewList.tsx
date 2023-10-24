import React, { useState, } from "react"
import { Box, Typography, Button, FormControl } from "@mui/material"
import { deliveryProduct } from "../../assets/images/product"
import { IconReviewStarBlackSmall, IconReviewStarGraySmall } from "../../assets/images/"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"

const RectCheckbox = styled(FormControl)(({ }) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '6px 8px',
    border: '1px solid #DADADA',
    fontSize: '12px',
    color: '#999999',
  }
}))

const reviewList = [
  {
    date: '2023.02.23',
    img: deliveryProduct,
    brand: 'Aerobiey',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
    score: 4,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
      {
        name: "북유럽",
      },
      {
        name: "분위기 있어요",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요. 홈페이지에 안내된 것보다 조금더 늦어질 것같다는 안내는 업체에서 미리 주셨구요. 배송에 관한 문의전화를 했을때도 친절히 안내해주셨습니다."
  },
  {
    date: '2023.02.23',
    img: deliveryProduct,
    brand: 'Aerobiey',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
    score: 3,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요. 홈페이지에 안내된 것보다 조금더 늦어질 것같다는 안내는 업체에서 미리 주셨구요. 배송에 관한 문의전화를 했을때도 친절히 안내해주셨습니다."
  },
  {
    date: '2023.02.23',
    img: deliveryProduct,
    brand: 'Aerobiey',
    optionCode: '[23s] AB-045',
    name: '블랙 모던 소파',
    score: 5,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
      {
        name: "북유럽",
      },
      {
        name: "분위기 있어요",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요."
  },
]



const ReviewList: React.FC = () => {
  const [myReviewList, setMyReviewList] = useState(reviewList)
  
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
            <RectCheckbox key={index} sx={{ mr: 1, mb: 1 }}>
              <input
                type="checkbox"
                id={`check_${index}`}
              />
              <label htmlFor={`check_${index}`}>{el.name}</label>
            </RectCheckbox>
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