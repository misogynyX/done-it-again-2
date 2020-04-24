import React from "react"

import styles from "./Article.module.css"

interface Props {
  article: Article
}

const Article = (props: Props) => {
  const article = props.article

  return (
    <li className={styles.root}>
      <div className={styles.meta}>
        <div className={styles.cpName}>{article.cp_name}</div>
        <div className={styles.authors}>{article.authors.join(",")}</div>
        <div className={styles.date}>{article.date}</div>
      </div>
      <h4 className={styles.title}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h4>
      <div className={styles.description}>{article.description}</div>
      <a className={styles.more} href={article.url} target="_blank" rel="noopener noreferrer">
        더 읽기
      </a>
    </li>
  )
}

export default Article
