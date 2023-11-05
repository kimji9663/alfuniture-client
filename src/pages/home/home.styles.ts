/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// 방법1. emotion/css
export const exampleStyle = css`
  
  .title {
    margin: 24px 0 39px 16px;
    font-size: 32px;
    line-height: 48px;
  }
  .downBtn{
    border-radius: 50%;
  }
`;

// 방법2. mui/material/styles
export const ExampleStyle1 = styled(Box)(() => ({
  fontSize: "1.5rem"
}))

export const ExampleStyle2 = styled("div")(() => ({
  fontSize: "1rem"
}))