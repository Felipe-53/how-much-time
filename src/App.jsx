import { useState, useEffect } from "react"
import Background from "./components/Background/Background"
import Layout from "./components/Layout/Layout"
import Title from "./components/Title/Title"
import RemainingTime from "./components/RemainingTime/RemainingTime"
import SubTitle from "./components/SubTitle/SubTitle"
import remainingTime from "./use-cases/remainingTime"

function App() {
  const initTime = remainingTime()

  const [days, set_days] = useState(initTime.days)
  const [hours, set_hours] = useState(initTime.hours)
  const [minutes, set_minutes] = useState(initTime.minutes)
  const [seconds, set_seconds] = useState(initTime.seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = remainingTime()
      
      set_days(days)
      set_hours(hours)
      set_minutes(minutes)
      set_seconds(seconds)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Background>
      <Layout>
        <Title />

        <RemainingTime
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />

        <SubTitle />
      </Layout>
    </Background>
  )
}

export default App
