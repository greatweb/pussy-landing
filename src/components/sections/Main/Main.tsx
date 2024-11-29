import React from "react"
import * as styles from "./Main.module.scss"
import { StrongText } from "../../StrongText/StrongText"
import DisplaySmall from "../../DisplaySmall/DisplaySmall"
import { MenuIds } from "../../Menu/Menu"

function Main({ data, totalCap }) {
  const totalVolume = (+data?.solana?.data?.attributes?.volume_usd?.h24 +
    +data.sui?.pool?.vol_in_usd_24h) as string

  return (
    <section className={styles.wrapper} id={MenuIds.main}>
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

      {!!totalVolume && (
        <div className={styles.blocks}>
          <DisplaySmall
            title={"$ " + Number(totalVolume).toFixed(0)}
            content="24h volumes"
          />
          <DisplaySmall
            title={"$ " + String(totalCap.toFixed(0)).toLocaleLowerCase()}
            content="total cap"
          />
          {/* <DisplaySmall
            title={"$" + Number(totalVolume).toFixed(0)}
            content="hodlers"
          /> */}
        </div>
      )}
    </section>
  )
}

export default Main
