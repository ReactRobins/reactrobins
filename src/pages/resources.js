import React from 'react'
import styles from '../components/layout.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Resources" keywords={['gatsby', 'application', 'react']} />
    <div className={styles.page}>
      <h1 className={styles.header}>Resources</h1>
    </div>
  </Layout>
)

export default IndexPage
