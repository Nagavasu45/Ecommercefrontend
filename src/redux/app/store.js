import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import navbarSlice from './../features/navbar/navbarSlice';
import dt from './../features/details/detailsSlice';
import p1 from "../features/checkproduct/checkproductSlice1";
import p2 from "../features/checkproduct2/checkproductSlice2"
import p3 from "../features/checkproduct3/checkproductSlice3"
import p4 from "../features/checkproduct4/checkproductSlice4"

export const store = configureStore({
    reducer: {
        productsReducer: productsSlice,  
        navbarReducer: navbarSlice,      
        detailsReducer: dt,
        checkproductReducer1:p1,
        checkproductReducer2:p2,
        checkproductReducer3:p3,
        checkproductReducer4:p4,

    }
})