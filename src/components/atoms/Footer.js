import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'

import styles from './Footer.module.css'

const infoBoxStyle = {
  //width: '60%',
  display: 'flex',
  paddingBottom: 30,

  infoBox: {
    padding: 20,
  },
}

const navLink = (href_link, text, color = '#C1C1C1') => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  return (
    <Link to={href_link} style={{ textDecoration: 'none' }}>
      <p className={styles.link}>{text}</p>
    </Link>
  )
}

const BottomContent = () => (
  <div className={styles.infoBoxComponent}>
    <div className={styles.infoBox}>
      <h4 className={'highlight-gold ' + styles.linkTitle}>Help</h4>
      {navLink('/contact#purchase', 'Purchase')}
      <br />
      {navLink('/contact/#delivery', 'Delivery')}
      <br />
      {navLink('/contact#FAQ', 'FAQs')}
    </div>
    <div />
    <div className={styles.infoBox}>
      <h4 className={'highlight-gold ' + styles.linkTitle}>About Us</h4>
      {navLink('/about#company', 'The Company')}
      <br />
      {navLink('/about#us', 'What We Love')}
      <br />
      {navLink('/contact', 'Contact Us')}
    </div>
  </div>
)

const Footer = ({ height }) => (
  <div className={styles.footerComponent}>
    <div
      className="footer"
      style={{
        //height: height || footerHeight,
        width: '100%',
      }}
    >
      <hr />
      <div className={styles.footer}>
        <BottomContent />
      </div>
    </div>
  </div>
)

export default Footer
