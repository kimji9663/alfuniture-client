import React from "react"
import { ArrowLeft } from "../../assets/images"

// 기본 버튼 스타일을 없애 아이콘만 보이게 한다 (기존 SVG onClick과 같은 모양)
export const iconButtonReset: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: 0,
  margin: 0,
  border: 0,
  background: "none",
  color: "inherit",
  cursor: "pointer",
}

interface BackButtonProps {
  onClick: () => void
}

/** 뒤로 가기 아이콘 버튼: 키보드(Tab/Enter)로 조작 가능하고 스크린리더가 "뒤로 가기"로 읽는다 */
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <button type="button" aria-label="뒤로 가기" onClick={onClick} style={iconButtonReset}>
    <ArrowLeft aria-hidden="true" />
  </button>
)

export default BackButton
