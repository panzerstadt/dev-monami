const chunkArray = (list, chunk_size) => {
  let results = []
  let chk = 0
  let initLength = list.length

  while (list.length) {
    results.push(list.splice(0, chunk_size))
    chk++
    if (chk > 5 && list.length === initLength) {
      console.log('this list is not being spliced properly.')
      console.log(`list size: ${list.length}, chunk size: ${chunk_size}`)
      console.log(list)
      throw 'list is not being spliced, as chunk size is larger than list size'
    }
  }

  return results
}

export default chunkArray
