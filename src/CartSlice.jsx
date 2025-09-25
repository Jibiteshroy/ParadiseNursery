import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },

  reducers: {
    // Add item to cart
    addItem: (state, action) => {
  const { name, image, cost } = action.payload; // Destructure product details from the action payload
  // Check if the item already exists in the cart by comparing names
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    // If item already exists in the cart, increase its quantity
    existingItem.quantity++;
  } else {
    // If item does not exist, add it to the cart with quantity 1
    state.items.push({ name, image, cost, quantity: 1 });
  }
},

    // Remove item completely
   removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload)
    },

    // Update quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const itemToUpdate = state.items.find(item => item.name === name)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Selector: get all cart items
export const selectCartItems = (state) => state.cart.items

// Export reducer for store.js
export default CartSlice.reducer;
