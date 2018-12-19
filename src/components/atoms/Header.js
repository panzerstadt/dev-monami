import React from 'react'

import Navbar from './Navbar'
import Title from './Title'

const headerHeight = 170
const headerStyle = {
  height: '100%',
  backgroundColor: '#021B2D',
  color: '#1E2D24',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

const Header = ({ selected }) => (
  <div style={{ height: headerHeight }}>
    <div style={headerStyle}>
      <Title />
      <Navbar selected={selected} />
    </div>
  </div>
)

export default Header
