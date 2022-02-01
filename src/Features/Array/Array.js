import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToReadingList, removeFromReadingList } from './ArraySlice';

const Array = () => {
    const books=useSelector((state)=>state.books.discover)
    const redingList=useSelector((state)=>state.books.redingList)
    const dispatch=useDispatch()
    return (
        <div>
           <h4>Books List</h4>
            {
                books.map(book=><div key={books.id}>
                    <p>id: {book.id}</p>
                    <h5>name: {book.name}</h5>
                    <p>price: {book.price}</p>
                    <button onClick={()=>dispatch(addToReadingList(book))}>addToRedadingList</button>
                    
                </div>
                )
            }

            <div>
                <h4>My Reading List</h4>
                {
                    redingList.map(list=><div>
                        <p>ID: {list.id}</p>
                        <p>name: {list.name}</p>
                        <button onClick={()=>dispatch(removeFromReadingList({id:list.id}))}>Remove</button>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Array;