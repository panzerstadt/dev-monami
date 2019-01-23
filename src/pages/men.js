// main imports
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

// components
import Image from '../components/Image'
import SEO from '../components/SEO'
import Gallery from '../components/Gallery'

const PageTemplate = ({ location }) => {
  const [category, setCategory] = useState('')
  // componentDidMount in functions
  //https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-functional-component
  useEffect(() => {
    if (location.state) {
      if (location.state.category !== category) {
        setCategory(location.state.category)
      }
    }
  })

  return (
    <div>
      <SEO title="Men" keywords={['cool', 'trendy', 'affordable']} />
      <div className="page" style={{ margin: '3rem auto' }}>
        <Gallery
          filter={{
            key: 'page',
            value: 'men',
            subFilter: { key: 'type', value: category },
          }}
        />
      </div>
    </div>
  )
}

export default PageTemplate
