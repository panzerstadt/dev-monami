// main imports
import React from 'react'
import { Link } from 'gatsby'

// components
import Image, { UIImages } from '../components/Image'
import SEO from '../components/SEO'
import Gallery from '../components/Gallery'
import ErrorPage from '../components/Error'

const PageTemplate = () => (
  <div>
    <SEO
      title="about"
      keywords={['fashion', 'summer', 'winter', 'autumn', 'spring', 'trendy']}
    />
    <div className="page" style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h2>this is the about page</h2>
      <UIImages query={'pablo-downloading'} />
    </div>
  </div>
)

export default PageTemplate
