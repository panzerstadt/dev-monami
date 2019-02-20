import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { shuffleSeed, shuffle } from '../../utils/shuffleSeed'
import chunkArray from '../../utils/chunkArray'

import styles from './index.module.css'

import { useWindowSize, useMousePos } from '../../utils/useHooks'
import { remap } from '../../utils/helpers'
import { galleryProducts } from '../Gallery'

// some hack to make local variables keep state
let DUMMY_IMG = []

const calculatePadding = (windowSize, padding) => {
  const l = padding.left
  const t = padding.top

  // only affect left for now
  // map window size to a number between min and max padding
  const leftOut = remap(windowSize.width, 0, 2000, l, l * 16)

  return {
    left: leftOut,
    top: t,
  }
}

const assignProductsToList = (products, list) => {
  let out = []

  list.map((v, i) => {
    let temp = []
    v.map((w, j) => {
      console.log()
      if (products.length === 0) temp.push('')
      temp.push(...products.splice(0, 1))
    })
    out.push(temp)
  })
  return out
}

const RandomGallery = ({
  data,
  cols = 5,
  imgWidth = 200,
  leftPad,
  padding = { left: 10, top: 50 },
  spaceBetween = true,
  random = true,
  seed,
}) => {
  const [outputChunks, setOutputChunks] = useState([])
  const [seedState, setSeedState] = useState(Math.random() * 10) // once per mount

  const windowSize = useWindowSize()
  const mousePos = useMousePos()

  let imgList = data
  const products = shuffleSeed.shuffle(galleryProducts(), seed || seedState)

  if (random) imgList = shuffleSeed.shuffle(data, seed || seedState)

  const posChunks = chunkArray(
    imgList,
    Math.floor(imgList.length / cols)
  ).slice(0, cols)

  // hack
  // save to state, because window size changes break cache
  if (outputChunks.length === 0 && posChunks.length > 0)
    setOutputChunks(posChunks)
  // this switches between initial dataload and saved state
  const chunkToUse = posChunks.length > 0 ? posChunks : outputChunks

  const prodChunks = assignProductsToList(products, chunkToUse)

  const paddingOut = calculatePadding(windowSize, padding)

  const posList = chunkToUse.map((chunk, i) => {
    const padFirstLeft = leftPad ? paddingOut.left + i * imgWidth : i * imgWidth

    return chunk.map((v, j) => {
      const padFirstTop = paddingOut.top + j * imgWidth
      return [
        i === 0 ? padFirstLeft : padFirstLeft + paddingOut.left * i,
        j === 0 ? padFirstTop : padFirstTop + paddingOut.top + j,
      ]
    })
  })

  const output = chunkToUse.map((chunk, i) => {
    return chunk.map((v, j) => {
      return (
        <div
          key={`${i}-${j}`}
          className={styles.imgs + ' ' + styles.hoverable}
          style={{
            left: posList[i][j][0],
            top: posList[i][j][1],
            width: imgWidth,
          }}
        >
          <img
            className={styles.hoverProduct}
            style={{
              position: 'fixed',
              left: mousePos.x,
              top: mousePos.y,
              height: 300,
              width: 300,
              objectFit: 'cover',
            }}
            src={prodChunks[i][j].file}
            alt="product image"
          />
          <Img fluid={v.node.url.fluid} />
        </div>
      )
    })
  })

  return <div className={styles.gallery}>{output}</div>
}

const PanningTableHero = ({ amount, speed, data }) => {
  const [imgState, setImgState] = useState([])

  if (data) {
    // the non-GraphQL way, extensible
    return <RandomGallery data={data} />
  } else {
    return (
      <StaticQuery
        query={graphql`
          {
            heroImages: allFile(
              filter: {
                sourceInstanceName: { eq: "images" }
                relativeDirectory: { eq: "boxes" }
                extension: { in: ["png", "jpg", "jpeg"] }
              }
            ) {
              edges {
                node {
                  sourceInstanceName
                  product: relativeDirectory
                  name
                  url: childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          if (imgState.length === 0) {
            // this statisquery somehow only works once, so
            // this is a hack for saving the queried data
            setImgState([...data.heroImages.edges])
          }

          return <RandomGallery data={imgState} cols={5} />
        }}
      />
    )
  }
}

export default PanningTableHero
