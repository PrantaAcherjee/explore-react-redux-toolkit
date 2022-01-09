import React from 'react';
import { useSelector} from 'react-redux';

const Coin = () => {
    const coin = useSelector((state) => state.counter.count);
    return (
        <div>
            <br />
             <span>coin: {coin} </span>

        </div>
    );
};

export default Coin;