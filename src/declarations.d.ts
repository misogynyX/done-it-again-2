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

declare module "*.css" {
  const content: { [className: string]: string }
  export = content
}
