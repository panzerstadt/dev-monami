import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

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
  return (
    <Layout>
      <div>
        some data here <Link to="/404">press link!</Link>
      </div>
    </Layout>
  )
}

export default DataGenerator

export const ProductsQuery = graphql`
  {
    allFile {
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
