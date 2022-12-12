import { createSlice } from "@reduxjs/toolkit";


export const postImageSlice = createSlice({
  name: 'postImage',
  initialState: { value: {image: ''}},
  reducers: {
    addImage: (state, action) => {
    state.value = action.payload
  },
  removeImage: (state) => {
    state.value = {image: ''};
  }
},
})

export const {addImage, removeImage} = postImageSlice.actions;

export default postImageSlice.reducer