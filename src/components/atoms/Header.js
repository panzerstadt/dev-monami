import React from 'react'

import styles from './Header.module.css'

import Navbar from './Navbar'
import Title from './Title'
import Searchbar from './Searchbar'

import Pin1 from '../../_data/assets/pin1.svg'
import Pin2 from '../../_data/assets/pin2.svg'

import { HOME_HEADER_HEIGHT, OTHERS_HEADER_HEIGHT } from '../../utils/constants'

const Header = ({ selected }) => {
  const home = selected.pathname === '/'
  const hHeight = home ? HOME_HEADER_HEIGHT : OTHERS_HEADER_HEIGHT

  return (
    <div className="smooth-transition header" style={{ height: hHeight }}>
      <div className={home ? styles.home : styles.others}>
        <div className={styles.titleBar}>
          <div className={styles.functionsRow}>
            <Searchbar home={home} />
            <img className={styles.location} src={Pin1} />
          </div>

          <Title home={home} />
        </div>

        <Navbar home={home} selected={selected} />
      </div>
      <hr />
    </div>
  )
}

export default Header
