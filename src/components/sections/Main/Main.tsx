import React from "react"
import * as styles from "./Main.module.scss"

export function StrongText({ children }) {
  return (
    <strong
      style={{
        color: "#D500F9",
      }}
    >
      {children}
    </strong>
  )
}

function Main() {
  return (
    <section className={styles.wrapper}>
      <h2>
        <StrongText>$PUSSY</StrongText>
      </h2>
      <p>
        symbol of <StrongText>pleasure</StrongText>,{" "}
        <StrongText>confidence</StrongText> and{" "}
        <StrongText>unlimited growth</StrongText>
      </p>

      <div className={styles.content}>
        <p>
          original <StrongText>$PUSSY</StrongText> <br />
          original chain
        </p>

        <img src={require("../../../images/Pussyan.png").default} />

        <p>
          other <StrongText>$PUSSY</StrongText> <br />
          other chains
        </p>
      </div>

      <p>
        <StrongText>memecoin</StrongText> with <StrongText>balls</StrongText>,{" "}
        <StrongText>vision</StrongText> and <StrongText>frienz</StrongText>
      </p>
    </section>
  )
}

export default Main
