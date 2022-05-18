import { intervalToDuration, eachDayOfInterval } from 'date-fns'
import { dateTime } from '../env'

const ARRIVAL_DATE = new Date(dateTime)

function formatTwoDigit(number) {
  let numberString = number.toString()
  if (numberString.length === 1) {
    numberString = '0' + numberString
  }

  return numberString
}

function remainingTime() {
  const interval = {
    start: new Date(),
    end: ARRIVAL_DATE
  }

  const daysOfInterval = eachDayOfInterval(interval)
  const { hours, minutes, seconds } = intervalToDuration(interval)

  return {
    days: formatTwoDigit(daysOfInterval.length - 1),
    hours: formatTwoDigit(hours),
    minutes: formatTwoDigit(minutes),
    seconds: formatTwoDigit(seconds)
  }
}

export default remainingTime
