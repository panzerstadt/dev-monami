// main imports
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// styles or animations
import './layout.css'
import Transition from '../components/Transition'

// components
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} selected={location} />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          <Transition location={location}>{children}</Transition>
        </div>
        <Footer height={170} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
