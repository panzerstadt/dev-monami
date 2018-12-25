// main imports
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// components
import Image from '../../components/Image'
import SEO from '../../components/SEO'
import Gallery from '../../components/Gallery'

const PageTemplate = ({ location }) => {
  const [category, setCategory] = useState('')
  // componentDidMount in functions
  //https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-functional-component
  useEffect(() => {
    if (location.state) {
      setCategory(location.state.category)
    }
  }, [])

  return (
    <div>
      <SEO
        title="Women"
        keywords={['fashion', 'summer', 'winter', 'autumn', 'spring', 'trendy']}
      />
      <div
        className="page"
        style={{
          margin: '3rem auto',
          minHeight: '70vh',
        }}
      >
        <Gallery
          filter={{
            key: 'page',
            value: 'women',
            subFilter: { key: 'type', value: category },
          }}
        />
      </div>
    </div>
  )
}

export default PageTemplate
