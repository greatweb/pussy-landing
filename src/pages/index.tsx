import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Stars from "../components/xp/stars"
import Buy from "../components/sections/Buy/Buy"
import * as styles from "./index.module.scss"
import "./global.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.wrapper}>
      <Stars />

      <div className={styles.content}>
        <Buy />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
