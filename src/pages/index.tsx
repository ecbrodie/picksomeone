import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "@material-ui/core/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Picksome.one" />
    <Button variant="contained">Pick Someone!</Button>
  </Layout>
)

export default IndexPage
