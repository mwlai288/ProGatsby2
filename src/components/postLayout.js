import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const postlayout = ({ data, location }) => {
  const { markdownRemark } = data
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
      <p>{markdownRemark.frontmatter.date}</p>
    </Layout>
  )
}

export default postlayout
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
