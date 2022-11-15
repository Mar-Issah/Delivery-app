import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //actions that allow us to modify the global store
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]; //action.payload is whatever that comes with the action i.e the item to be added
    },
    removeFromBasket: (state, action) => {
      // state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
//export  the actions and allow us to use in our app
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//seletor  is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state. The current data
//basically select a particular slice in the global state/store we are selecting the basket slice (name of this slice is basket and getting the item[] state)
export const selectedBasket = (state) => state.basket.item;

export default basketSlice.reducer;
