import styled from "@emotion/styled"

// <main> 랜드마크: 스크린리더가 본문으로 바로 이동할 수 있다 (div와 레이아웃 동일)
export const ContentWrap = styled.main({
    position: "relative",
    maxWidth: "420px",
    minHeight: "100vh",
    margin: "auto",
    backgroundColor: "#fff",
    borderLeft: "1px solid #f5f5f5",
    borderRight: "1px solid #f5f5f5",
})

export const PageTitle = styled.h2({
    margin: "0 1rem",
    paddingTop: "1rem",
    borderBottom: "1px solid #0bb8ff",
    color: "#0bb8ff",
    fontSize: "1.5rem",
    fontWeight: "bold",
})