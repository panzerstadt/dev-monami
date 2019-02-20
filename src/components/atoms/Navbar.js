import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import _ from 'lodash'

import styles from './Navbar.module.css'

import { HOME_HEADER_HEIGHT, OTHERS_HEADER_HEIGHT } from '../../utils/constants'
const ALL_LINKS = [
  {
    url: '/women',
    label: 'Women',
  },
  {
    url: '/men',
    label: 'Men',
  },
  {
    url: '/accessories',
    label: 'Accessories',
  },
  // {
  //   url: '/occasions',
  //   label: 'Occasions',
  // },
  {
    url: '/about',
    label: 'About Us',
  },
  // {
  //   url: '/contact',
  //   label: 'Contact',
  // },
]

// make a function to spit out the 'Link' output because you're doing
// more work than you have to
const NavLink = ({
  i,
  href_link,
  text,
  selected,
  onClick,
  onMouseOver,
  state,
  ...rest
}) => {
  return (
    <Link
      key={i}
      to={href_link}
      onClick={onClick}
      onMouseOver={onMouseOver}
      style={{ textDecoration: 'none', zIndex: 50 }}
      state={state}
    >
      <p className={selected ? styles.selected : styles.link} {...rest}>
        {text}
      </p>
    </Link>
  )
}

const SubNavbar = ({ categories, selected, hovered, onClick, home }) => {
  //const page = selected.pathname.replace(/\//g, '')
  const navCategories = _.intersectionBy(
    categories.filter(v => v.page === hovered),
    'type'
  )

  const all_links = navCategories.map(v => {
    return {
      url: '/' + v.page,
      label: v.type,
    }
  })

  const navBarOut = all_links.map((v, i) => {
    return (
      <NavLink
        className={styles.subLink}
        key={i}
        i={i}
        href_link={v.url}
        text={v.label}
        selected={v.url === selected.pathname}
        state={{ category: v.label }}
        onClick={onClick}
      />
    )
  })

  if (navCategories.length === 0) {
    return null
  }

  return (
    <div
      className={styles.subNavbar}
      style={{ top: home ? HOME_HEADER_HEIGHT : OTHERS_HEADER_HEIGHT }}
    >
      <div className={styles.subNavbarText}>
        <h2 className="highlight-gold">Shop by Category</h2>
        {navBarOut}
      </div>
    </div>
  )
}

const NavbarDiv = ({ onMouseOver, selected }) =>
  ALL_LINKS.map((v, i) => {
    return (
      <NavLink
        key={i}
        i={i}
        href_link={v.url}
        text={v.label}
        selected={v.url === selected.pathname}
        onMouseOver={onMouseOver}
      />
    )
  })

const Navbar = ({ selected, categories, home }) => {
  const [hovered, setHovered] = useState('')

  const setCategory = e => {
    const category = e.target.innerHTML
    //console.log(e.target.innerHTML)
  }

  return (
    <div className={styles.navbar}>
      <NavbarDiv
        selected={selected}
        onMouseOver={e => {
          let lbl = e.currentTarget.href.split('/')
          lbl = lbl[lbl.length - 1]

          setHovered(lbl)
          e.preventDefault()
        }}
      />
      <SubNavbar
        home={home}
        selected={selected}
        hovered={hovered}
        categories={categories}
        onClick={setCategory}
      />
    </div>
  )
}

const HierarchicalNavBar = ({ selected, home }) => (
  <StaticQuery
    query={NavbarQuery}
    render={data => {
      const allTypes = data.jsons.edges.map(v => ({
        page: v.node.jsonData.data.page,
        type: v.node.jsonData.data.type,
      }))

      return <Navbar home={home} selected={selected} categories={allTypes} />
    }}
  />
)

export default HierarchicalNavBar

const NavbarQuery = graphql`
  {
    # all json objects
    jsons: allFile(
      filter: {
        sourceInstanceName: { eq: "products" }
        extension: { eq: "json" }
      }
    ) {
      edges {
        node {
          product: relativeDirectory
          jsonData: childJson {
            data {
              type
              page
            }
          }
          changeTime
        }
      }
    }
  }
`
