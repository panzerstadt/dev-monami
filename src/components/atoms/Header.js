import React from 'react'

import styles from './Header.module.css'

import Navbar from './Navbar'
import Title from './Title'

import {
  HOME_HEADER_HEIGHT,
  OTHERS_HEADER_HEIGHT,
  PATH_PREFIX,
} from '../../utils/constants'

const Header = ({ selected }) => {
  const home = selected.pathname === '/' || selected.pathname === PATH_PREFIX
  const hHeight = home ? HOME_HEADER_HEIGHT : OTHERS_HEADER_HEIGHT

  return (
    <div className="smooth-transition header" style={{ height: hHeight }}>
      <div className={home ? styles.home : styles.others}>
        <Title home={home} />
        <Navbar home={home} selected={selected} />
      </div>
      <hr />
    </div>
  )
}

export default Header
