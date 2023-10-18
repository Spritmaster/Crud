import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "../../userInfo";
const memory = JSON.parse(localStorage.getItem('users'))

const initialState = {
  users:  memory && memory.length !==0 ? memory : userInfo    ,
};

const usersSlice = createSlice({
  name: "UsersInfo",
  initialState,
  reducers: {
    addNewUser: (state, { payload }) => {
      state.users.push(payload);
    },
    remove: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    editUser: (state, { payload }) => {
      const newUser = state.users.find((user) => user.id === payload.id);
      if(newUser){
        newUser.name=payload.name
        newUser.email=payload.email
        newUser.image=payload.image
        newUser.job=payload.job
        newUser.phone=payload.phone
      }
    },
    localMemory:(state)=>{
        localStorage.setItem('users' , JSON.stringify(state.users))
    },
  },
});

export const { addNewUser, remove, editUser ,localMemory } = usersSlice.actions;
export default usersSlice.reducer;
