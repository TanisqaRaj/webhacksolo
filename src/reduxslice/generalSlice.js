import { createSlice } from '@reduxjs/toolkit';
export const generalSlice = createSlice({
  
    name:"general",
    initialState:{
        user:null,
        temp:1234,
        sub:0,
        multiply:0,
        divide:0
    },
    reducers:{
        //functions logic
        updatetemp(state,action){
            state.temp=action.payload
        },
        updatesub(state,action){
            state.sub=action.payload
        },
        updatemul(state,action){
            state.multiply=action.payload
        },
        updatedivide(state,action){
            state.divide=action.payload
        }
    },
});

export const {updatetemp, updatemul,updatesub,updatedivide}=generalSlice.actions

export default generalSlice.reducer