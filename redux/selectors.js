//HELPER FUNCTIONS

//exposing this state as seletedBasketItems
export const selectedBasketItems = (state) => state?.basket.items;

//different b/n the two selectors is that this will return an array only with the id provided
export const selectBasketItemId = (state, id) => state.basket.items.filter((item) => item.id === id);

//reducer fxn to get the the total price for the basket
//reduce to a single value, what this does is that it takes any array initial value is 0 everytime it loops through, it keeps adding each price to the total
export const selectedBasketTotal = (state) => state.basket.items?.reduce((total, item) => (total += item.price), 0);

export const selectRestaurant = (state) => state?.restaurant.restaurant;
