//HELPER FUNCTIONS

//exposing this state as seletedBasketItems
export const selectedBasketItems = (state) => state.basket.items;

//different b/n the two selectors is that this will return an array only with the id provided
export const selectBasketItemId = (state, id) => state.basket.items.filter((item) => item.id === id);
