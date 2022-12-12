import React from 'react';
import { useSelector } from "react-redux";
import { chooseAuthor, addText, addImage } from '../redux/actions'


function PostItem() {
  const addText = useSelector((state) => state.addText)
  const addImage = useSelector((state) => state.addImage)
  const chooseAuthor = useSelector((state) => state.chooseAuthor)


  return (
    <div className='post'>
      <div> author: {chooseAuthor} </div>
      <div> image: {addImage} </div>
      <div> text of the post: {addText} </div>
    </div>
  );
}

export default PostItem
