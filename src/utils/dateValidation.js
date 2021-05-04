import valueToDate from './valueToDate'

const dateValidation = (value, previousDays = 0, nextDays = 30) => {
   if (!value) return ''

   let dateValidation = false

   nextDays = nextDays * 86400000
   previousDays = previousDays * 86400000

   const previousMs = new Date().getTime() - previousDays
   const nextMs = new Date().getTime() + nextDays

   const previousDate = new Date(previousMs)
   previousDate.setHours(0, 0, 0, 0)

   const nextDate = new Date(nextMs)

   dateValidation = valueToDate(value) >= previousDate && valueToDate(value) <= nextDate

   return dateValidation
}

export default dateValidation
