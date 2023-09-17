import { styled } from "@mui/material/styles"
import { Box, Button, FormControl } from "@mui/material"
import { PrimaryButton } from "../../../styles/buttons.styles"

interface ISelectProps {
  isopen: string
}

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

export const ViewTitle = styled(Box)(() => ({
  color: '#000',
  fontSize: '.875rem',
  fontWeight: 'bold',
  '& > span': {
    color: '#868686',
    fontWeight: 'normal',
  },
}))

export const OptionSelectType = styled(Box)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: 0,
  },
  '& .MuiSelect-select': {
    padding: '14.5px 14px',
    fontSize: '.875rem',
  },
}))

export const OutlinedSelect = styled(Box)<ISelectProps>((props) => ({
  position: 'relative',
  '&::before': {
    content: '"⌵"',
    position: 'absolute',
    top: '8px',
    right: '16px',
    color: '#DADADA',
    fontSize: '20px',
  },
  '& > .MuiButton-root': {
    padding: '6px 16px',
    minHeight: 52,
    borderRadius: 0,
    border: '1px solid #DADADA',
    justifyContent: 'start',
    color: '#999'
  },
  '& > .MuiButton-root > img': {
    marginRight: '4px',
  },
  '& .dropmenu': {
    display: props.isopen === 'true' ? 'block' : 'none',
    marginTop: '-1px',
    padding: 0,
    color:'#999999',
    border: '1px solid #dadada',
  },
  '& .dropmenu > li': {
    padding: 0,
  },
  '& .dropmenu > li:not(:last-of-type)': {
    borderBottom: '1px solid #dadada',
  },
  '& .dropmenu .MuiListItemButton-root': {
    padding: '13.5px 16px',
  },
  '& .dropmenu .MuiListItemButton-root > img': {
    marginRight: '4px',
  }
}))

export const OutlinedCheckbox = styled(FormControl)(() => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    display: 'flex',
    alignItems: 'center',
    padding: '6.5px 12px',
    borderRadius: '18px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
  '& label > img': {
    marginRight: '4px',
  },
}))

