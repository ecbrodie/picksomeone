import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PickSomeone from "../components/PickSomeone"
import { PersonListProvider } from "../contexts/PersonListContext"
import GithubCorner from "react-github-corner"

const IndexPage = () => (
  <PersonListProvider>
    <Layout>
      <SEO title="Picksome.one" />
      <PickSomeone />
      <GithubCorner href="https://github.com/ecbrodie/picksomeone" />
    </Layout>
  </PersonListProvider>
)

export default IndexPage
