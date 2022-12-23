import React from 'react';
import './styles.css'
import likesIcon from '../assets/heart.png';
import commentsIcon from '../assets/comment.png';
import repostsIcon from '../assets/refresh.png';

function PostItem(props) {

  const {
    text, 
    image, 
    author, 
    nickname, 
    photo, 
    date = new Date(), 
    likes, 
    comments, 
    reposts
  } = props;

  return (

    <div className="post">

    <img className="photo" src= { author.photo || photo } />
    
    <div className="user">
      <div className="name"> { author.name || author } </div>
        <div className="info">
          <div className="nickname"> { author.nickname || nickname } </div>
          <div className="date"> { new Date(date).toLocaleDateString() } </div>
        </div>
    </div>
  
    <div className="content"> { text } </div>
    <img className="image" src= { image } />

<div className='icons'>

       <div className='icon-wrapper'>
        <img className='icon' src = {likesIcon}/> 
        {likes ? likes : Math.floor(Math.random() * 100)}
        </div>

       <div className='icon-wrapper'>
        <img className='icon' src = {commentsIcon}/>  
        {comments ? comments : Math.floor(Math.random() * 100)}
       </div>

       <div className='icon-wrapper'>
         <img className='icon' src = {repostsIcon}/>  
         {reposts ? reposts : Math.floor(Math.random() * 100)}
       </div>
</div>
    </div>
  );
}

export default PostItem