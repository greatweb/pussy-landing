import React from "react"
import Display from "../../xp/containerGradient/Display/Display"
import Table from "../../xp/Table/Table"
import * as styles from "./Buy.module.scss"
import { StrongText } from "../Main/Main"
import { MenuIds } from "../../Menu/Menu"

function Buy() {
  return (
    <section id={MenuIds.buy}>
      <h4>
        In <StrongText>$PUSSY</StrongText> we trust
      </h4>

      <Display noPadding color="purple">
        <Table
          columns={[
            {
              header: "chain",
              cell: (row) => {
                const { chain, url } = row.row.original
                return (
                  <a
                    href={url}
                    style={{
                      float: "left",
                    }}
                    target="_blank"
                  >
                    {chain}
                  </a>
                )
              },
            },
            {
              header: "research",
              cell: (row) => {
                const { research } = row.row.original
                return (
                  <ul className={styles.research}>
                    {research.map((r) => (
                      <li>
                        <a href={r.url} target="_blank">
                          {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )
              },
            },
            {
              header: "emission",
              cell: (row) => {
                return row.row.original.emission?.toLocaleString()
              },
            },
            {
              header: "buy",
              cell: (row) => {
                return (
                  <a href={row.row.original.url} target="_blank">
                    buy
                  </a>
                )
              },
            },
          ]}
          data={[
            {
              chain: "solana",
              url: "https://raydium.io/swap/?outputMint=5qAWPGkRqb9aV7Yox4gfbJTbm1a9msaswKxyCirwpump&inputMint=sol",
              emission: "-",
              research: [
                {
                  name: "dexscreener",
                  url: "https://dexscreener.com/solana/8cuaphrjarnphtca5fvk7cegnajskumbnadjgwio47gr",
                },
                {
                  name: "solscan",
                  url: "https://solscan.io/token/5qAWPGkRqb9aV7Yox4gfbJTbm1a9msaswKxyCirwpump#holders",
                },
                {
                  name: "birdeye",
                  url: "https://v2.birdeye.so/token/5qAWPGkRqb9aV7Yox4gfbJTbm1a9msaswKxyCirwpump?chain=solana",
                },
                {
                  name: "rugcheck",
                  url: "https://rugcheck.xyz/tokens/5qAWPGkRqb9aV7Yox4gfbJTbm1a9msaswKxyCirwpump",
                },
                {
                  name: "geckoterminal",
                  url: "https://www.geckoterminal.com/solana/pools/8CUApHrJaRnphTCA5Fvk7ceGNAjsKumbNadJgwio47Gr",
                },
              ],
            },
            {
              chain: "sui",
              url: "https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0x85acf4cf62c24cafffb9d354e024dfd2dc86d64610861010ea37c24b694be753::pussy::PUSSY",
              emission: 1_000_000_000,
              research: [
                {
                  name: "suivision",
                  url: "https://suivision.xyz/coin/0x85acf4cf62c24cafffb9d354e024dfd2dc86d64610861010ea37c24b694be753::pussy::PUSSY?tab=Holders",
                },
              ],
            },
            {
              chain: "spacepussy",
              research: [],
            },
          ]}
        />
      </Display>
      <br />

      <div className={styles.blocks}>
        {[
          {
            title: "polycahain design",
            text: "no need for bridges",
          },
          {
            title: "simple tokenomics",
            text: "all supply in LP. LP burned",
          },
          {
            title: "tech included",
            text: "collective learning in mind",
          },
        ].map((item) => (
          <Display color="purple">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Display>
        ))}
      </div>
    </section>
  )
}

export default Buy
