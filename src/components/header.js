import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './layout.module.css'
import { slide as Menu } from 'react-burger-menu'

var navStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    color: 'black'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#795c5f',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    'flex-direction': 'column',
  },
  bmItem: {
    display: 'inline-block',
    color: 'white',
    'text-decoration': 'none',
    padding: '10px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Header = ({ siteTitle, menuLinks }) => (
  <div>
    <div className={styles.navContainer}>
      <div className={styles.navbarLinks}>
        {menuLinks.map(link => (
          <li className={styles.list} key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </div>
    </div>
    <Menu styles={ navStyles }>
      <Link to="/">
        <h2 className={styles.logo}>{'< ReactRobins \\' + '>'}</h2>
      </Link>
      {menuLinks.map(link => (
        <Link to={link.link} key={link.name}>{link.name}</Link>
      ))}
    </Menu>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
