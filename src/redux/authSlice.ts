import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignInFormType, SignUpFormType } from "src/types/types";
import axios from "axios";

const initialState = {
    currentUser: undefined,
    isLoading: false,
}

export const registerUser = createAsyncThunk('auth/register', async (userData : SignUpFormType, thunkAPI) => {
    try{
        const response = await axios.post('https://api.realworld.io/api/users', {
            user : userData
        })
        return response.data.user
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err.response.data.errors)
    }
})

export const loginUser = createAsyncThunk('auth/login', async (userData : SignInFormType, thunkAPI) => {
    try{
        const response = await axios.post('https://api.realworld.io/api/users/login', {
            user : userData
        })
        return response.data.user
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err.response.data.errors)
    }
})

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
    try{
        const token = localStorage.getItem('accessToken') ?? ''
        const response = await axios.get('https://api.realworld.io/api/users', 
        {
            headers: {
                Authorization: `Token ${token}`
            },
        })
        return response.data.user
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err.response.data.errors)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload
        })
        .addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
        })
        
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload
        })
        .addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload
        })
        .addCase(getCurrentUser.rejected, (state) => {
            state.isLoading = false;
            state.currentUser = undefined;
        })
    },
})

export default authSlice.reducer