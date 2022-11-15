import {configureStore} from '@reduxjs/toolkit';
import userReducer  from '../Slices/getUser';
import useraddReducer  from '../Slices/AddUser';


export const store = configureStore({
    reducer :{
        users: userReducer,
        add:useraddReducer

    }
})