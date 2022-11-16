import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_desc: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    //actions that allow us to modify the global store
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
//export  the actions and allow us to use in our app
export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
