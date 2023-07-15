import { css } from "@emotion/css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// 방법1. emotion/css
export const exampleStyle = css`
  font-size: 1rem;
`;

// 방법2. mui/material/styles
export const Layout = styled(Box)(() => ({
  margin: "42px 16px",
  height: "100vh",
}));
