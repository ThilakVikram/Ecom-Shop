import {configureStore} from "@reduxjs/toolkit"
import UserLogReducer from "./slicer";
export default configureStore({
    reducer:{
        userLog:UserLogReducer
    }
})