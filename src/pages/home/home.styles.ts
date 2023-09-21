/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// 방법1. emotion/css
export const exampleStyle = css`
  margin: 24px;
  .title {
    font-size: 25px;
  }
`;

// 방법2. mui/material/styles
export const ExampleStyle1 = styled(Box)(() => ({
  fontSize: '1.5rem'
}))

export const ExampleStyle2 = styled('div')(() => ({
  fontSize: '1rem'
}))