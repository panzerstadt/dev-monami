import React from 'react'
import { Link } from 'gatsby'

import styles from './Title.module.css'

import logo from '../../_data/assets/logo.svg'

const Monami = ({ home }) => (
  <div className={home ? styles.titleBarHome : styles.titleBarOthers}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      {/* <h1 className={home ? styles.home : styles.others}>Monami 18</h1> */}
      <img
        className={home ? styles.home : styles.others}
        style={{ marginBottom: -5 }}
        src={logo}
        alt="Monami 18"
      />
    </Link>
  </div>
)

export default Monami
