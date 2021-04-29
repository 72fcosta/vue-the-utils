const objectToArray = obj => {
   const setArray = ([key, value]) => Object.assign(value, { id: key })

   const objEntries = Object.entries(obj)
   const array = objEntries.map(setArray)

   return array
}

export default objectToArray
