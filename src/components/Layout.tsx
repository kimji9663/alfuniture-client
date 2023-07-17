import { Outlet } from "react-router-dom"
import { ContentWrap } from "./layout.styles"

const Layout = () => {
  return (
    <>
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </>
  );
};

export default Layout;