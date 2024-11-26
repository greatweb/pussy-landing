import React from "react"
import * as styles from "./Main.module.scss"
import { StrongText } from "../../StrongText/StrongText"

function Main() {
  return (
    <section className={styles.wrapper}>
      <h2>
        <StrongText>$PUSSY</StrongText>
      </h2>
      <p>
        symbol of <StrongText searchLink>pleasure</StrongText>,{" "}
        <StrongText searchLink>confidence</StrongText> and{" "}
        <StrongText searchLink>unlimited growth</StrongText>
      </p>

      <div className={styles.content}>
        <p>
          original <StrongText>$PUSSY</StrongText> <br />
          original chain
        </p>

        <img src={require("../../../images/spacepussy.svg").default} />
        <img src={require("../../../images/Pussyan.png").default} />

        <p>
          other <StrongText>$PUSSY</StrongText> <br />
          other chains
        </p>
      </div>

      <p>
        <StrongText link="#spacepussy">memecoin</StrongText> with{" "}
        <StrongText link="#balls">balls</StrongText>,{" "}
        <StrongText link="#vision">vision</StrongText> and{" "}
        <StrongText link="#frenz">frienz</StrongText>
      </p>
    </section>
  )
}

export default Main
