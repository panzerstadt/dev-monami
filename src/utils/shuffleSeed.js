import seedrandom from 'seedrandom'

// https://github.com/webcaetano/shuffle-seed

const shuffleSeedLOCAL = () => {
  let self = {}

  if (Math.seedrandom) seedrandom = Math.seedrandom

  let seedify = seed => {
    if (
      /(number|string)/i.test(
        Object.prototype.toString.call(seed).match(/^\[object (.*)\]$/)[1]
      )
    )
      return seed

    if (isNaN(seed))
      return Number(String((this.strSeed = seed)))
        .split('')
        .map(x => x.charCodeAt(0))

    return seed
  }

  let seedRand = (func, min, max) => {
    return Math.floor(func() * (max - min + 1)) + min
  }

  self.shuffle = (arr, seed) => {
    if (!Array(arr).isArray()) return null
    seed = seedify(seed) || 'none'

    let size = arr.length
    let rng = seedrandom(seed)
    let resp = []
    let keys = []

    for (var i = 0; i < size; i++) keys.push(i)
    for (var i = 0; i < size; i++) {
      var r = seedRand(rng, 0, keys.length - 1)
      var g = keys[r]
      keys.splice(r, 1)
      resp.push(arr[g])
    }
    return resp
  }

  self.unshuffle = function(arr, seed) {
    if (!Array(arr).isArray()) return null
    seed = seedify(seed) || 'none'

    var size = arr.length
    var rng = seedrandom(seed)
    var resp = []
    var map = []
    var keys = []

    for (var i = 0; i < size; i++) {
      resp.push(null)
      keys.push(i)
    }

    for (var i = 0; i < size; i++) {
      var r = seedRand(rng, 0, keys.length - 1)
      var g = keys[r]
      keys.splice(r, 1)
      resp[g] = arr[i]
    }

    return resp
  }
}

export const shuffle = a => {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

export const shuffleSeed = require('shuffle-seed')
