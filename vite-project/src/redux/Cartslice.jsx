import { createSlice } from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem('cart')) ?? [];
const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        deleteFromCart(state,action){
            return state.filter(item=>item.id!=action.payload.id)
        }
    }
})
export const {addToCart,deleteFromCart}=cartslice.actions;
export default cartslice.reducer;