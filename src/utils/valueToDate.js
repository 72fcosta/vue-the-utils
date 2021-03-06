const valueToDate = value => {
   if (!value) return ''

   const stringPtBrToDate = stringSplitted => {
      const year = stringSplitted[2]
      const month = stringSplitted[1] - 1
      const day = stringSplitted[0]

      return new Date(year, month, day)
   }

   const stringEnUsToDate = stringSplitted => {
      const year = stringSplitted[0]
      const month = stringSplitted[1] - 1
      const day = stringSplitted[2]

      return new Date(year, month, day)
   }

   // check if string
   if (typeof (value) === 'string') {
      // check is bd date
      value = value.slice(0, 10)

      const stringReplaced = value.replace(/\D/g, ' ')
      const stringSplitted = stringReplaced.split(' ')

      const isUsEn = stringSplitted[0].length === 4
      const isPtBr = stringSplitted[0].length === 2

      if (isUsEn) {
         return stringEnUsToDate(stringSplitted)
      } else if (isPtBr) {
         return stringPtBrToDate(stringSplitted)
      } else {
         return 'Erro. Formato não aceito'
      }
   }
}

export default valueToDate
