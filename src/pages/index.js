import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import CategoryCard from "../components/categoryCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    courses {
      categories {
        id
        category
      }
    }
  }
  `)
  console.log(data)
  return (
  <Layout>
    <SEO title="Cassandra: Open Education" />
    <h1 className="index-title">Welcome to Cassandra</h1>
    <p>Access to thousands of completely free and open courses from some of the most prestigious institutions in the world.</p>
    <p>Get started now, by choosing the category you're interested in below.</p>
    {/* Searchbar */}
    <div className="container">
                    <section className="post-feed">
                        {data.courses.categories.map( category => (
                            // The tag below includes the markup for each category 
                            <CategoryCard key={category.id} category={category} />
                            
                        ))}
                    </section>
                    {/* <Pagination pageContext={pageContext} /> */}
    </div>
    <Link to="/page-2/">All Resources</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export default IndexPage
