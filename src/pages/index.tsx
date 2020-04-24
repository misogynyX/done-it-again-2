import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/Intro"
import SectionList from "../components/SectionList"
import HallOfFame from "../components/HallOfFame"
import BestPractices from "../components/BestPractices"

const Index = () => {
  const article = {
    article_id: "2020010100000",
    cp_name: "뫄뫄일보",
    title: "제목",
    description: "본문",
    authors: ["김솨솨"],
    keywords: [],
    date: "20200102",
    url: "https://www.daum.net",
    tags: ["demonize", "trivialize"],
  }
  const articles: Article[] = [article, article, article]

  return (
    <Layout>
      <SEO title="홈" />
      <Intro />
      <SectionList articles={articles} />
      <HallOfFame />
      <BestPractices />
    </Layout>
  )
}

export default Index
