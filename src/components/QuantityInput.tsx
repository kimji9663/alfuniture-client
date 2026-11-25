import React, { useEffect, useRef, useState } from "react"
import { MAX_COUNT, clampCount } from "../store/cart"

interface QuantityInputProps {
  value: number
  /** 확정된 수량 (1~99로 맞춘 값) */
  onCommit: (count: number) => void
  /** 접근성 이름 (예: "카멜피아 수량") */
  label: string
  style?: React.CSSProperties
}

/**
 * 장바구니 수량 직접 입력
 * - 입력 중에는 숫자만 받는다 (빈 칸 허용)
 * - 포커스가 빠지거나 Enter를 누르면 확정: 1~99로 맞춰 반영
 * - 빈 칸·숫자가 아닌 값이면 원래 수량으로 되돌린다
 * - Escape: 입력 취소
 */
const QuantityInput: React.FC<QuantityInputProps> = ({ value, onCommit, label, style }) => {
  const [draft, setDraft] = useState(String(value))
  // Escape로 취소한 직후의 blur에서는 확정하지 않는다 (setDraft가 반영되기 전에 blur가 먼저 실행됨)
  const cancelled = useRef(false)

  // +/− 버튼이나 다른 탭에서 수량이 바뀌면 표시를 맞춘다
  useEffect(() => {
    setDraft(String(value))
  }, [value])

  const commit = () => {
    if (cancelled.current) {
      cancelled.current = false
      setDraft(String(value))
      return
    }
    const n = Number(draft)
    if (draft === "" || !Number.isFinite(n)) {
      setDraft(String(value))
      return
    }
    const next = clampCount(n)
    setDraft(String(next))
    if (next !== value) onCommit(next)
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={2}
      aria-label={label}
      title={`1~${MAX_COUNT}`}
      value={draft}
      onChange={(e) => setDraft(e.target.value.replace(/[^0-9]/g, ""))}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur()
        if (e.key === "Escape") {
          cancelled.current = true
          e.currentTarget.blur()
        }
      }}
      style={style}
    />
  )
}

export default QuantityInput
