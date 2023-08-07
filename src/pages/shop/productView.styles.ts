import { css } from "@emotion/css"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

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
    '& .button': {
      fontSize: '.875rem',
    },
  }
}))