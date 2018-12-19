import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'

const footerHeight = 170
const footerStyle = {
  height: '100%',
  backgroundColor: '#021B2D',
  color: '#F0F0F0',
  display: 'flex',
}

const infoBoxStyle = {
  width: '60%',
  display: 'flex',

  infoBox: {
    padding: 20,
  },
}

const linkStyle = {
  fontWeight: 100, // means very think font
  fontFamily: 'serif', // change font type here, refer to css for how to write
  color: '#C1C1C1', // font color
  textDecoration: 'none', // because links have underline be default, this takes it out
  lineHeight: 0.5,
  margin: 0,
}

const navLink = (href_link, text, color = '#C1C1C1') => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  return (
    <Link to={href_link} style={{ textDecoration: 'none' }}>
      <p style={{ ...linkStyle, color: color }}>{text}</p>
    </Link>
  )
}

const bottomContent = () => {
  return (
    <div style={infoBoxStyle}>
      <div style={infoBoxStyle.infoBox}>
        <h4 style={{ color: '#eeeeee' }}>Help</h4>
        {navLink('#', 'Purchase')}
        <br />
        {navLink('#', 'Delivery')}
        <br />
        {navLink('#', 'FAQs')}
      </div>
      <div />
      <div style={infoBoxStyle.infoBox}>
        <h4 style={{ color: '#eeeeee' }}>About Us</h4>
        {navLink('#', 'The Company')}
        <br />
        {navLink('#', 'What We Love')}
      </div>
    </div>
  )
}

const Footer = ({ height }) => (
  <div
    style={{
      height: height || footerHeight,
      width: '100%',
    }}
  >
    <div style={footerStyle}>{bottomContent()}</div>
  </div>
)

export default Footer
