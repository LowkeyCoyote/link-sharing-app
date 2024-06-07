import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignInFormType, SignUpFormType } from 'src/types/types';
import axios from 'axios';

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

export const registerUser = createAsyncThunk('auth/register', async (userData: SignUpFormType, thunkAPI) => {
  try {
    const response = await axios.post('https://link-sharing.joska-gyuricza.fr/api/users/signup', {
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
    const response = await axios.post('https://link-sharing.joska-gyuricza.fr/api/users/signin', {
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

    const response = await axios.get(`https://link-sharing.joska-gyuricza.fr/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const updateCurrentUser = createAsyncThunk('auth/updateUser', async (userData: FormData, thunkAPI) => {
  try {
    const token = localStorage.getItem('token') ?? '';
    const response = await axios.put('https://link-sharing.joska-gyuricza.fr/api/users', userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getLinksUser = createAsyncThunk('auth/getlinks', async (position: string, thunkAPI) => {
  try {

    const response = await axios.get(`https://link-sharing.joska-gyuricza.fr/api/users/link`, {
      params: {
        position : position
      }
    });
    return response.data.user;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
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
      })

      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = undefined;
      });
  },
});

export default authSlice.reducer;
