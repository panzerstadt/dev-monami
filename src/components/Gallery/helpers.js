import _ from 'lodash'
import getKeys from 'uas-get-my-keys'

const groupByProduct = (nodes, key) => {
  const dirs = nodes.map(v => v.node.product)

  let groups = {}

  dirs.map((v, i) => {
    if (!groups[v]) {
      groups[v] = { [key]: [] }
    }

    groups[v] = {
      [key]: [...(groups[v][key] || []), ...nodes[i]],
    }

    //groups[v].key = [...(groups[v] || []), ...nodes[i]]
  })

  return groups
}

const makeProductSets = (edgesImg, edgesJson) => {
  const imgs = groupByProduct(edgesImg, 'images')
  const jsons = groupByProduct(edgesJson, 'labels')

  let sets = {}
  Object.keys(imgs).map(v => {
    sets[v] = { ...imgs[v], ...jsons[v] }
  })

  return sets
}

export const filterProducts = ({ filter, data, ...rest }) => {
  // create filter criteria with defaults
  const filterCriteria = {
    value: 'men',
    key: 'page',
    ...filter,
  }

  // make sets of products from images and jsons found in graphql query
  const sets = makeProductSets(data.imgs.edges, data.jsons.edges)

  // make filter keys from sets
  const filterProductSet = (set, key, value) => {
    const filterResults = getKeys(set, key)[key]
    const setKeys = Object.keys(set).map((v, i) => ({
      value: filterResults[i],
      key: v,
    }))

    const s = setKeys.filter(v => v.value === value)
    let out = {}
    s.map(v => (out[v.key] = set[v.key]))
    return out
  }

  console.log('filtering')
  console.log(filter)
  const pageSet = filterProductSet(
    sets,
    filterCriteria.key,
    filterCriteria.value
  )

  if (!filter.subFilter || !filter.subFilter.value) {
    return pageSet
  } else {
    const categorySet = filterProductSet(
      pageSet,
      filterCriteria.subFilter.key,
      filterCriteria.subFilter.value
    )
    console.log('category set')
    console.log(categorySet)
    return categorySet
  }

  const filterResults = getKeys(sets, filterCriteria.key)[filterCriteria.key]
  const setKeys = Object.keys(sets).map((v, i) => ({
    value: filterResults[i],
    key: v,
  }))

  // return product sets filtered by filter value
  const s = setKeys.filter(v => v.value === filter.value)
  let out = {}
  s.map(v => (out[v.key] = sets[v.key]))
  return out
}
