import React, {useState} from 'react';

import { useDispatch } from 'react-redux'
import {addImage, removeImage} from './PostImage'

function AddImage() {
  const [image, setImage] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <input type='text' onChange = {((e) => setImage(e.target.value))}/>
      <button onClick = {() => {dispatch(addImage({image}))}}> add image </button>
      <button onClick = {() => {dispatch(removeImage())}}> x </button>
    </div>
  );
}

export default AddImage;