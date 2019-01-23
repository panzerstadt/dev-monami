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
      title="Accessories"
      keywords={['fashion', 'summer', 'winter', 'autumn', 'spring', 'trendy']}
    />
    {/* <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      {/* <h2>all files</h2>
      <Gallery />
      <ErrorPage>
        <Link to="/all-files">
          <p>here, check out some files!</p>
        </Link>
      </ErrorPage>
    </div> */}

    <div className="page" style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h2>this is the accessories page</h2>
      <UIImages query={'pablo-upgrade'} />
    </div>
  </div>
)

export default PageTemplate
