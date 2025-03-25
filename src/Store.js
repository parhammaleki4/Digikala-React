import { configureStore , createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user' , 
  initialState: {userName : '' , loggin : 0} ,
  reducers: {
    login : (state , action) => {
      state.userName = action.payload.userName;
      state.loggin = 1;
    } ,
    logout : (state) => {
      state.userName = '';
      state.loggin = 0;
    }
  }
})
export const {login , logout} = userSlice.actions;

const locationSlice = createSlice({
  name: 'location' ,
  initialState: {province : 'تهران' , city : 'تهران'}
})

export const store = configureStore({reducer: {
  user : userSlice.reducer,
  location : locationSlice.reducer
}})