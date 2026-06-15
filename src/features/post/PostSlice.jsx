import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post.',
    }
]
const postSlice = createSlice({
  name: 'posts',
    initialState,
  reducers: {
    AddPost: (state, action) => {
      state.push(action.payload);
    },
     DeletePost: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
     UpdatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
  }
}
});

export const { AddPost, DeletePost, UpdatePost } = postSlice.actions;
export default postSlice.reducer;