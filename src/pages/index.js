// main imports
import React from 'react'
import { Link } from 'gatsby'

// components
import Image, { UIImages } from '../components/Image'
import SEO from '../components/SEO'
import DataGenerator from '../components/DataGenerator'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className="page" style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h2>this is the home page</h2>
      <UIImages query={'pablo-list-is-empty'} />
    </div>
  </div>
)

export default IndexPage
