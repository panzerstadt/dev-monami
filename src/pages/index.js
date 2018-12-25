// main imports
import React from 'react'
import { Link } from 'gatsby'

// components
import Image from '../components/Image'
import SEO from '../components/SEO'
import DataGenerator from '../components/DataGenerator'
import ErrorPage from '../components/Error'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <ErrorPage>
      <h2>this is the home page</h2>
      <Link to="/all-files">
        <p>here, check out some files!</p>
      </Link>
    </ErrorPage>
  </div>
)

export default IndexPage
