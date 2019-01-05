import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/layout.module.css'

const CodeOfConduct = () => (
  <Layout>
    <SEO
      title="Code of Conduct"
      keywords={['gatsby', 'application', 'react', 'code', 'conduct']}
    />
    <div className={styles.page}>
      <h1 className={styles.header}>Code of Conduct</h1>
    </div>
  </Layout>
)

export default CodeOfConduct
