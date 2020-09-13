import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import CourseCard from "../components/courseCard"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
  {
    courses {
      externalResources {
      id
      title
      description
      linkURL
      logoURL
      categories {
        id
        category
      }
      votes {
        positive
      }
    }
    }
  }
  `)

  return (
  <Layout>
    <SEO title="Cassandra: All Courses" />
    <h1 className="courses-top-title">You can view all the available courses here.</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="container">
                    <section className="post-feed">
                        {data.courses.externalResources.map( course => (
                            // The tag below includes the markup for each course
                            <CourseCard key={course.id} course={course} />
                            
                        ))}
                    </section>
                    {/* <Pagination pageContext={pageContext} /> */}
        </div>
  </Layout>
  )
}

export default SecondPage
