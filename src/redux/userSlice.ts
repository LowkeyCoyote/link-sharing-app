import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignInFormType, SignUpFormType } from 'src/types/types';
import { demoUser } from '@datas/dataDemo';
import axios from 'axios';
import { CurrentUserState } from 'src/types/types';

const initialState: CurrentUserState = {
  currentUser: undefined,
  isLoading: false,
  isDemo: false,
};

const apiURL = "https://link-sharing.joska-gyuricza.fr/api/users"

export const registerUser = createAsyncThunk('auth/register', async (userData: SignUpFormType, thunkAPI) => {
  try {
    const response = await axios.post(`${apiURL}/signup`, {
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
    const response = await axios.post(`${apiURL}/signin`, {
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

    const response = await axios.get(`${apiURL}`, {
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

    const response = await axios.put(`${apiURL}`, userData, {
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

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('demo');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getDemoUser: (state: CurrentUserState) => {
      state.isDemo = true;
      state.currentUser = demoUser;
    },
    loggoutDemoUser : (state : CurrentUserState) => {
      state.isDemo = false;
    },
    modifyLinks: (state: CurrentUserState, action) => {
      state.currentUser = { ...state.currentUser, links: action.payload };
    },
  },
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
        state.isDemo = false;
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
        state.isDemo = false;
      });
  },
});

export const { getDemoUser, modifyLinks, loggoutDemoUser } = authSlice.actions;

export default authSlice.reducer;
