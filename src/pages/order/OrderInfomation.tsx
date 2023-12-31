import React, { useState } from "react"
import { Box, AccordionDetails, AccordionSummary, List, ListItemButton, ListItemText, Avatar, ListItemAvatar } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SelectBox from "../../components/SelectBox"
import { IconDeliveryNormal, IconDeliveryQuick } from "../../assets/images"
import { OrderAccordionMenu } from "../../styles/accordion.styles"
import { DeliveryCheckBox } from "../../styles/checkbox.styles"
import { styled } from "@mui/material/styles"
import { cardOptions } from "../../data"

interface CompleteProps {
  selectedCard: string
  setSelectedCard: (val:string) => void
  selectedDelivery: string
  setSelectedDelivery: (val:string) => void
}

interface OptionsProps {
  id?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
interface SeledtedOptionsProps {
  coupon?: string
  delivery?: string
  card?: string
}

const AvatarList = styled(List)(() => ({
  padding: 0,
  "& > .MuiButtonBase-root.Mui-selected": {
    backgroundColor: "transparent",
  },
  "& .MuiTypography-root": {
    color: "#666",
    fontSize: ".875rem",
  },
}))

const OrderInfomation = ({ selectedCard, setSelectedCard, selectedDelivery, setSelectedDelivery }: CompleteProps) => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [selectDelivery, setSelectDelivery] = useState("check_quick")
  const [selectCard, setSelectCard] = useState<OptionsProps>(
    { name: "선택하기", type: "카드사" }
  )
  const [selectedOption, setSelectedOption] = useState<SeledtedOptionsProps>({
    coupon: '', delivery: '빠른배송', card: '',
  })
  const [open, setOpen] = useState(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  
  const handleCardListItem = (
    name: string,
  ) => {
    setOpen(false)
    const option = {...selectCard,  name: name}
    setSelectCard(option)
    setSelectedCard(name)
  }

  const handleCheckDelivery = (event: React.SyntheticEvent) => {
    setSelectDelivery(event.currentTarget.id)
    let deliveryName = event.currentTarget.id === 'check_quick' ? '빠른배송' : '일반배송'
    setSelectedOption({...selectedOption, delivery: deliveryName })
    setSelectedDelivery(deliveryName)
  }

  return (
    <>
      <OrderAccordionMenu
        expanded={expanded === "panel1"} 
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">배송방법 선택</p>
          <p>{selectedOption.delivery}</p>
        </AccordionSummary>
        <AccordionDetails>
          <DeliveryCheckBox fullWidth>
            <input 
              type="checkbox" 
              name="delivery_type" 
              id="check_quick" 
              checked={selectDelivery === "check_quick" && true} 
              onChange={handleCheckDelivery}
            />
            <Box 
              component="label" 
              htmlFor="check_quick"
            >
              <Box sx={{ pr: 2, display: "flex" }}>
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
              checked={selectDelivery === "check_normal" && true} 
              onChange={handleCheckDelivery}
            />
            <label htmlFor="check_normal">
              <Box sx={{ pr: 2, display: "flex" }}>
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
        expanded={expanded === "panel2"} 
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">결제방법</p>
          <p>신용카드</p>
        </AccordionSummary>
        <AccordionDetails>
          <SelectBox
            selected={selectCard}
            setSelected={setSelectCard}
            open={open}
            setOpen={setOpen}
          >
            <AvatarList>
              {cardOptions.map((el) => (
                <ListItemButton
                  component="li"
                  key={el.id}
                  onClick={() => handleCardListItem(el.name)}
                >
                  <Box>
                    <ListItemText primary="카드사" />
                  </Box>
                  <Box sx={{ ml: "auto", fontSize: ".875rem" }}>
                    {el.name}
                  </Box>
                </ListItemButton>
              ))}
            </AvatarList>
          </SelectBox>
        </AccordionDetails>
      </OrderAccordionMenu>

      <OrderAccordionMenu
        expanded={expanded === "panel3"} 
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="title">결제금액</p>
          <p className="total_amount">1,435,050원</p>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, fontSize: ".75rem" }}>
            <p>총 상품금액</p>
            <p>1,594,500원</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, fontSize: ".75rem" }}>
            <p>쿠폰 사용</p>
            <p>159,450원</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, fontSize: ".75rem" }}>
            <p>배송비</p>
            <p>100,000원</p>
          </Box>
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              marginTop: "8px",
              paddingTop: "16px",
              borderTop: "1px solid #dadada",
              fontSize: ".875rem",
              fontWeight: "bold",
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