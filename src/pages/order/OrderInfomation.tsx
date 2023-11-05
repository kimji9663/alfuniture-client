import React, { useState } from "react"
import { Box, AccordionDetails, AccordionSummary, Input } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SelectBox from "../../components/SelectBox"
import { PrimaryButton } from "../../styles/buttons.styles"
import { IconDeliveryNormal, IconDeliveryQuick } from "../../assets/images"
import { OrderAccordionMenu } from "../../styles/accordion.styles"
import { DeliveryCheckBox } from "../../styles/checkbox.styles"
import { OrderCardSelectWrap } from "../../styles/card.style"
import CardSelector from "./CardSelector"

interface CompleteProps {
  complete: string
  setComplete: React.Dispatch<React.SetStateAction<string>>
}

const OrderInfomation = ({complete, setComplete}: CompleteProps) => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [selectDelivery, setSelectDelivery] = useState('check_quick')
  const [selectCard, setSelectCard] = useState('')
  const [selectComplete, setSelectComplete] = useState([false, false])

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleCheckDelivery = (event: React.SyntheticEvent) => {
    setSelectDelivery(event.currentTarget.id)
  }

  return (
    <>
      <OrderAccordionMenu
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
            <input 
              type="checkbox" 
              name="delivery_type" 
              id="check_quick" 
              checked={selectDelivery === 'check_quick' && true} 
              onChange={handleCheckDelivery}
            />
            <Box 
              component="label" 
              htmlFor="check_quick"
            >
              <Box sx={{ pr: 2, display: 'flex' }}>
                <IconDeliveryQuick />
              </Box>
              <Box>
                <p className="price">빠른배송 100,000원</p>
                <p className="additional">알퍼니처 제휴업체를 통한 <span>배송 우선순위</span></p>
              </Box>
            </Box>
          </DeliveryCheckBox>
          <DeliveryCheckBox fullWidth>
            <input 
              type="checkbox" 
              name="delivery_type" 
              id="check_normal" 
              checked={selectDelivery === 'check_normal' && true} 
              onChange={handleCheckDelivery}
            />
            <label htmlFor="check_normal">
              <Box sx={{ pr: 2, display: 'flex' }}>
                <IconDeliveryNormal />
              </Box>
              <Box>
                <p className="price">일반배송 50,000원</p>
              </Box>              
            </label>
          </DeliveryCheckBox>
        </AccordionDetails>
      </OrderAccordionMenu>

      <OrderAccordionMenu
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
          {/* <OrderCardSelectWrap
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
          </OrderCardSelectWrap> */}

          <CardSelector
            selectedOption={selectCard}
            setSelectedOption={setSelectCard}
            complete={selectComplete}
            setComplete={setSelectComplete}
          />
        </AccordionDetails>
      </OrderAccordionMenu>

      <OrderAccordionMenu
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, fontSize: '.75rem' }}>
            <p>총 상품금액</p>
            <p>1,594,500원</p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, fontSize: '.75rem' }}>
            <p>쿠폰 사용</p>
            <p>159,450원</p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, fontSize: '.75rem' }}>
            <p>배송비</p>
            <p>100,000원</p>
          </Box>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '8px',
              paddingTop: '16px',
              borderTop: '1px solid #dadada',
              fontSize: '.875rem',
              fontWeight: 'bold',
            }}
          >
            <p>총 결제금액</p>
            <p>1,435,050원</p>
          </Box>
        </AccordionDetails>
      </OrderAccordionMenu>
    </>
  )
}

export default OrderInfomation