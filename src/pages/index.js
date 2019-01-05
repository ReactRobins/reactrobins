import React from 'react'

import Layout from '../components/layout'
import logo from '../images/robin.png'
import styles from '../components/layout.module.css'
import SEO from '../components/seo'
import SnowStorm from 'react-snowstorm'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['gatsby', 'application', 'react', 'robins', 'coding', 'girls']}
    />
    <div className={styles.section1}>
      <SnowStorm animationInterval={50} snowStick={false} followMouse={false} />
      <img className={styles.logo} src={logo} alt="Logo" />
      <h1 className={styles.title}>ReactRobins</h1>
      <p className={styles.subtitle} style={{ fontSize: '20px' }}>
        React Robins aims to create a diverse and inclusive environment for
        gender minorities in tech to learn React.js.
      </p>
      <a href="http://google.com" className={styles.tutorialLink}>
        Tutorial
      </a>
    </div>
    <div className={styles.section2} id="section2">
      <div className={styles.inner}>
        <h1 className={styles.header}>Inclusive</h1>
        <br />
        <p>
          Spicy jalapeno bacon ipsum dolor amet biltong meatball leberkas
          brisket pork belly kielbasa meatloaf tri-tip.
        </p>
      </div>
      <div className={styles.inner}>
        <h1 className={styles.header}>Diverse</h1>
        <br />
        <p>
          Swine kevin shankle, drumstick ham hock t-bone brisket buffalo biltong
          prosciutto pork belly.
        </p>
      </div>
      <div className={styles.inner}>
        <h1 className={styles.header}>Educational</h1>
        <br />
        <p>
          Pork loin ball tip bacon venison swine alcatra filet mignon burgdoggen
          tail pancetta corned beef. Doner shankle turkey boudin jowl.
        </p>
      </div>
      <div className={styles.upcoming}>
        <h1 className={styles.header}>Upcoming Events</h1>
        <div className={styles.upcomingEvents}>
          No upcoming events just yet!{' '}
          <span role="img" aria-label="sunflower">
            🌻
          </span>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
