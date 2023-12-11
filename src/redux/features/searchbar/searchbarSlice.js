import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    value: [], // empty array
    error: ""
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await axios.get("https://ecombackend-82yd.onrender.com/mobdata");
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data.products); 
    return response.data;
})

export const searchbarSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; // api'den gelen verileri value'ya doldurma işlemi
        })

        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })
    }
});

export default productsSlice4.reducer;