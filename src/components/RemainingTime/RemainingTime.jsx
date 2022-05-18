import React from 'react'

const RemainingTime = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="
      flex flex-col gap-4 items-center
      bg-red-400 rounded-3xl
      font-mono text-4xl lg:text-6xl font-extrabold
      px-20 py-10
    ">
      <h3>{days} dias</h3>
      <h3>{hours}:{minutes}:{seconds}</h3>
    </div>
  )
}

export default RemainingTime