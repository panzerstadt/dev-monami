// main imports
import React from 'react'

// components
import SEO from '../components/SEO'

import ErrorPage from '../components/Error'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <ErrorPage />
  </div>
)

export default NotFoundPage
