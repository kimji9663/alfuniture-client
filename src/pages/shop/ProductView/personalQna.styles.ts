import { styled } from "@mui/material/styles"
import { Box, ButtonGroup } from "@mui/material"
import { PrimaryButton } from "../../../styles/buttons.styles"

export const QnaButton = styled(PrimaryButton)(() => ({
  padding: '1.11rem .5rem',
  fontSize: '.875rem',
  borderRadius: 0,
}))

export const CustomerService = styled(Box)(() => ({
  '& .title': {
    flex: '0 0 66px', 
    fontSize: '.75rem', 
    color: '#666', 
    fontWeight: 'bold',
  },
  '& .information': {
    display: 'flex', 
    flexWrap: 'wrap',
  },
  '& .information > span': {
    margin: '0 20px 4px 0',
    color: '#666', 
    fontSize: '.75rem',
  },
}))

export const SellerInfomation = styled(Box)(() => ({
  '& .title': {
    flex: '0 0 120px', 
    fontSize: '.75rem', 
    color: '#999', 
  },
  '& .information': {
    color: '#333', 
    fontSize: '.75rem',
  },
}))

export const QnaListItem = styled(Box)(() => ({
  marginBottom: '20px',
  border: '1px solid #DADADA',
  '& .content': {
    padding: '13px', 
    width: '100%', 
    border: 'none', 
    boxSizing: 'border-box', 
    fontSize: '.75rem',
  },
  '& .content.locked': {
    color: '#BDBDBD', 
  },
  '& .content_info': {
    display: 'flex', 
    borderTop: '1px solid #DADADA', 
  },
  '& .content_info > div': { 
    flex: '1 1 auto', 
    fontSize: '.75rem', 
    boxSizing: 'border-box',
  },
  '& .content_info .answer': {
    padding: '7px 0', 
    borderRight: '1px solid #DADADA', 
    maxWidth: '23%', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  '& .content_info .user_id': {
    padding: '7px 16px', 
    borderRight: '1px solid #DADADA', 
    maxWidth: '24%',
  },
  '& .content_info .date': {
    padding: '7px 16px'
  },
}))

export const QnaButtonGroup = styled(ButtonGroup)(() => ({
  '& > button': { 
    padding: '7px 15px', 
    borderColor: '#DADADA', 
    borderRadius: 0, 
    color: '#666666', 
    fontSize: '.75rem' 
  },
  '& > .MuiButton-root:hover': {
    borderColor: '#DADADA',
  }
}))