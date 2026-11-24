import React, { useEffect, useState, useRef } from "react"
import { Box, Avatar, ListItemAvatar, ListItemText, ListSubheader, SwipeableDrawer, ListItemButton } from "@mui/material"
import SelectBox from "../../components/SelectBox"
import { OrderTitle } from "./order.styles"
import { AvatarList } from "./couponSelector.styles"
import { couponItems } from "../../data"
import { PricedLine, eligibleLines, isCouponApplicable, isCouponUsable, productTotal, won } from "../../utils/pricing"

/** 만료되지 않은 쿠폰 (전 상품 쿠폰 → 브랜드 쿠폰 순) */
export const usableCoupons = couponItems.filter(isCouponUsable)
export const findCoupon = (id: string | null) => usableCoupons.find((c) => c.id === id) ?? null

type CouponItem = (typeof couponItems)[number]

const GROUPS: { scope: CouponItem["scope"]; label: string }[] = [
  { scope: "all", label: "전 상품 쿠폰" },
  { scope: "brand", label: "브랜드 쿠폰" },
]

interface ToggleProps {
  drawerOpen: boolean
  toggleDrawer: (val:boolean) => void
  /** 주문 상품 (브랜드 쿠폰 사용 가능 여부 판단) */
  lines: PricedLine[]
  /** 선택한 쿠폰 ID (없으면 null). 상태는 부모(Order)가 갖는다 */
  selectedId: string | null
  onSelect: (id: string) => void
}

interface OptionsProps {
  name?: string | undefined
  img?: string | undefined
}

const PLACEHOLDER: OptionsProps = { name: "쿠폰을 선택해 주세요", img: "" }

const toOption = (id: string | null): OptionsProps => {
  const c = findCoupon(id)
  return c ? { name: c.brand + " " + c.title, img: c.logo } : PLACEHOLDER
}

/** 쿠폰 옆에 보여 줄 적용 범위 설명 */
const scopeText = (coupon: CouponItem, lines: PricedLine[]) => {
  if (coupon.scope === "all") return "주문 상품 전체"
  const eligible = eligibleLines(lines, coupon)
  return eligible.length ? `${coupon.brand} 상품 ${won(productTotal(eligible))}에 적용` : "적용 가능한 상품 없음"
}

// 셀렉트박스 타입
const OptionSelectType = ({ lines, selectedId, onSelect }: Pick<ToggleProps, "lines" | "selectedId" | "onSelect">) => {
  const [selected, setSelected] = useState<OptionsProps>(() => toOption(selectedId))
  const dropMenuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  // 부모에서 쿠폰을 취소하면 표시도 되돌린다
  useEffect(() => {
    setSelected(toOption(selectedId))
  }, [selectedId])

  useEffect(() => {
    const handleOutsideClose = (e: {target: any}) => {
      // 바깥 클릭 시 메뉴 닫힘
      if(open && (!dropMenuRef.current?.contains(e.target))) setOpen(false)
    }
    document.addEventListener('click', handleOutsideClose)
    return () => document.removeEventListener('click', handleOutsideClose)
    // 마운트 해제 시 이벤트 삭제!!
  }, [open])

  const handleListItemClick = (id: string) => {
    setOpen(false)
    setSelected(toOption(id))
    // 방금 고른 쿠폰 ID를 그대로 부모에 전달 (이전 코드는 직전 값을 넘겼음)
    onSelect(id)
  }

  return (
    <SelectBox
      selected={selected}
      setSelected={setSelected}
      open={open}
      setOpen={setOpen}
    >
      <AvatarList>
        {GROUPS.map((group) => {
          const coupons = usableCoupons.filter((c) => c.scope === group.scope)
          if (!coupons.length) return null
          return (
            <React.Fragment key={group.scope}>
              <ListSubheader disableSticky sx={{ px: 2, lineHeight: "32px", fontSize: ".75rem", fontWeight: "bold", color: "#333" }}>
                {group.label}
              </ListSubheader>
              {coupons.map((el) => {
                const applicable = isCouponApplicable(lines, el)
                return (
                  <ListItemButton
                    component="li"
                    key={el.id}
                    selected={el.id === selectedId}
                    disabled={!applicable}
                    onClick={() => applicable && handleListItemClick(el.id)}
                  >
                    <ListItemAvatar>
                      {/* 가로로 긴 로고(Alfuniture)도 잘리지 않게 contain */}
                      <Avatar alt={el.brand} src={el.logo} sx={{ bgcolor: "#fff", border: "1px solid #eee", "& .MuiAvatar-img": { objectFit: "contain", p: "4px" } }} />
                    </ListItemAvatar>
                    <Box>
                      <ListItemText primary={el.brand} />
                      <ListItemText primary={el.title} secondary={scopeText(el, lines)} />
                    </Box>
                    <Box sx={{ ml: 'auto', fontSize: '.875rem' }}>
                      D-{el.expiration}
                    </Box>
                  </ListItemButton>
                )
              })}
            </React.Fragment>
          )
        })}
      </AvatarList>
    </SelectBox>
  )
}


const CouponSelector = ({drawerOpen, toggleDrawer, lines, selectedId, onSelect}: ToggleProps) => {
  // ios에서 스와이프 동작 활성화
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const applicableCount = usableCoupons.filter((c) => isCouponApplicable(lines, c)).length

  const setToggleDrawer = (val: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleDrawer(val)
  }

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      disableSwipeToOpen={false}
      anchor='bottom'
      open={drawerOpen}
      onClose={setToggleDrawer(false)}
      onOpen={setToggleDrawer(true)}
      sx={{
        zIndex: 1,
        '& .MuiBackdrop-root': {
          bottom: '74px',
        },
        '& .MuiPaper-root': {
          bottom: '74px',
        }
      }}
    >
      <Box
        sx={{ p: 2, width: 'auto', height: '50vh' }}
        role="presentation"
      >
        <OrderTitle>사용가능 쿠폰조회</OrderTitle>
        <Box
          component="div"
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            color: '#707070',
            fontSize: '.8rem',
            '& .title': {
              color: '#000',
            }
          }}
        >
          <p className="title">보유중인 쿠폰</p>
          <p>{usableCoupons.length}개 (이 주문에 사용 가능 {applicableCount}개)</p>
        </Box>
        <Box sx={{ mt: 2 }}>
          <OptionSelectType lines={lines} selectedId={selectedId} onSelect={onSelect} />
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}

export default CouponSelector
