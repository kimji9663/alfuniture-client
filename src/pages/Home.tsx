/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"

const Home = () => {
  return (
    <>
      <div css={exampleStyle}>
        홈
      </div>
      <ExampleStyle1>
        홈
      </ExampleStyle1>
      <ExampleStyle2>
        홈
      </ExampleStyle2>
    </>
  )
}

export default Home
