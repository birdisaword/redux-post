import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addText, removeText} from './PostText'
import AddImage from './AddImage'


function AddPost() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  return (
   
    <div>
       <AddImage/>
      <input type='text' onChange = {((e) => setText(e.target.value))}/>
      <button onClick={() => {dispatch(addText({text}))}}>Add post</button>
      <button onClick={() => {dispatch(removeText())}}>Remove text</button>
    </div>
  );
}

export default AddPost