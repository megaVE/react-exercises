/* 3rd Exercise */

const DataReceiver = ({place, age, sunglasses}) => {
  return (
    <p>You live in {place}, are {age} years old and {sunglasses ? "stylishly " : "not "}wearing sunglasses</p>
  )
}

export default DataReceiver