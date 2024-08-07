import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("details");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; // empty array
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("details", JSON.stringify(data));
}

const initialState = {
    loading: false,
    value: fetchFromLocalStorage(),
    error: ""
}

export const getDetails = createAsyncThunk("getDetails", async (id) => {
    const response = await axios.get(`https://ecommerecebackend.onrender.com/mobdata`);
    console.log(response.data)
    console.log(typeof(id))
    const data=response.data.filter((item)=>item.id===Number(id))
   
    return data;
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state, action) => {
            state.loading = false;
        })

        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; 
            storeInLocalStorage(state.value);
        })

        builder.addCase(getDetails.rejected, (state, action) => {
            // state.loading = false;
            state.error = "Bad fetching!"
        })
    }
});

export default detailsSlice.reducer;