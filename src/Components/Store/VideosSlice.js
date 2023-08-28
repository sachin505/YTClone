import { createSlice } from "@reduxjs/toolkit";

var initialState=[]
const videoSlice=createSlice({
    name:'videos',
    initialState:[],
    reducers:{
        addVideos(state,action){
            initialState=action.payload;    
            console.log(action.payload) 
            console.log("this is from addvideos");
        }
    }
})
export const videoSliceActions=videoSlice.actions; 
export default videoSlice;