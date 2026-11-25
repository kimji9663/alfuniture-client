import { Outlet, useNavigation } from "react-router-dom"
import { LinearProgress } from "@mui/material"
import { ContentWrap } from "./layout.styles"

const Layout = () => {
  // 다음 페이지 청크를 받는 동안(라우터 lazy) 현재 화면 위에 얇은 진행 막대 표시
  const navigating = useNavigation().state !== "idle"

  return (
    <>
      <ContentWrap aria-busy={navigating}>
        {navigating && (
          <LinearProgress
            aria-label="페이지 불러오는 중"
            sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2000, height: 2, bgcolor: "transparent", "& .MuiLinearProgress-bar": { bgcolor: "#333" } }}
          />
        )}
        <Outlet />
      </ContentWrap>
    </>
  );
};

export default Layout;
