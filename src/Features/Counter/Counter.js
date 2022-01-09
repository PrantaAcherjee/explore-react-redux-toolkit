import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch=useDispatch()
    return (
        <div>
            <h3>Welcome to redux toolkit</h3>
            <div>
                 <button onClick={()=>{ dispatch(increment())}}>Increase +</button>
                  <span> {count} </span>
                 <button onClick={()=>{dispatch(decrement())}}>Decrease -</button> 
            </div>
        </div>
    );
};

export default Counter;