import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'

// styles
import styles from './index.module.css'

// helpers
import { remap } from '../../../utils/helpers'

const Price = ({ price, left }) => (
  <div className={left ? styles.priceLeft : styles.priceRight}>
    <small>{price.slice(0, 2)}</small>
    {price.slice(2)}
  </div>
)

const GalleryImage = ({ img }) => (
  <div className={styles.img}>
    <Img fluid={img.node.url.fluid} />
  </div>
)

const Descriptions = ({ desc, left }) => (
  <div className={left ? styles.descriptionsLeft : styles.descriptionsRight}>
    {desc}
  </div>
)

const BlockQuote = ({ txt, author }) => {
  const randomQuotes = require('../../../_data/quotes/quotes.json').data
  let quotes
  let person

  if (!txt && !author) {
    const rIndex = parseInt(Math.random() * randomQuotes.length)
    quotes = randomQuotes[rIndex].text
    person = randomQuotes[rIndex].author
  }

  return (
    <div>
      <blockquote>
        <p>“{quotes}”</p>
      </blockquote>

      <p>{person}</p>
    </div>
  )
}

let leftIndex, rightIndex
let bustCount = 0
let descCount = 0
let sizeDescCount = 0

const Description = ({ txt, index }) => {
  if (index === 0) {
    bustCount = 0
    descCount = 0
    sizeDescCount = 0
  }

  if (txt.descriptions && descCount === 0) {
    descCount++
    return txt.descriptions
  } else if (txt.sizes.description && sizeDescCount === 0) {
    sizeDescCount++
    return txt.sizes.description
  } else if (txt.sizes.bust && bustCount === 0) {
    bustCount++
    return (
      <span>
        bust: {txt.sizes.bust}
        <br />
        waist: {txt.sizes.waist}
        <br />
        hip: {txt.sizes.hip}
      </span>
    )
  } else {
    return <BlockQuote />
  }
}

const LeftImageRightText = ({ img, txt, index }) => {
  index === 0 ? (leftIndex = 0) : leftIndex++

  return (
    <div className={styles.left}>
      <GalleryImage img={img} />
      <Price price={txt.price} left />
      <Descriptions left desc={<Description txt={txt} index={index} />} />
    </div>
  )
}

const LeftTextRightImage = ({ img, txt, index }) => {
  index === 0 ? (rightIndex = 0) : rightIndex++

  return (
    <div className={styles.right}>
      <Descriptions desc={<Description txt={txt} index={index} />} />
      <Price price={txt.price} />
      <GalleryImage img={img} />
    </div>
  )
}

export const StandardGallery = ({ images, labels, randomFlip }) => {
  const [marginTop, setMarginTop] = useState('')
  const [flip, setFlip] = useState(false)

  // random spacing
  const marginSets = [15, 30, 80]

  // componentDidMount
  useEffect(() => {
    setMarginTop(marginSets[parseInt(Math.random() * marginSets.length)])
    if (randomFlip) setFlip(parseInt(Math.random() + 0.2))
  }, [])

  const galleryOut = images.map((v, i) => {
    // text is left or right
    const left = i % 2 || i === 0 ? true : false

    return (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          margin:
            flip && !left
              ? `-${marginTop / 2}px auto 0`
              : `${marginTop}px auto 0`,
        }}
      >
        {left ? (
          <LeftTextRightImage img={v} txt={labels} index={i} />
        ) : (
          <LeftImageRightText img={v} txt={labels} index={i} />
        )}
      </div>
    )
  })

  const brand = labels.brand

  return (
    <div>
      <h3 className={styles.brandTitle}>{brand || 'no-brand'}</h3>
      <hr />
      {galleryOut}
    </div>
  )
}

export const StandardGallery2 = data => {}

export const SpecialHome = data => {}
