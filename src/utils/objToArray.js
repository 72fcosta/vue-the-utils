const objToArray = obj => {
   const setArray = ([key, value]) => Object.assign(value, { id: key })

   const objEntries = Object.entries(obj)
   const array = objEntries.map(setArray)

   return array
}

export {
   objToArray
}
