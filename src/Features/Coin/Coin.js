import React from 'react';
import { useSelector} from 'react-redux';

const Coin = () => {
    const coin = useSelector((state) => state.counter.count);
    const color = useSelector((state) => state.theme.color);
    return (
        <div>
            <br />
             <h4 style={{color:color}}>coin: {coin} </h4>
        </div>
    );
};

export default Coin;