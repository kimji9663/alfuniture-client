import { Card, ButtonBase, FormControl } from "@mui/material"
import { styled } from "@mui/material/styles" 

export const DeliveryInfoOrderCard = styled(Card)(() => ({
  marginBottom: '16px',
  borderRadius: 0,
  border: '0.5px solid #8F8F8F', 
  boxShadow: 'none', 
  '& .MuiCardHeader-root': {
    padding: '8px 16px',
    borderBottom: '0.5px solid #8F8F8F',
    '& .MuiCardHeader-title': {
      color: '#666',
      fontSize: '.875rem',
    },
  },
  '& .MuiCardMedia-root': {
    marginRight: '16px',
    flex: '0 0 100px',
  },
  '& .card_content': {
    padding: '16px',
  },
  '& .card_content .state': {
    fontSize: '.75rem', 
    color: '#333', 
    fontWeight: 'bold',
  },
  '& .card_content .product': {
    display: 'flex',
    marginTop: '16px',
  },
  '& .MuiCardActions-root': {
    padding: '16px',
    '& > button': {
      flex: '1 1 auto',
      borderRadius: 0,
      borderColor: '#8F8F8F',
      color: '#666',
    },
  },
}))

export const MyPageOrderCard = styled(Card)(() => ({
  marginBottom: '24px',
  borderRadius: 0,
  border: '1px solid #dadada', 
  boxShadow: 'none', 
  '& .MuiCardHeader-root': {
    padding: '8px 16px',
    borderBottom: '1px solid #dadada',
    '& .MuiCardHeader-title': {
      color: '#666',
      fontSize: '.875rem',
    },
  },
  '& .MuiCardMedia-root': {
    marginRight: '24px',
    flex: '0 0 100px',
  },
  '& .card_content': {
    padding: '16px',
  },
  '& .card_content .state': {
    fontSize: '.75rem', 
    color: '#333', 
    fontWeight: 'bold',
  },
  '& .card_content .product': {
    display: 'flex',
    marginTop: '16px', 
    '& .delivery': {
      fontSize: '.6rem', 
      fontWeight: 'bold',
    },
    '& .brand': {
      marginTop: '8px', 
      fontSize: '.875rem', 
      fontWeight: 'bold',
    },
    '& .name': {
      fontSize: '.75rem',
    },
  },
  '& .MuiCardActions-root': {
    padding: '8px 16px 24px',
    '& > button': {
      flex: '1 1 auto',
      borderRadius: 0,
      borderColor: '#dadada',
      color: '#666',
    },
  },
}))

export const StyleCard = styled(ButtonBase)(() => ({
  height: '170px',
  backgroundSize: '100% 100%',
  '& .MuiTypography-root': {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.25px'
  }
}));

export const StyleCardSelected = styled(ButtonBase)(() => ({
  height: '170px',
  backgroundSize: '100% 100%',
  position: 'relative',
  '::after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    content: '""'
  },
  '& .title': {
    position: 'absolute',
    display: 'inline-block',
    zIndex: 1,
    color: 'white',
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.25px'
  }
}))

export const OrderCardSelectWrap = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '52px',

  '& > .MuiBox-root, & .MuiButtonBase-root': {
    display: 'flex',
  },
  '& > .MuiBox-root': {
    flex: '1 1 auto',
  },
  '& .MuiInputBase-root': {
    width: '100%',
  },
  '& .MuiInputBase-root > input': {
    fontSize: '.875rem',
  },
  '& .MuiButtonBase-root': {
    flex: '1 1 18%',
    padding: 0,
    borderRadius: 0,
    fontSize: '.875rem',
  },
}))