import { Accordion } from "@mui/material"
import { styled } from "@mui/material/styles" 

export const OrderInfoAccordionMenu = styled(Accordion)(() => ({
  margin: '0 16px',
  boxShadow: 'none',
  // borderBottom: '1px solid #dadada',
  '&.Mui-expanded': {
    margin: '0 16px',
  },
  '&:before': {
    backgroundColor: 'transparent',
  },
  '& .MuiAccordionSummary-root': {
    padding: 0,
    borderBottom: '1px solid #dadada',
    '&.Mui-expanded': {
      minHeight: 0,
    },
    '& > div': {
      margin: '16px 0',
      justifyContent: 'space-between',
    },
    '& > div.Mui-expanded': {
      margin: '16px 0',
    },
    '& p': {
      color: '#999',
    },
    '& .title, & .total_amount': {
      color: '#333',
      fontWeight: 'bold',
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: '16px 0',
    borderTop: '1px solid #333',
  }
}))

export const OrderAccordionMenu = styled(Accordion)(() => ({
  margin: '16px 16px 0',
  boxShadow: 'none',
  borderBottom: '1px solid #dadada',
  '&.Mui-expanded': {
    margin: '16px 16px 0',
  },
  '&:before': {
    backgroundColor: 'transparent',
  },
  '& .MuiAccordionSummary-root': {
    padding: 0,
    '&.Mui-expanded': {
      minHeight: 0,
    },
    '& > div': {
      margin: '16px 0',
      justifyContent: 'space-between',
    },
    '& > div.Mui-expanded': {
      margin: '16px 0',
    },
    '& p': {
      color: '#999',
    },
    '& .title, & .total_amount': {
      color: '#333',
      fontWeight: 'bold',
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: '8px 0 16px',
    borderTop: '1px solid #333',
  }
}))