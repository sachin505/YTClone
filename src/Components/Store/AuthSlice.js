import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userName:'',
    Password:''
}
const AuthSlice=createSlice({
    name:'AuthUser',
    initialState,
    reducers :{
        addUser(state,data){
            return data.payload;
        }
    }
})
export const authActions=AuthSlice.actions;
export default AuthSlice;
