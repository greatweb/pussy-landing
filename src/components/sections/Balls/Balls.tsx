import React from "react"
import BlockWithImage from "../../BlockWithImage/BlockWithImage"
import * as styles from "./Balls.module.scss"

function Balls() {
  return (
    <BlockWithImage
      title={
        <div>
          <h4>balls</h4>
          <p>symbol of will and unlimited growth</p>
        </div>
      }
      content={
        <>
          <p>
            Musts of global consciousness. Balls are chains of collective
            intelligence, each with their own unique purpose. They are means of
            superintelligence.
          </p>

          <ul className={styles.wrapper}>
            <li>
              🟢 <strong>$BOOT</strong>:{" "}
              <a href="https://cyb.ai" target="_blank" rel="noreferrer">
                Bostrom
              </a>{" "}
              blockchain
            </li>
            <li>
              🟣 <strong>$PUSSY</strong>:{" "}
              <a href="https://spacepussy.ai/" target="_blank" rel="noreferrer">
                SpacePussy
              </a>{" "}
              blockchain
            </li>
            <li>
              {" "}
              🔵 <strong>$CYB</strong>:{" "}
              <a
                href="https://github.com/cybercongress"
                target="_blank"
                rel="noreferrer"
              >
                Cyber
              </a>{" "}
              protocol{" "}
            </li>
          </ul>
        </>
      }
      id={"balls"}
      image={require("./balls.svg").default}
    />
  )
}

export default Balls
