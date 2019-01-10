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
      <div className={styles.pageLinks}>
        {menuLinks.map(link => (
          <div className={styles.listBackground}>
            <p key={link.name}>
              <Link
                style={{ textDecoration: 'none', color: '#684756' }}
                to={link.link}
              >
                {link.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <div className={styles.contactUs}>
        <div className={styles.contact}>
          Contact Us:
        </div>
        <div className={styles.contactLinks}>
          <div>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className={styles.icontext}>@ReactRobins</span>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'medium']} />
            <span className={styles.icontext}>/ReactRobins</span>
          </div>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <span className={styles.icontext}>reactrobins@gmail.com</span>
          </div>
        </div>
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
