import React from "react"
import { useNavigate } from "react-router-dom"
import StatusScreen from "../components/StatusScreen"
import { PrimaryButton } from "../styles/buttons.styles"

/**
 * 없는 주소
 * - 라우터의 "*" 경로: Layout 안에서 그린다 (standalone=false)
 * - 404 오류 응답(RouteError): Layout 없이 단독으로 그린다 (standalone=true)
 */
const NotFound: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  const navigate = useNavigate()
  return (
    <StatusScreen
      standalone={standalone}
      title="페이지를 찾을 수 없어요"
      description={"주소가 잘못되었거나\n더 이상 제공되지 않는 페이지예요."}
      actions={
        <PrimaryButton sx={{ height: 52 }} onClick={() => navigate("/")}>
          홈으로
        </PrimaryButton>
      }
    />
  )
}

export default NotFound
