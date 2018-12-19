import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import DataGenerator from '../components/DataGenerator'

import ErrorPage from '../components/Error'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <ErrorPage>
      <Link to="/all-files">
        <p>here, check out some files!</p>
      </Link>
    </ErrorPage>
  </Layout>
)

export default IndexPage
