import React, { useState, useRef } from "react";
import { Box, Typography, Button, TextareaAutosize, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles"
import { IconReviewStarBlackSmall, IconReviewStarGraySmall } from "../../assets/images/";

const RectCheckbox = styled(FormControl)(({ }) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '6px 14px',
    border: '1px solid #DADADA',
    fontSize: '14px',
    color: '#999999',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

const WriteReviewPanel: React.FC = () => {

  const tagList = [
    {
      name: '생각보다 커요',
    },
    {
      name: '적당해요',
    },
    {
      name: '조금 작아요',
    },
    {
      name: '색감 예뻐요',
    },
    {
      name: '분위기 있어요',
    },
    {
      name: '실용적이에요',
    },
    {
      name: '무거워요',
    },
    {
      name: '가벼워요',
    },
    {
      name: '선물하기 좋아요',
    },
  ]

  const [rating, setRating] = useState(0);
  const [userPhoto, setUserPhoto] = useState<string[]>([])
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

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ color: "#333333", fontSize: 14, lineHeight: "20px", letterSpacing: "-0.25px", mb: 1, fontWeight: "700" }}>
          상품에 대한 만족도
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[0, 1, 2, 3, 4].map((starIndex) => (
            <Box
              key={starIndex}
              onTouchStart={() => setRating(starIndex + 1)}
              // onTouchCancel={() => setRating(0)}
            >
              {starIndex + 1 <= rating ? <IconReviewStarBlackSmall style={{ width:"45px", height:"45px" }} /> : <IconReviewStarGraySmall style={{ width:"45px", height:"45px" }} />}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ color: "#333333", fontSize: 14, lineHeight: "20px", letterSpacing: "-0.25px", mb: 1, fontWeight: "700" }}>
          상세 사진
        </Typography>
        <Box sx={{ }}>
          <Box sx={{ mt: 2, display: "flex", position: 'relative' }}>
            <Box sx={{ minHeight: "113px", width:"100%" }}>
              {userPhoto.length < 2 && (
                <Button sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  minHeight: "113px",
                  width: '100%',
                  height: '100%',
                  borderRadius: 0,
                  backgroundColor: '#F7F7F7',
                  color: '#BDBDBD',
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
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
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
        <Typography sx={{ color: "#333333", fontSize: 14, lineHeight: "20px", letterSpacing: "-0.25px", mb: 2, fontWeight: "700" }}>
          상품 후기
        </Typography>
        <TextareaAutosize 
          minRows={2}
          placeholder="사이즈 / 재질 / 색감 등 상품 디테일을 작성해주세요."
          style={{
          width: '100%',
          border: '1px solid #BDBDBD',
          fontSize: '.75rem',
          padding: '14px',
          boxSizing: 'border-box',
        }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ color: "#333333", fontSize: 14, lineHeight: "20px", letterSpacing: "-0.25px", mb: 2, fontWeight: "700" }}>
          상품 태그 선택
        </Typography>
        
          {tagList.map((el, index) => (
            <RectCheckbox key={index} sx={{ ml: 1, mb: 1 }}>
              <input
                type="checkbox"
                id={`check_${index}`}
              />
              <label htmlFor={`check_${index}`}>{el.name}</label>
            </RectCheckbox>
        ))}
      
      </Box>
    </>
  );
};

export default WriteReviewPanel;
