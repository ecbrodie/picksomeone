import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { Container } from "@material-ui/core"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container maxWidth="sm">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>© Evan Brodie</Footer>
    </Container>
  )
}

export default Layout
