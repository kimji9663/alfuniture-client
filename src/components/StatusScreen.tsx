import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { ContentWrap } from "./layout.styles"

interface StatusScreenProps {
  title: string
  description?: string
  /** 아래쪽 버튼 영역 */
  actions?: React.ReactNode
  /** 로딩 중이면 스피너 표시 */
  loading?: boolean
  /**
   * Layout 밖에서 단독으로 그릴 때 true (라우터 오류 화면·초기 로딩).
   * 앱 레이아웃과 같은 420px 컨테이너(<main>)로 감싼다. Layout 안에서는 false (main 중첩 방지)
   */
  standalone?: boolean
}

/** 오류·404·로딩 등 상태 안내 화면 */
const StatusScreen: React.FC<StatusScreenProps> = ({ standalone = true, ...props }) =>
  standalone ? <ContentWrap><StatusBody {...props} /></ContentWrap> : <StatusBody {...props} />

const StatusBody: React.FC<Omit<StatusScreenProps, "standalone">> = ({ title, description, actions, loading }) => (
    <Box
      role={loading ? "status" : undefined}
      aria-live={loading ? "polite" : undefined}
      sx={{ minHeight: "100vh", px: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}
    >
      {loading && <CircularProgress size={28} sx={{ color: "#333", mb: 2 }} />}
      <Typography component="h1" sx={{ fontSize: "1.125rem", fontWeight: "bold", color: "#333" }}>
        {title}
      </Typography>
      {description && (
        <Typography sx={{ mt: 1, fontSize: ".875rem", color: "#707070", whiteSpace: "pre-line" }}>{description}</Typography>
      )}
      {actions && <Box sx={{ mt: 4, width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>{actions}</Box>}
    </Box>
)

export default StatusScreen
