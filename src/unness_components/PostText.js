import { createSlice } from "@reduxjs/toolkit";


export const postTextSlice = createSlice({
  name: 'postText',
  initialState: { value: {text: ''}},
  reducers: {
    addText: (state, action) => {
    state.value = action.payload
  },
  removeText: (state) => {
    state.value = {text: ''};
  }
},
})

export const {addText, removeText} = postTextSlice.actions;

export default postTextSlice.reducer