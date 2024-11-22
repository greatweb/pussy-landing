import React from "react"
import * as styles from "./Menu.module.scss"

export enum MenuIds {
  main = "main",
  spacepussy = "spacepussy",
  frenz = "frenz",
  vision = "vision",
  neoreligion = "neoreligion",
  progress = "progress",
  buy = "buy",
}

const links = [
  {
    label: "$PUSSY",
    href: "#",
  },
  {
    label: "spacepussy",
    href: "#spacepussy",
  },

  {
    label: "frenz",
    href: "#frenz",
  },
  {
    label: "vision",
    href: "#vision",
  },
  {
    label: "neoreligion",
    href: "#neoreligion",
  },
  {
    label: "progress",
    href: "#progress",
  },
  {
    label: "buy",
    href: "#buy",
  },
]

function Menu() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => {
                if (link.href === "#") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  window.history.pushState({}, "", link.href)
                  return
                }

                const el = document.getElementById(link.href.slice(1))
                if (el) {
                  e.preventDefault()
                  el.scrollIntoView({ behavior: "smooth" })
                  window.history.pushState({}, "", link.href)
                }
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
