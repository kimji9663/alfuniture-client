import React, { useEffect, useState } from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import StatusScreen from "./StatusScreen"
import { OutlineButton, PrimaryButton } from "../styles/buttons.styles"
import { isChunkLoadError, reloadOnceForChunkError } from "../utils/chunkError"
import NotFound from "../pages/NotFound"

/**
 * 라우터 errorElement: 페이지 렌더링·지연 로딩 중 생긴 오류를 흰 화면 대신 안내 화면으로 보여 준다.
 * - 청크 로드 실패(새 버전 배포 직후): 자동으로 한 번 새로 고침
 * - 404 응답: NotFound
 * - 그 밖의 오류: "문제가 발생했어요" + 다시 시도 / 홈으로
 */
const RouteError: React.FC = () => {
  const error = useRouteError()
  const chunkError = isChunkLoadError(error)
  const [reloading, setReloading] = useState(chunkError)

  useEffect(() => {
    if (!chunkError) return
    // 최근에 이미 새로 고쳤는데도 실패하면 멈추고 수동 버튼을 보여 준다 (무한 새로 고침 방지)
    if (!reloadOnceForChunkError()) setReloading(false)
  }, [chunkError])

  useEffect(() => {
    if (!chunkError) console.error(error)
  }, [chunkError, error])

  if (isRouteErrorResponse(error) && error.status === 404) return <NotFound standalone />

  const actions = (
    <>
      <PrimaryButton sx={{ height: 52 }} onClick={() => window.location.reload()}>
        다시 시도
      </PrimaryButton>
      {/* 상태를 완전히 초기화하려고 라우터 대신 전체 이동 */}
      <OutlineButton sx={{ height: 52 }} href="/">
        홈으로
      </OutlineButton>
    </>
  )

  if (chunkError) {
    return reloading ? (
      <StatusScreen loading title="새 버전을 불러오고 있어요" description="잠시만 기다려 주세요." />
    ) : (
      <StatusScreen
        title="페이지를 불러오지 못했어요"
        description={"네트워크 연결을 확인한 뒤\n다시 시도해 주세요."}
        actions={actions}
      />
    )
  }

  return (
    <StatusScreen
      title="문제가 발생했어요"
      description={"일시적인 오류일 수 있어요.\n다시 시도해 주세요."}
      actions={actions}
    />
  )
}

export default RouteError
