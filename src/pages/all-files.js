import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { scale } from '../utils/typography'

const AllFiles = ({ data }) => {
  console.log(data.pages.edges)
  return (
    <Layout>
      <div style={{ minHeight: '80vh', margin: '3rem auto', maxWidth: 600 }}>
        <h1>all products</h1>
        <br />
        <ol>
          {data.pages.edges.map((v, i) => {
            const d = v.node

            const productDate =
              parseInt(d.relativePath.split('/')[0]) || 'not specified'

            return (
              <li key={i}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 30,
                  }}
                >
                  <strong>{d.modifiedTime}</strong>
                  <small>product date: {productDate}</small>
                  <small>instance: {d.sourceInstanceName}</small>
                  <small>filepath: {d.relativePath}</small>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default AllFiles

export const FilesQuery = graphql`
  {
    pages: allFile {
      edges {
        node {
          sourceInstanceName
          relativeDirectory
          name
          extension
          relativePath
          modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
