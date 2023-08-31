import { CountBox } from "../pages/auth/SignUp/index.styles"

type ICountDownProps = {
  time: number
}

const CountDown = ({time}:ICountDownProps) => {
  const count = { 
    seconds: time % 60, 
    minutes: Math.floor(time / 60)
  }

  if(count.seconds < 10) {
    return (
      <CountBox>
        {count.minutes} : {"0" + count.seconds}
      </CountBox>
    )
  } else {
    return (
      <CountBox>
        {count.minutes} : {count.seconds}
      </CountBox>
    )
  }
}

export default CountDown