import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'

const linkStyle = {
  fontWeight: 100, // means very think font
  margin: 0,
  fontFamily: 'serif', // change font type here, refer to css for how to write
  color: '#877A5F', // font color
  textDecoration: 'none', // because links have underline be default, this takes it out
}

const navbarStyle = {
  width: '100%',
  padding: '5px 0 5px 0',
  backgroundColor: '#F0F0F0',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignContent: 'center',
}

// make a function to spit out the 'Link' output because you're doing
// more work than you have to
const navLink = (i, href_link, text, selected) => {
  // don't worry about crazy `` "" quotes yet. they make
  // nextjs read href_link as a thing and not a word
  return (
    <Link key={i} to={href_link} style={{ textDecoration: 'none' }}>
      <p style={{ ...linkStyle, color: selected ? '#F0B67F' : '#877A5F' }}>
        {text}
      </p>
    </Link>
  )
}

const Navbar = ({ selected }) => {
  let all_links = [
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
    {
      url: '/occasions',
      label: 'Occasions',
    },
    {
      url: '/about',
      label: 'About Us',
    },
    {
      url: '/contact',
      label: 'Contact',
    },
  ]

  all_links = all_links.map((v, i) => {
    return navLink(i, v.url, v.label, v.label === selected)
  })

  return <div style={navbarStyle}>{all_links}</div>
}

export default Navbar
