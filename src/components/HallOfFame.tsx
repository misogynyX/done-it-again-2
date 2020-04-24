import React from "react"
import HallOfFameRank from "./HallOfFameRank"

const HallOfFame = () => (
  <section>
    <h2>(불)명예의 전당</h2>
    <HallOfFameRank kind="bad" />
    <HallOfFameRank kind="good" />
  </section>
)

export default HallOfFame
