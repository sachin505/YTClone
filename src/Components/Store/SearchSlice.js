import { createSlice } from "@reduxjs/toolkit";
const initialState='doremon' 
const searchSlice= createSlice({
    name:'searchText',
    initialState,
    reducers:{
        addSearchText(state,data){
            return data.payload
        }
    }
})
export const searchSliceActions=searchSlice.actions;
export default searchSlice;