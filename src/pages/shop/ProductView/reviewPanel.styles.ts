import { styled } from "@mui/material/styles"
import { Box, ButtonGroup } from "@mui/material"
import { PrimaryButton } from "../../../styles/buttons.styles"

export const AverageGrade = styled(Box)(() => ({
  textAlign: 'center',

  '& .now, & .all': {
    fontWeight: 500,
  },
  '& .now': {
    color: '#242223',
    fontSize: '3rem',
  },
  '& .all': {
    color: '#E4E4E4',
    fontSize: '2rem',
  },
  '& .grade_star': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .grade_star .MuiSvgIcon-root': {
    width: '18px', 
    height: '18px', 
    color: '#F95029'
  }
}))

export const DetailGrade = styled(Box)(() => ({
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4px',
  },
  '& .grade_number': {
    color: '#999',
    fontSize: '.75rem',
  },
  '& .grade_pipe': {
    position: 'relative',
    display: 'block',
    flex: '1 1 auto',
    marginLeft: '4px',
    height: '8px',
    backgroundColor: '#eee',
  },
  '& .grade_pipe > span': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#242223',
  },
}))

export const PhotoReviewWrap = styled(Box)(() => ({
  marginTop: '16px',
  
  '& .swiper-slide': {
    width: '100px',
    height: '100px',
    overflow: 'hidden',
  },
  '& .swiper-slide > img': {
    width: '100%',
  },
}))

export const ReviewerInfo = styled(Box)(() => ({
  '& .nickname_date': {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  '& .nickname_date .nickname': {
    color: '#000',
    fontSize: '.875rem', 
    fontWeight: 'bold',
  },
  '& .nickname_date .date': {
    color: '#000',
    fontSize: '.75rem',
  },
  '& .grade_star': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .grade_star .MuiSvgIcon-root': {
    width: '14px', 
    height: '14px', 
    color: '#242223'
  }
}))

export const UserPhotoWrap = styled(Box)(() => ({
  position: 'relative', 

  '& .swiper-wrapper': {
    height: 'calc(100vw - 32px)',
  },
  '& img': { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
  },
  '& .pagination': {
    position: 'absolute', 
    top: 16, 
    right: 12, 
    zIndex: 1, 
    padding: '3px 11px',
    backgroundColor: '#000', 
    color: '#fff',
    fontSize: '.75rem',
  }
}))

export const ProductOptions = styled(Box)(() => ({
  '& .title': {
    flex: '0 0 66px', 
    fontSize: '.75rem', 
    color: '#666', 
    fontWeight: 'bold',
  },
  '& .options': {
    display: 'flex', 
  },
  '& .options > span': {
    marginRight: '20px',
    color: '#BDBDBD', 
    fontSize: '.75rem',
  },
  '& .hash_tags': {
    display: 'flex', 
    flexWrap: 'wrap', 
    color: '#999', 
    fontSize: '.75rem', 
  },
  '& .hash_tags > span': { 
    marginBottom: '8px', 
    marginRight: '8px',
    padding: '2px 4px', 
    border: '1px solid #BDBDBD', 
  }
}))