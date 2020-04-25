type Article = {
  article_id: string
  cp_name: string
  title: string
  description: string
  authors: string[]
  keywords: string[]
  date: string
  url: string
  tags: string[]
}

type TagDef = {
  tag: string
  title: string
  description: string
}

type ArticleGroup = {
  tagDef: TagDef
  articles: Article[]
}

declare module "*.css" {
  const content: { [className: string]: string }
  export = content
}
