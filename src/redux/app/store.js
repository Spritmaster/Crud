import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "../features/UsersSlice";


export const store =  configureStore({
    reducer:{
        usersInfo: UsersSlice
    }
})