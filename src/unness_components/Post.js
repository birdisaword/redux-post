import React from 'react';
import { useSelector } from "react-redux";

function Post() {
  const postText = useSelector((state) => state.postText.value);
  const postImage = useSelector((state) => state.addImage.value)
  console.log(postImage);
  return (
    <div>
      <h1 >image: {postImage.image}</h1>
      <h1> text of the post: {postText.text} </h1>
    </div>
  );
}

export default Post;