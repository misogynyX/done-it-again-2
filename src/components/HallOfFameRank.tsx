import React from "react"
import Mark from "./Mark"
import Bar from "./Bar"
import styles from "./HallOfFameRank.module.css"

interface Props {
  kind: string
}

const HallOfFameRank = (props: Props) => (
  <section className={styles.root}>
    <h3>부적절한 표현을 {props.kind === "bad" ? <Mark>가장 많이 쓴</Mark> : <Mark good>가장 적게 쓴</Mark>} 언론사</h3>
    <p>
      각 언론사별로 최근 6개월 이내에 수집된 기사 중에서 부적절한 표현이 담긴 기사의 비율이 가장{" "}
      {props.kind === "bad" ? "높은" : "낮은"} 언론사를 꼽았습니다. 1위는 수집된 기사 총 <strong>NNNNN건</strong> 중
      부적절한 표현이 담긴 기사가 <strong>NNN건</strong>
      으로 전체 기사의 <strong>N.NN%</strong>를 기록한 <Mark good={props.kind !== "bad"}>뫄뫄일보</Mark> 입니다.
    </p>

    <ol className={styles.chart}>
      <li key={1}>
        <Bar name={"뫄뫄일보"} rank={1} total={21176} count={400} max={400} />
      </li>
      <li key={10}>
        <Bar name={"뫄뫄일보"} rank={10} total={21176} count={200} max={400} />
      </li>
    </ol>
  </section>
)

export default HallOfFameRank
