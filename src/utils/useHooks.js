import React, { useLayoutEffect, useEffect, useState } from 'react'

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // empty array == componentdidmount && componentwillunmount
}

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const useMousePos = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const updateMousePos = e => {
    const d = { x: e.clientX, y: e.clientY }
    setPos(d)
  }
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos)
    return () => window.removeEventListener('mousemove', updateMousePos)
  }, [])

  return pos
}
