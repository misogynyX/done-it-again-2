import React from "react"

import Article from "./Article"
import Mark from "./Mark"

interface Props {
  tag: string
  articles: Article[]
}

const Section = (props: Props) => {
  const tag = props.tag
  const articles = props.articles

  return (
    <section id={tag}>
      <h3>축소/은폐</h3>
      <div className="guide">
        <Mark>몹쓸 짓</Mark>, <Mark>손찌검</Mark>, <Mark>홧김에</Mark> 등의 표현은 성폭력의 심각성을 상대적으로 가볍게
        축소하고 희석할 우려가 있습니다. 자신의 가해를 변명하는 가해자의 말을 부각시키고 선정적으로 보도하는 일이
        없도록 가해 행동은 <Mark good>성폭력</Mark>, <Mark good>성범죄</Mark>와 같이 정확히 지칭해야 합니다.
      </div>
      <div className="stats">
        최근 6개월 이내에 수집된 기사 중 부적절한 표현이 담긴 기사는 총 NNNN건 입니다. 이 중 <Mark>축소/은폐</Mark>{" "}
        범주에 속한 표현이 담긴 기사는 총 NN건으로 약 N.N% 입니다.
      </div>
      <ol className="articles">
        {articles.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </ol>
    </section>
  )
}

export default Section
