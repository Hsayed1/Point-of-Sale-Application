import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    items: [],
    hasError: false,
    orders: [],
    catalog: [],
 };

const access_token = createSlice({
    name: 'access_token',
    initialState: {
        value: '',
    },
    reducers: {
        refreshToken: (state) => {
            // TODO: (ahmedfudge) make a request to refresh the access token
            console.log(state.value);
        },
        setToken: (state, action) => {
            state.value = action.payload;
        },
    },
});
const { refreshToken, setToken } = access_token.actions;

 export const store = configureStore({
    reducer: {
        access_token: access_token.reducer,
    },
 });

 export {
    refreshToken, 
    setToken,
 };