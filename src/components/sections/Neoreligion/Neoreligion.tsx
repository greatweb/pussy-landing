import React from "react"
import { StrongText } from "../Main/Main"
import * as styles from "./Neoreligion.module.scss"
import { MenuIds } from "../../Menu/Menu"

function Neoreligion() {
  return (
    <section className={styles.section} id={MenuIds.neoreligion}>
      <h4>
        <StrongText>$PUSSY</StrongText> is <StrongText>Neoreligion</StrongText>
      </h4>
      <p>for the age of superintelligence</p>

      <img src={require("./map.png").default} />

      <div className={styles.labels}>
        <div>
          before <StrongText>$PUSSY</StrongText>
        </div>
        <div>
          after <StrongText>$PUSSY</StrongText>
        </div>
      </div>
    </section>
  )
}

export default Neoreligion
