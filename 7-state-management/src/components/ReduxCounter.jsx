import { useSelector, useDispatch } from "react-redux"

import { increment, decrement, reset } from "../context/counterSlice"

const ReduxCounter = () => {
    const count = useSelector(state => state.counter)

    const dispatch = useDispatch()

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default ReduxCounter