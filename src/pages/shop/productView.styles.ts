import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"
import { OutlineButton, PrimaryButton } from "../../styles/buttons.styles"

export const ProductMainInfo = styled(Box)(() => ({
  '& > .product_brand': {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  '& > .product_brand .brand_name': {
    fontSize: '.75rem',
    color: '#666666',
  },

  '& > .product_title': {
    display: 'flex', 
    alignItems: 'center',
  },
  '& > .product_title > p': {
    color: '#333',
    fontWeight: 'bold',
  },
  '& > .product_title .color_info': {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '24px',
    padding: '2px 8px',
    background: '#F1F1F1',
  },
  '& > .product_title .color_info .text': {
    marginRight: '4px',
    fontSize: '.75rem',
    fontWeight: 'bold',
    color: '#666666',
  },
  '& > .product_title .color_info .color': {
    width: '10px',
    height: '10px',
    marginLeft: '4px',
  },
  '& > .product_price': {
    marginTop: '8px',

    '& .price': {
      color: '#333',
      fontSize: '.875rem',
      fontWeight: 'bold',
    },
    '& .fee': {
      marginLeft: '8px', 
      color: '#999', 
      fontSize: '.75rem',
    },
  },
  '& > .product_delivery': {
    display: 'flex',
    justifyContent: 'space-between',
    '& > .MuiBox-root': {
      flex: '1 1 50%',
    },
    '.delivery_title': {
      color: '#333', 
      fontSize: '.875rem',
    },
    '.delivery_info': {
      marginTop: '5px',
    },
    '.delivery_info > span': {
      fontSize: '.75rem',
    }
  }
}))

export const ProductViewTabs = styled(Box)(() => ({
  borderBottom: '1px solid #EEEEEE', 
  borderColor: 'divider',
  '.MuiTab-root': {
    color: '#999',
  },
  '.MuiTab-root.Mui-selected': { 
    color: '#333', 
    fontWeight: 'bold', 
  },
  '.MuiTabs-indicator': { 
    height: '1px', 
    backgroundColor: '#333' 
  },
}))

export const BrandInfo = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
  border: '1px solid #DADADA',
  borderRadius: 0,
  textAlign: 'left'
}))

export const OrderButton = styled(PrimaryButton)(() => ({
  padding: '.825rem .5rem',
  fontSize: '.875rem',
  borderRadius: 0,
}))

export const DetailView = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  
  '& img': { 
    display: 'block',
    width: '100%',
  }
}))

export const CoverBox = styled(Box)(() => ({
  padding: '40px 16px 16px',
  position: 'absolute', 
  bottom: 0, 
  width: '100%', 
  background: 'linear-gradient(#ffffff00 0%, #fff6 15%, #ffffffbf 30%, #ffffff 50%)',
  boxSizing: 'border-box',
}))

export const MoreButton = styled(OutlineButton)(() => ({
  padding: '15px 8px',
  borderRadius: 0,
  fontSize: '1rem',
}))

export const MoreInfomation = styled(Box)(() => ({
  padding: '16px 16px 40px',
  
  '& > button': {
    justifyContent: 'space-between',
    padding: '8px',
    borderRadius: 0,
    borderBottom: '1px solid #DADADA',
    color: '#333',
    fontSize: '.875rem',
  }
}))

export const ViewTitle = styled(Box)(() => ({
  color: '#000',
  fontSize: '.875rem',
  fontWeight: 'bold',
  '& > span': {
    color: '#868686',
    fontWeight: 'normal',
  },
}))

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
    padding: '0 8px',
    backgroundColor: '#000', 
    color: '#fff',
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