import { createSlice } from '@reduxjs/toolkit';

const getTotalAmount = (products) =>
  Object.values(products).reduce((prev, { amount }) => prev + amount, 0);

export const slice = createSlice({
  name: 'cart',
  initialState: {
    total: 0,
    totalAmount: 0,
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      // check if product to add is already in state
      let isProductOnState = false;
      state.products.map((item, key) => {
        if (item.id === action.payload.id) {
          isProductOnState = true;
          state.products[key].amount = item.amount + action.payload.amount;
        }
        return item;
      });

      // if product isn't in state, add it
      if (!isProductOnState) {
        state.products.push(action.payload);
      }

      // count total products added by amount on each product
      const total = getTotalAmount(state.products);
      state.totalAmount = total;
    },

    updateProduct: (state, action) => {
      state.products.map((item, key) => {
        if (item.id === action.payload.id) {
          state.products[key].amount = action.payload.amount;
        }
        return item;
      });

      // count total products added by amount on each product
      const total = getTotalAmount(state.products);
      state.totalAmount = total;
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });

      // count total products added by amount on each product
      const total = getTotalAmount(state.products);
      state.totalAmount = total;
    },

    getTotal: (state) => {
      const total = Object.values(state.products).reduce((prev = 0, { price, amount }) => prev + (price * amount), 0);      
      state.total = total;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, getTotal } = slice.actions;

export const selectCart = (state) => state.cart.products;
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectTotal = (state) => state.cart.total;

export default slice.reducer;
