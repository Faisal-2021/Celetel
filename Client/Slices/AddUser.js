import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const addUser = createAsyncThunk('users/addUser', async (initialUser) => {
  const response = await axios.post('http://localhost:3600/Users', initialUser)
  return response.data
})

const AddUser = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(addUser.fulfilled,(state,action)=>{
      state.users.push(action.payload)
    })
  }
});


export default AddUser.reducer;
