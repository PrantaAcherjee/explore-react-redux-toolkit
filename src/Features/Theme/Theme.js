import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { changeTextColor } from './ThemeSlice';

const Theme = () => {
    const [color,setColor]=useState('white');
    const dispatch=useDispatch();
    return (
        <div>
           <h2>Another project</h2>
           <input type="text" style={{width:'20%'}} onBlur={(e)=>setColor(e.target.value)} /> 
           <button onClick={()=>{dispatch(changeTextColor(color))}}>Change text colour</button>
            
        </div>
    );
};

export default Theme;