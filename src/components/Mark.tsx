import React from "react"

interface Props {
  children: string
  good?: boolean
}

const Mark = (props: Props) => (
  <span style={{ color: "#FFF", backgroundColor: props.good ? "green" : "red" }}>{props.children}</span>
)

export default Mark
