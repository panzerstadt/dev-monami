// main imports
import React from 'react'
import { Link } from 'gatsby'

// components
import Image from '../components/Image'
import SEO from '../components/SEO'
import Gallery from '../components/Gallery'

const PageTemplate = () => (
  <div>
    <SEO
      title="contact"
      keywords={['fashion', 'summer', 'winter', 'autumn', 'spring', 'trendy']}
    />
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h2>all files</h2>
      <Gallery />
    </div>
  </div>
)

export default PageTemplate
