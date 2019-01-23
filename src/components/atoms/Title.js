import React from 'react'
import { Link } from 'gatsby'

import styles from './Title.module.css'

const Monami = ({ home }) => (
  <div className={styles.titleBar}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 className={home ? styles.home : styles.others}>Monami 18</h1>
    </Link>
  </div>
)

export default Monami
