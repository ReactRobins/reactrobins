import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/layout.module.css'

const CodeOfConduct = () => (
  <Layout>
    <SEO
      title="Code of Conduct"
      keywords={['gatsby', 'application', 'react']}
    />
    <div className={styles.conductContainer}>
      <h1>Code of Conduct</h1>
    </div>
  </Layout>
)

export default CodeOfConduct
