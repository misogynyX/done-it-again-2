import React from "react"

interface Props {
  article: Article
}

const Article = (props: Props) => {
  const article = props.article

  return (
    <li className="article">
      <div className="cp_name">{article.cp_name}</div>
      <div className="authors">{article.authors.join(",")}</div>
      <div className="date">{article.date}</div>
      <h4 className="title">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h4>
      <div className="description">{article.description}</div>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        더 읽기
      </a>
    </li>
  )
}

export default Article
