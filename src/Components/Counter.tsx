// src/features/counter/Counter.tsx
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../Store/store';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="counter-card">
            <div className="card-body text-center p-5">
              <div className="counter-header mb-4">
                <h2 className="counter-title">🎯 Redux Counter</h2>
                <p className="counter-subtitle">Interactive State Management</p>
              </div>
              
              <div className="counter-display mb-4">
                <div className="counter-value-container">
                  <h1 className="counter-value">{count}</h1>
                  <div className="counter-glow"></div>
                </div>
              </div>
              
              <div className="counter-controls">
                <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                  <button 
                    className="btn btn-increment" 
                    onClick={() => dispatch(increment())}
                  >
                    <span className="btn-icon">➕</span>
                    <span className="btn-text">Increment</span>
                  </button>
                  <button 
                    className="btn btn-decrement" 
                    onClick={() => dispatch(decrement())}
                  >
                    <span className="btn-icon">➖</span>
                    <span className="btn-text">Decrement</span>
                  </button>
                </div>
              </div>
              
              <div className="counter-stats mt-4">
                <small className="text-light">
                  Current value: <span className="fw-bold">{count}</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
