import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const products = createAsyncThunk("counter/products", async () => {
  const response = await axios.get("http://localhost:3001/products1copy");
  return response.data;
  console.log(response.data);
});

const initialState = {
  cartlist: [],
  productsarray: [],
};
const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      state.cartlist.forEach((item) => {
        if (item?._id === id) {
          item.count++;
        }
      });
      // console.log(state.cartlist)
    },
    decrement: (state, action) => {
      const id = action.payload;
      state.cartlist.forEach((item) => {
        if (item?._id === id) {
          item.count--;
        }
      });
      //console.log(state.cartlist)
    },
    removecartitem: (state, action) => {
      state.cartlist = state.cartlist.filter(
        (item) => item._id !== action.payload
      );

      console.log(state.cartlist);

      console.log(action.payload);
    },
    showproductcart: (state, action) => {
      console.log(state.cartlist);
    },

    addtocart: (state, action) => {
      const singleproductexits = state.cartlist.find((item) => {
        return item._id === action.payload._id;
      });
      if (singleproductexits) {
        singleproductexits.count = 1;
      } else {
        state.cartlist = state.cartlist.concat({ ...action.payload, count: 1 });
      }
      console.log(state.cartlist);
    },
  },
  extraReducers: {
    [products.pending]: (state, action) => {
      console.log(action);
    },
    [products.fulfilled]: (state, action) => {
      state.productsarray = action.payload;
    },
    [products.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default counterslice.reducer;

export const {
  increment,
  decrement,
  addtocart,
  showproductcart,
  removecartitem,
} = counterslice.actions;
