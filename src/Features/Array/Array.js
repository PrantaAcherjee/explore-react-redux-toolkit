import React from 'react';
import { useSelector } from 'react-redux';

const Array = () => {
    const books=useSelector((state)=>state.books.discover)
    return (
        <div>
           <h4>Books List</h4>
            {
                books.map(book=><div key={books.id}>
                    <p>id: {book.id}</p>
                    <h5>name: {book.name}</h5>
                    <p>price: {book.price}</p>
                    <button>addToRedadingList</button>
                </div>
                )
            }

            <div>
                <h4>My Reading List</h4>
            </div>
            
        </div>
    );
};

export default Array;