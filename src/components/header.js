import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './layout.module.css'

const Header = ({ siteTitle, menuLinks }) => (
  <nav className={styles.navContainer}>
    <Link to="/">
      <h2
        style={{
          float: 'left',
          color: '#795C5F',
          marginLeft: '15px',
          fontFamily: 'monospace',
        }}
      >{`< ReactRobins >`}</h2>
    </Link>
    <div style={{ float: 'right', fontFamily: 'monospace' }}>
      {menuLinks.map(link => (
        <li className={styles.list} key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
