import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./VideosSlice";
import searchSlice from "./SearchSlice";
import AuthSlice from "./AuthSlice";

const store=configureStore({
    reducer:{
        videoSlice:videoSlice.reducer,
        searchSlice:searchSlice.reducer,
        authSlice:AuthSlice.reducer
    }
})
export default store;