import React from "react"
import * as styles from "./BlockWithImage.module.scss"
import Display from "../xp/containerGradient/Display/Display"
import DisplayTitle from "../xp/containerGradient/DisplayTitle/DisplayTitle"
import classNames from "classnames"

function BlockWithImage({ title, image, content, id, reverse }) {
  return (
    <section
      className={classNames(styles.section, {
        [styles.reverse]: reverse,
      })}
      id={id}
    >
      <img src={image} />
      <Display color="purple" title={<DisplayTitle title={title} />}>
        {content}
      </Display>
    </section>
  )
}

export default BlockWithImage
