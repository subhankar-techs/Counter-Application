// src/features/counter/Counter.tsx
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../Store/store';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Counter Using Redux</h2>
        <h3>Counter :</h3>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+ button</button>
        <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>- button</button>
        </div>
    </>
  );
};

export default Counter;
