import React from "react"

import styles from "./SectionList.module.css"
import Section from "./Section"

interface Props {
  articles: Article[]
}

const SectionList = (props: Props) => {
  const articles = props.articles

  // group articles by tag
  const groups = [
    {
      tag: "trivialize",
      title: "사소하게 만들기",
      articles: articles,
    },
    {
      tag: "demonize",
      title: "악마화",
      articles: articles,
    },
  ]

  return (
    <section className={styles.root}>
      <h2>기사 모음</h2>
      <ul>
        {groups.map(group => (
          <Section key={group.tag} tag={group.tag} articles={group.articles}></Section>
        ))}
      </ul>
    </section>
  )
}

export default SectionList
