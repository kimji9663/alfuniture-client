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
  '& > .product_title .brand_name': {
    fontSize: '.75rem',
  },

  '& > .product_title': {
    display: 'flex', 
    alignItems: 'center',
  },
  '& > .product_title .color_info': {
    padding: '2px 8px',
    background: '#F1F1F1',
  },
  '& > .product_title .color_info > span': {
    display: 'inline-block',
  },
  '& > .product_title .color_info .text': {
    fontSize: '.75rem',
  },
  '& > .product_price': {
    '& .price': {
      fontSize: '.875rem',
    },
    '& .fee': {
      ml: '8px', 
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

  }
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