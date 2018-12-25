import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

// // image loading example
// const DummyImage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )

const DataGenerator = ({ data }) => {
  console.log(data)
  return <StaticQuery query={ProductsQuery} render={data => ''} />
}

export default DataGenerator

export const ProductsQuery = graphql`
  {
    pages: allFile {
      edges {
        node {
          sourceInstanceName
          relativeDirectory
          name
          extension
          relativePath
          changeTime
        }
      }
    }
  }
`
