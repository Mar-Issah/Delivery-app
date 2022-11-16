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
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //i would use filer above, but find the index of the item to be removed, create a copy of the basket and and splice to remove the item by index
      //we want to be able to retunr an message if the user clicks on the - when the basket is empty and finally return the newbakset
      const index = state.items.findIndex((item) => item.id == action.payload.id);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`You cannot remove product (id:${action.payload.id}), it is not in your basket`);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
//export  the actions and allow us to use in our app
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//exposing this state as seletedBasketItems
export const selectedBasketItems = (state) => state.basket.items;

//different b/m the twoe selectors is thatthis will return an array only with the id provided
export const selectBasketItemId = (state, id) => state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
