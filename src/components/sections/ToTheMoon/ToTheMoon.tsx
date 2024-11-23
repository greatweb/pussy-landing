import React from "react"
import { StrongText } from "../Main/Main"
import Display from "../../xp/containerGradient/Display/Display"
import DisplayTitle from "../../xp/containerGradient/DisplayTitle/DisplayTitle"
import * as styles from "./ToTheMoon.module.scss"
import { MenuIds } from "../../Menu/Menu"

function ToTheMoon() {
  return (
    <section id={MenuIds.progress}>
      <h4>
        e/acc <StrongText>to the Moon</StrongText> and beyond
      </h4>

      <div className={styles.content}>
        <Display color="purple">
          <ul>
            <li>
              level 4:
              <span> $ 1P</span>
            </li>
            <li>
              level 3:
              <span> $ 1T</span>
            </li>
            <li>
              level 2:
              <span> $ 1B</span>
            </li>
            <li>
              level 1:
              <span> $ 1M</span>
            </li>
          </ul>
        </Display>

        <img src={require("../../../images/Pussyan.png").default} />

        <Display color="purple" title={<DisplayTitle title="pussyan scale" />}>
          <p className={styles.text}>
            method of measuring a civilization's level of technological
            advancement based on the value of $PUSSY
          </p>
        </Display>
      </div>

      {/* <div>progress</div> */}
    </section>
  )
}

export default ToTheMoon
