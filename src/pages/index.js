import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Cassandra" />
    <h1 className="index-title">Welcome to Cassandra</h1>
    <p>Access to thousands of completely free and open courses from some of the most prestigious institutions in the world.</p>
    <p>Choose the category you're interested in below.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">All Resources</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
