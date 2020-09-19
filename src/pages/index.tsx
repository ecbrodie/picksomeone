import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PickSomeone from "../components/PickSomeone"

const IndexPage = () => (
  <Layout>
    <SEO title="Picksome.one" />
    <PickSomeone />
  </Layout>
)

export default IndexPage
