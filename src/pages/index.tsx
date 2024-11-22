import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Stars from "../components/xp/stars"
import Buy from "../components/sections/Buy/Buy"
import * as styles from "./index.module.scss"
import "./global.scss"
import Main from "../components/sections/Main/Main"
import About from "../components/sections/About/About"
import Pusyan from "../components/sections/Pusyan/Pusyan"
import Balls from "../components/sections/Balls/Balls"
import Vision from "../components/sections/Vision/Vision"
import Neoreligion from "../components/sections/Neoreligion/Neoreligion"
import ToTheMoon from "../components/sections/ToTheMoon/ToTheMoon"
import Menu from "../components/Menu/Menu"
import Button from "../components/xp/btnGrd"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.wrapper}>
      <Stars />

      <aside>
        <Menu />
      </aside>

      <div className={styles.content}>
        <Main />
        <About />
        <Pusyan />
        <Balls />
        <Vision />
        <Neoreligion />
        <ToTheMoon />
        <Buy />
      </div>

      <footer>
        <Button
          onClick={() => {
            document
              .getElementById("buy")
              .scrollIntoView({ behavior: "smooth" })
            window.history.pushState({}, "", "#buy")
          }}
        >
          buy
        </Button>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Pussy</title>
