import React from 'react'

import Layout from '../components/layout'
//import Logo from '../components/logo'
import logo from '../images/react-robins.png'
import styles from '../components/layout.module.css'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className={styles.section1}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <h1 style={{ fontFamily: 'monospace' }}>React.js workshops</h1>
      <hr />
      <p style={{ fontSize: '20px' }}>
        React Robins aims to create a diverse and inclusive environment for
        minorities in tech to learn react.
      </p>
    </div>
    <div className={styles.section2}>
      <div className={styles.inner}>
        <h1>Inclusive</h1>
        <br />
        <p>
          Spicy jalapeno bacon ipsum dolor amet biltong meatball leberkas
          brisket pork belly kielbasa meatloaf tri-tip.
        </p>
      </div>
      <div className={styles.inner}>
        <h1>Diverse</h1>
        <br />
        <p>
          Swine kevin shankle, drumstick ham hock t-bone brisket buffalo biltong
          prosciutto pork belly.
        </p>
      </div>
      <div className={styles.inner}>
        <h1>Educational</h1>
        <br />
        <p>
          Pork loin ball tip bacon venison swine alcatra filet mignon burgdoggen
          tail pancetta corned beef. Doner shankle turkey boudin jowl.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
