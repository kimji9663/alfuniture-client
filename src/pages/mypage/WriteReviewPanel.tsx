import React, { useState, useRef } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { IconReviewStarBlackSmall, IconReviewStarGraySmall } from "../../assets/images/";
import { RectCheckbox } from "../../styles/checkbox.styles";
import { WriteReviewTagData } from "../../data";
import { TitleSmallBoldGray9Typography } from "../../components/Typography";
import { PrimaryButton } from "../../styles/buttons.styles"
import { NaviWrap } from "../../components/navigationbar.styles"

interface Tag {
  name: string;
  checked: boolean;
}

const WriteReviewPanel: React.FC = () => {
  const initialTags: Tag[] = WriteReviewTagData.map(tag => ({ ...tag, checked: false }));
  const [reviewText, setReviewText] = useState<string>("");
  const [rating, setRating] = useState(0);
  const [userPhoto, setUserPhoto] = useState<string[]>([])
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  let photoUrl: string | undefined
  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files){
      return
    }

    const blob = new Blob([e.target.files[0]], {type: "image/png"})
    photoUrl = URL.createObjectURL(blob)
    setUserPhoto([photoUrl])
  }

  const handleClickImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedTags = tags.map((tag, i) =>
      i === index ? { ...tag, checked: !tag.checked } : tag
    );
    setTags(updatedTags);
  };
  
  function checkValidate(){
    if(rating === 0 ){
      console.log("만족도를 선택하세요")
      return
    }
    if(userPhoto.length === 0 ){
      console.log("사진을 선택하세요")
      return
    }
    if(reviewText.length === 0 ){
      console.log("후기를 작성해주세요")
      return
    }
    const checkedTags = tags.filter(tag => tag.checked);
    if(checkedTags.length === 0){
      console.log("상품 태그를 선택해주세요")
      return
    }
  }

  return (
    <>
      <Box sx={{p:2}}>
        <Box sx={{ mt: 4 }}>
          <TitleSmallBoldGray9Typography sx={{mb: 1}}>
            상품에 대한 만족도
          </TitleSmallBoldGray9Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {[0, 1, 2, 3, 4].map((starIndex) => (
              <Box
                key={starIndex}
                onTouchStart={() => setRating(starIndex + 1)}
              >
                {starIndex + 1 <= rating ? <IconReviewStarBlackSmall style={{ width:"45px", height:"45px" }} /> : <IconReviewStarGraySmall style={{ width:"45px", height:"45px" }} />}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <TitleSmallBoldGray9Typography sx={{mb: 1}}>
            상세 사진
          </TitleSmallBoldGray9Typography>
          <Box sx={{ }}>
            <Box sx={{ mt: 2, display: "flex", position: "relative" }}>
              <Box sx={{ minHeight: "113px", width:"100%" }}>
                {userPhoto.length < 2 && (
                  <Button sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    minHeight: "113px",
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    backgroundColor: "#F7F7F7",
                    color: "#BDBDBD",
                    border: "0.5px solid #BDBDBD",
                  }}
                  >
                    사진 추가
                    <input
                      type="file"
                      accept="image/jpg,image/png,image/jpeg,image/gif"
                      onChange={handleUploadPhoto}
                      style={{
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Button>
                )}
                {userPhoto.map((photo, index) => (
                  <Box
                    key={index} sx={{ width:"100%", display:"flex"}}
                    onClick={handleClickImage}
                  >
                    <img src={photo} alt="" style={{ zIndex:10, objectFit:"cover", width:"100%"}}/>
                  </Box>
                ))}
              </Box>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleUploadPhoto}
                style={{
                  display: "none",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          <TitleSmallBoldGray9Typography sx={{ mb: 2 }}>
            상품 후기
          </TitleSmallBoldGray9Typography>
          <TextareaAutosize 
            value={reviewText}
            onChange={handleReviewTextChange}
            minRows={2}
            placeholder="사이즈 / 재질 / 색감 등 상품 디테일을 작성해주세요."
            style={{
            width: "100%",
            border: "1px solid #BDBDBD",
            fontSize: ".75rem",
            padding: "14px",
            boxSizing: "border-box",
          }}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <TitleSmallBoldGray9Typography sx={{ mb: 2 }}>
            상품 태그 선택
          </TitleSmallBoldGray9Typography>
          
            {tags.map((el, index) => (
              <RectCheckbox key={index} sx={{ ml: 1, mb: 1 }}>
                <input
                  type="checkbox"
                  id={`check_${index}`}
                  checked={el.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`check_${index}`}>{el.name}</label>
              </RectCheckbox>
          ))}
        
        </Box>
      </Box>
      <NaviWrap>
        <PrimaryButton sx={{width:"100%"}} onClick={() => {
          checkValidate()
        }}>작성완료</PrimaryButton>
      </NaviWrap>
    </>
  );
};

export default WriteReviewPanel;

