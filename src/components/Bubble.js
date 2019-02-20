import React, { useState } from 'react'

import styles from './Bubble.module.css'

import Searchbar from './atoms/Searchbar'
import { UIImages } from '../components/Image'
import { useLockBodyScroll } from '../utils/useHooks'

import Pin1 from '../_data/assets/pin1.svg'
import Pin2 from '../_data/assets/pin2.svg'
import search from '../_data/assets/search.svg'

const DUMMY_RESULTS = [
  'pablo-downloading',
  'pablo-logged-out',
  'pablo-message-sent',
  'pablo-page-not-found',
  'pablo-no-connection',
]

const Modal = () => {
  return (
    <div className={'overlay ' + styles.bubbleOverlay}>
      <div className={styles.contents}>
        <div className={styles.search}>
          <Searchbar />
          <img className={styles.location} src={Pin1} />
        </div>

        <div className={styles.results}>
          {DUMMY_RESULTS.map(v => {
            return (
              <div>
                <UIImages query={v} />
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const BubbleButton = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={styles.bubbleComponent}
      style={{
        background: expanded
          ? 'linear-gradient(270deg, #ffffffef, #efefefef)'
          : 'transparent',
      }}
    >
      {expanded ? (
        <>
          <Modal />
          <button
            onClick={() => setExpanded(!expanded)}
            className={styles.bubble}
          >
            x
          </button>
        </>
      ) : (
        <button
          onClick={() => setExpanded(!expanded)}
          className={styles.bubble}
        >
          <img src={search} height={18} style={{ margin: -3 }} />
        </button>
      )}
    </div>
  )
}

export default BubbleButton
