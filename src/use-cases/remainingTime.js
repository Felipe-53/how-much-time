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
  if (shouldSubOneDay(interval)) {
    daysOfInterval.pop()
  }
  
  const { hours, minutes, seconds } = intervalToDuration(interval)

  return {
    days: formatTwoDigit(daysOfInterval.length - 1),
    hours: formatTwoDigit(hours),
    minutes: formatTwoDigit(minutes),
    seconds: formatTwoDigit(seconds)
  }
}

function shouldSubOneDay(interval) {
  const startTime = {
    hours: interval.start.getUTCHours(),
    minutes: interval.start.getUTCMinutes(),
    seconds: interval.start.getUTCSeconds(),
  }

  const endTime = {
    hours: interval.end.getUTCHours(),
    minutes: interval.end.getUTCMinutes(),
    seconds: interval.end.getUTCSeconds(),
  }

  if (startTime.hours > endTime.hours) return true

  if (startTime.hours === endTime.hours) {
    if (startTime.minutes > endTime.minutes) return true

    if (startTime.minutes === endTime.minutes) {
      if (startTime.seconds > endTime.seconds) return true
    }
  }

  return false
}

export default remainingTime
