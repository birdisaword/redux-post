

export const ADD_POST = 'ADD_POST';
export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_TEXT = 'ADD_TEXT';
export const CHOOSE_AUTHOR = 'CHOOSE_AUTHOR'


export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
})

export const addImage = (image) => ({
  type: ADD_IMAGE,
  payload: image
})

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text
})

export const chooseAuthor = (author) => ({
  type: CHOOSE_AUTHOR,
  payload: author
})

