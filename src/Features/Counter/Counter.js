import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment ,incrementByAmount} from './CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const color = useSelector((state) => state.theme.color);
    const dispatch=useDispatch();
    return (
        <div>
            <h3 style={{color:color}}>Welcome to redux toolkit</h3>
            <div>
                 <button onClick={()=>{ dispatch(increment())}}>Increase +</button>
                  <span> {count} </span>
                 <button onClick={()=>{dispatch(decrement())}}>Decrease -</button> 
                 <br />
                 <button onClick={()=>{dispatch(incrementByAmount(10))}}>Increment by 10</button> 
            </div>
        </div>
    );
};

export default Counter;