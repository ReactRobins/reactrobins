import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope, faHeart)

const Footer = ({ siteTitle, menuLinks }) => (
  <>
    <div className={styles.footer}>
      <ul style={{ listStyleType: 'none' }}>
        {menuLinks.map(link => (
          <div className={styles.listBackground}>
            <li key={link.name}>
              <Link
                style={{ textDecoration: 'none', color: '#684756' }}
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <div>
        <ul
          style={{
            listStyleType: 'none',
            color: '#684756',
            fontSize: '18px',
            float: 'right',
            marginRight: '20px',
          }}
        >
          <li>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className={styles.icontext}>@ReactRobins</span>
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'medium']} />
            <span className={styles.icontext}>/ReactRobins</span>
          </li>
          <li>
            <FontAwesomeIcon icon="envelope" />
            <span className={styles.icontext}>reactrobins@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      style={{
        textAlign: 'center',
        height: '30px',
        paddingTop: '10px',
        fontSize: '15px',
        backgroundColor: '#efa973',
      }}
    >
      Made with <FontAwesomeIcon style={{ color: 'red' }} icon="heart" /> by
      ReactRobins
    </div>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
