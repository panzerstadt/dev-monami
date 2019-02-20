// main imports
import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

// components
import Image, { UIImages } from '../components/Image'
import SEO from '../components/SEO'
import DataGenerator from '../components/DataGenerator'

import Hero from '../components/Hero'

const IMG = <img src="./clothes-sml.jpg" className={styles.bg} />

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      {/* <div className="page" style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h2>this is the home page</h2>
      <h4>Interactive product discovery here</h4>
      <UIImages query={'pablo-logged-out'} />
      {IMG}
    </div> */}
      <Hero />
      <div style={{ height: '100vh' }} />
    </div>
  )
}

export default IndexPage
