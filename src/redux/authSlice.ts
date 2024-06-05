import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignInFormType, SignUpFormType, UpdateFormType } from 'src/types/types';
import axios from 'axios';

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

export const registerUser = createAsyncThunk('auth/register', async (userData: SignUpFormType, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/signup', {
      email: userData.email,
      password: userData.password,
    });
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (userData: SignInFormType, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/signin', {
      email: userData.email,
      password: userData.password,
    });
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token') ?? '';
    const response = await axios.get(`http://localhost:3000/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const updateCurrentUser = createAsyncThunk('auth/updateUser', async (userData: UpdateFormType, thunkAPI) => {
  try {
    const token = localStorage.getItem('token') ?? '';
    const response = await axios.put(
      'http://localhost:3000/api/users',
      {
        user: userData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = undefined;
      })

      .addCase(updateCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateCurrentUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
