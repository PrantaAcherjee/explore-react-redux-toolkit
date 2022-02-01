import { createSlice } from "@reduxjs/toolkit";
import books from '../../data'

export const ArraySlice = createSlice({
 name:'book',
 initialState:{
     discover:books,
     redingList:[],
     finishedList:[],
 },
 reducers:{
     addToReadingList:(state,{payload})=>{
         state.redingList.push(payload)
     },
     removeFromReadingList:(state,{payload})=>{
        state.redingList=state.redingList.filter(book=>book.id!==payload.id)
     }

 }   
})

export const {addToReadingList,removeFromReadingList}=ArraySlice.actions
export default ArraySlice.reducer;