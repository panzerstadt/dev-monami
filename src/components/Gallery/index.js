import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import ReactJson from 'react-json-tree'

import { filterProducts } from './helpers'

// page types
import { StandardGallery } from './components'

// themes
const googleTheme = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED',
}

const displayProduct = data => {
  return <p>hey</p>
}

/**
 *
 *
 * @param {*} { filter } accepts a filter of type object with a key search and the value to search for
 * @returns
 */
const Gallery = ({ filter }) => {
  return (
    <StaticQuery
      query={ProductsQuery}
      render={data => {
        if (!filter) {
          return (
            <ul>
              {Object.keys(data).map((k, i) => {
                const list = data[k].edges

                return [
                  <li key={k}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 30,
                      }}
                    >
                      <h2>{k}</h2>
                    </div>
                  </li>,
                  <ol key={k + i}>
                    {list.map((v, j) => {
                      const d = v.node

                      let out
                      if (d.img) {
                        // img
                        out = <img width={125} src={d.img.src} />
                      } else if (d.product) {
                        // product-labelled json
                        out = (
                          <ReactJson
                            data={d}
                            theme={googleTheme}
                          />
                        )
                      } else {
                        // default is json
                        out = (
                          <ReactJson
                            data={d}
                            theme={googleTheme}
                          />
                        )
                      }

                      return (
                        <li key={j}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginBottom: 30,
                            }}
                          >
                            {out}
                          </div>
                        </li>
                      )
                    })}
                  </ol>,
                ]
              })}
            </ul>
          )
        } else {
          const prod = filterProducts({ filter, data })

          // for all objects
          return Object.keys(prod).map((group, i) => {
            const imgs = prod[group].images
            const lbls = prod[group].labels[0].node.jsonData.data

            if (lbls.length > 1) {
              throw 'there is more than one json file for the product. this is not allowed.'
            }

            return (
              <StandardGallery key={i} images={imgs} labels={lbls} randomFlip />
            )

            // for every image, return a full div displaying image together with optional text
          })
        }
      }}
    />
  )
}

export default Gallery

const ProductsQuery = graphql`
  {
    # all json objects
    jsons: allFile(
      filter: {
        sourceInstanceName: { eq: "products" }
        extension: { eq: "json" }
      }
    ) {
      edges {
        node {
          product: relativeDirectory
          jsonData: childJson {
            data {
              page
              brand
              type
              price
              descriptions
              tags
              sizes {
                bust
                waist
                hip
                description
              }
            }
          }
          name
          extension
          relativePath
          changeTime
        }
      }
    }

    # all image objects (need to be passed to GatsbyImageSharp)
    imgs: allFile(
      filter: {
        sourceInstanceName: { eq: "products" }
        extension: { in: ["png", "jpg", "jpeg"] }
      }
    ) {
      edges {
        node {
          product: relativeDirectory
          name
          extension
          relativePath
          changeTime
          url: childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    # all images as a gallery
    imgs_gallery: allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            img: resize(width: 250) {
              src
            }
          }
        }
      }
    }
  }
`
