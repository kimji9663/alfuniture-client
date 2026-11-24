import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// 페이지 이동 후 스크롤 위치를 최상단으로 이동 (컴포넌트 안에서 훅처럼 호출)
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
