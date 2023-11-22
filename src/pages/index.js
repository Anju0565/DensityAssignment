import * as React from "react"
import * as styles from "../components/index.module.css"
import Navbar from "../components/Navbar"
import Home from "./Home"


const IndexPage = () => (
  <div className={styles.App}>
    <Navbar />
    <Home />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
