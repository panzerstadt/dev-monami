import React from 'react'

import styles from './Searchbar.module.css'

export default ({ home }) => {
  return (
    <input
      className={
        home
          ? 'smooth-transition ' + styles.searchbarHome
          : 'smooth-transition ' + styles.searchbarOthers
      }
      placeholder="search"
    />
  )
}
