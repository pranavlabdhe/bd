// AdminPostSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], // Make sure this is properly initialized as an empty array
  loading: false,
  error: null,
};

const adminPostSlice = createSlice({
  name: 'adminPost',
  initialState,
  reducers: {
    fetchPostsStart1: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess1: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPostsFailure1: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart1, fetchPostsSuccess1, fetchPostsFailure1 } = adminPostSlice.actions;

export default adminPostSlice.reducer;
