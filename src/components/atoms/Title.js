import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'

const titleBarStyle = {
  textAlign: 'center',
  width: '100%',
  paddingBottom: 15,
}

const logoStyle = {
  ...scale(1.5),
  color: '#BDA989',
  textDecoration: 'none',
  margin: 0,
}

const Monami = () => (
  <div style={titleBarStyle}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 style={logoStyle}>Monami 18</h1>
    </Link>
  </div>
)

export default Monami
