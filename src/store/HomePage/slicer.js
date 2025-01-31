import {createSlice} from "@reduxjs/toolkit";

const LOGGEDIN = "LOGGEDIN";
const LOGGEDOUT = "LOGGEDOUT"

let UserLogSlice = createSlice({
    name:"UserLog",
    initialState:{status:false},
    reducers:{
        login : (state)=>{
            state.status = true;
        },
        logout:(state)=>{
            state.status = false;
        }
    }
})

export const {login,logout} = UserLogSlice.actions;

export default UserLogSlice.reducer;