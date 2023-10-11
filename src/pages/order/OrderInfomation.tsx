import React, { useState } from "react"
import { Box, Avatar, List, ListItemAvatar, ListItemText, ListItemButton, Accordion, AccordionDetails, AccordionSummary, FormControl, Input } from "@mui/material"
import SelectBox from "../../components/SelectBox"
import { styled } from "@mui/material/styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { PrimaryButton } from "../../styles/buttons.styles"
import { aerobiey, jameslee, onerain, clods } from "../../assets/images/logo"

interface OptionsProps {
  id?: string | undefined
  name?: string | undefined
  img?: string | undefined
}

const AvatarList = styled(List)(() => ({
  padding: 0,
  '& > .MuiButtonBase-root.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiTypography-root': {
    color: '#666',
    fontSize: '.875rem',
  },
}))

export const AccordionMenu = styled(Accordion)(() => ({
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
    '& .title': {
      color: '#333',
      fontWeight: 'bold',
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: '8px 0 16px',
    borderTop: '1px solid #333',
  }
}))

const DeliveryCheckBox = styled(FormControl)(() => ({
  margin: '0 0 16px',
  '& > input': {
    display: 'none',
  },
  '& > label': {
    display: 'block',
    height: '84px',
    border: '1px solid #dadada',
  },
  '& input:checked + label': {
    border: '1px solid #999',
    backgroundColor: '#242223',
    color: '#fafafa',
  },
}))

const CardSelectWrap = styled(FormControl)(() => ({
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

const couponItems = [
  {
    id: 'rerobiey',
    brand: 'Rerobiey',
    title: '브랜드 10% 쿠폰',
    logo: aerobiey
  },
  {
    id: 'onerain',
    brand: 'ONERAIN',
    title: '브랜드 10% 쿠폰',
    logo: onerain
  },
  {
    id: 'james_lee',
    brand: 'James Lee',
    title: '브랜드 10% 쿠폰',
    logo: jameslee
  },
  {
    id: 'clods',
    brand: 'CLODS',
    title: '브랜드 10% 쿠폰',
    logo: clods,
  }
]

const OrderInfomation = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [selectCoupon, setSelectCoupon] = useState<OptionsProps>(
    { name: '쿠폰 선택', img: '' }
  )
  const [open, setOpen] = useState(false)
  const [selectCard, setSelectCard] = useState()
  const [selectedOption, setSelectedOption] = useState<OptionsProps>({})

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleListItemClick = (
    brand: string,
    logo: string,
    title: string,
  ) => {
    setOpen(false)
    const option = {...selectCoupon,  name: brand + '\u00A0' + title, img: logo}
    setSelectCoupon(option)
    setSelectedOption(selectCoupon)
  }

  return (
    <>
      <AccordionMenu
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">사용가능 쿠폰조회</p>
          <p>쿠폰 선택</p>
        </AccordionSummary>
        <AccordionDetails>
          <SelectBox
            selected={selectCoupon}
            setSelected={setSelectCoupon}
            open={open}
            setOpen={setOpen}
          >
            <AvatarList>
              {couponItems.map((el, index) => (
                <ListItemButton
                  component="li"
                  key={el.id}
                  onClick={() => handleListItemClick(el.brand, el.logo, el.title)}
                >
                  <ListItemAvatar>
                    <Avatar alt={el.brand} src={el.logo} />
                  </ListItemAvatar>
                  <Box>
                    <ListItemText primary={el.brand} />
                    <ListItemText primary={el.title} />
                  </Box>
                </ListItemButton>
              ))}
            </AvatarList>
          </SelectBox>
        </AccordionDetails>
      </AccordionMenu>

      <AccordionMenu
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">배송방법 선택</p>
          <p>일반배송</p>
        </AccordionSummary>
        <AccordionDetails>
          <DeliveryCheckBox fullWidth>
            <input type="checkbox" name="delivery_type" id="check_quick" />
            <label htmlFor="check_quick">빠른배송</label>
          </DeliveryCheckBox>
          <DeliveryCheckBox fullWidth>
            <input type="checkbox" name="delivery_type" id="check_normal" />
            <label htmlFor="check_normal">일반배송</label>
          </DeliveryCheckBox>
        </AccordionDetails>
      </AccordionMenu>

      <AccordionMenu
        expanded={expanded === 'panel3'} 
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">결제방법</p>
          <p>신용카드</p>
        </AccordionSummary>
        <AccordionDetails>
          <CardSelectWrap
            variant="standard"
            margin="normal"
          >
            <Box>
              <Input
                name="user_id"
                placeholder="카드를 선택해주세요."
                type="text"
                value={selectCard}
                readOnly
              />
            </Box>
            <PrimaryButton
              sx={{ maxWidth: '100px' }}
            >
              선택
            </PrimaryButton>
          </CardSelectWrap>
        </AccordionDetails>
      </AccordionMenu>

      <AccordionMenu
        expanded={expanded === 'panel4'} 
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">결제금액</p>
          <p className="total_amount">1,435,050원</p>
        </AccordionSummary>
        <AccordionDetails>
          총 상품금액
        </AccordionDetails>
      </AccordionMenu>
    </>
  )
}

export default OrderInfomation