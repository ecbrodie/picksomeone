import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PickSomeone from "../components/PickSomeone"
import { PersonListProvider } from "../contexts/PersonListContext"

const IndexPage = () => (
  <PersonListProvider>
    <Layout>
      <SEO title="Picksome.one" />
      <PickSomeone />
    </Layout>
  </PersonListProvider>
)

export default IndexPage
