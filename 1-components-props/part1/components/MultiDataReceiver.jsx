/* 4th Exercise */

import DataReceiver from "./DataReceiver"

const MultiDataReceiver = ({members}) => {
  return (
    members.map((member, x) => (
        <DataReceiver
            key={x}
            place={member.place}
            age={member.age}
            sunglasses={member.sunglasses}
        />
    ))
  )
}

export default MultiDataReceiver