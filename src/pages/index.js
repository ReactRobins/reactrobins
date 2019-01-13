import React from 'react'

import Layout from '../components/layout'
import logo from '../images/robin.png'
import styles from '../components/layout.module.css'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['gatsby', 'application', 'react', 'robins', 'coding', 'girls']}
    />
    <div className={styles.section1} id="section1">
      <img className={styles.logo} src={logo} alt="Logo" />
      <h1 className={styles.title}>ReactRobins</h1>
      <p className={styles.subtitle} style={{ fontSize: '1em' }}>
        React Robins aims to create a diverse and inclusive environment for
        gender minorities in tech to learn React.js.
      </p>
      <a href="http://google.com" className={styles.tutorialLink}>
        Tutorial
      </a>
    </div>
    <div className={styles.upcoming}>
      <h1 className={styles.header} style={{ fontSize: '4em' }}>
        Upcoming Events
      </h1>
      <div className={styles.upcomingEvents}>
        No upcoming events just yet!{' '}
        <span role="img" aria-label="sunflower">
          🌻
        </span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
