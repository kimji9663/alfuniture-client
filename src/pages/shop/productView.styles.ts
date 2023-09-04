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

}))

export const DetailGrade = styled(Box)(() => ({
  
}))