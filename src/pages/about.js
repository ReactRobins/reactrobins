import React from 'react'
import styles from '../components/layout.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className={styles.page}>
      <h1
        className={styles.header}
        style={{ color: '#795c5f', textAlign: 'center' }}
      >
        About ReactRobins
      </h1>
      <p className={styles.content} />
    </div>
  </Layout>
)

export default SecondPage
