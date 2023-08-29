import React, { useEffect, useState } from "react"
import { Box, Typography, FormHelperText, Input } from "@mui/material"

type ICountDownProps = {
  time: number
  changeExpired: (val:boolean) => void
  countStrat: boolean
}

const CountDown = ({time, changeExpired, countStrat}:ICountDownProps) => {
  const count = { 
    seconds: time % 60, 
    minutes: Math.floor(time / 60)
  }

  if(count.minutes + count.seconds === 0 && countStrat){
    changeExpired(true)
  }

  if(count.seconds < 10) {
    return (
      <div>
        <span>{count.minutes} : {"0" + count.seconds}</span>
      </div>
    )
  } else {
    return (
      <div>
        <span>{count.minutes} : {count.seconds}</span>
      </div>
    )
  }
}

export default CountDown