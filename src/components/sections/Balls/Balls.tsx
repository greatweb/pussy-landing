import React from "react"
import BlockWithImage from "../../BlockWithImage/BlockWithImage"

function Balls() {
  return (
    <BlockWithImage
      title={
        <div>
          <h4>Balls</h4>
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

          <ul>
            <li>🟢 $BOOT: Bostrom blockchain</li>
            <li>🟣 $PUSSY, SpacePussy blockchain</li>
            <li> 🔵 $CYB. Cyber protocol </li>
          </ul>
        </>
      }
      image={require("../../../images/pusyan.png").default}
    />
  )
}

export default Balls
