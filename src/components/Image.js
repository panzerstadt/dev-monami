import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export const Image = ({ fluid_data }) => {
  // fluid data is a resizeable data source written from
  // graphql queries
  return <Img fluid={fluid_data} />
}

export const UIImages = ({ query }) => (
  <StaticQuery
    query={graphql`
      {
        UIImages: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "pablo" }
            extension: { in: ["png", "jpg", "jpeg"] }
          }
        ) {
          edges {
            node {
              sourceInstanceName
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
      }
    `}
    render={data => {
      return (
        <Img
          fluid={
            data.UIImages.edges.filter(
              (v, i) =>
                v.node.name === query || i === data.UIImages.edges.length - 1
            )[0].node.url.fluid
          }
        />
      )
    }}
  />
)

const DummyImage = () => <img src="#" />

export default DummyImage
