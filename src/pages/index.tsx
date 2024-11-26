import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Stars from "../components/xp/stars"
import Buy from "../components/sections/Buy/Buy"
import * as styles from "./index.module.scss"
import "./global.scss"
import Main from "../components/sections/Main/Main"
import About from "../components/sections/About/About"
import Pussyan from "../components/sections/Pussyan/Pussyan"
import Balls from "../components/sections/Balls/Balls"
import Vision from "../components/sections/Vision/Vision"
import Neoreligion from "../components/sections/Neoreligion/Neoreligion"
import ToTheMoon from "../components/sections/ToTheMoon/ToTheMoon"
import Menu from "../components/Menu/Menu"
import Button from "../components/xp/btnGrd"
import axios from "axios"
import { useEffect, useState } from "react"
import Splash from "../components/Splash/Splash"

function getSolData() {
  return axios.get(
    "https://api.geckoterminal.com/api/v2/networks/solana/pools/8CUApHrJaRnphTCA5Fvk7ceGNAjsKumbNadJgwio47Gr"
  )
}

function getSuiData() {
  return axios.get(
    "https://api.geckoterminal.com/api/v2/networks/sui-network/pools/0xfec941f67693777b170dbd84edb14ec5afc1e4e07f65ce8c51286f06bd9615ab"
  )
}

window.reset = () => localStorage.setItem("entered", "false")

const IndexPage: React.FC<PageProps> = () => {
  const [solanaData, setSolanaData] = useState()
  const [suiData, setSuiData] = useState()
  const [entered, setEntered] = useState(
    localStorage.getItem("entered") === "true"
  )

  useEffect(() => {
    getSolData().then((res) => {
      setSolanaData(res.data)
    })
  }, [])

  useEffect(() => {
    getSuiData().then((res) => {
      setSuiData(res.data)
    })
  }, [])

  function handleEnter() {
    setEntered(true)
    localStorage.setItem("entered", "true")
  }

  return (
    <main className={styles.wrapper}>
      <Stars />

      {!entered ? (
        <Splash onEnter={handleEnter} />
      ) : (
        <>
          <aside>
            <Menu />
          </aside>

          <div className={styles.content}>
            <Main
              data={{
                solana: solanaData,
                sui: suiData,
              }}
            />
            <About />
            <Pussyan />
            <Balls />
            <Vision />
            <Neoreligion />
            <ToTheMoon />
            <Buy
              data={{
                solana: solanaData,
                sui: suiData,
              }}
            />
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
        </>
      )}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>pussy</title>

      <link
        rel="icon"
        type="image/png"
        href={require("../images/spacepussy.png").default}
      />
    </>
  )
}
