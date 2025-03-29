import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'
export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br />
      <button onClick={()=>dispatch(incrementByAmount(10))}>增加10</button>
      <button onClick={()=>dispatch(incrementByAmount(-10))}>减少10</button>
      <br />
      <button onClick={()=>dispatch(reset())}>归零</button>
    </>
  )
}