import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ErrorPage from '../components/Error'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage />
  </Layout>
)

export default NotFoundPage
