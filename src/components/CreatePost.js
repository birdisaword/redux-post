import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, chooseAuthor } from '../redux/actions'
import './styles.css'
import './drop-down_styles.css'

export default function CreatePost() {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('')

const dispatch = useDispatch();
const onCreatePost = (e) => {
  e.preventDefault();
  dispatch(addPost({ text, image, author}));
  setText('');
  setImage('');
  setAuthor('')
}

const onChooseAuthor = (e) => {
  e.preventDefault();
  dispatch(chooseAuthor({author}));
  setAuthor('')
}

return (
  
<form className="new-post" onSubmit={onCreatePost}>

  <div className="dropdown">
    <button onClick={myFunction} className="dropbtn"> choose author </button>
    <div id="myDropdown" className="dropdown-content">
      <a href="author1" onClick={onChooseAuthor}> author 1 </a>
      <h1 onChange = {(e) => setAuthor(e.target.value)}> author 2 </h1>
      <h1 onChange = {(e) => setAuthor(e.target.value)}> author 3 </h1>
    </div>
  </div>

  <textarea
    placeholder = "what's on your mind?"
    onChange = {(e) => setText(e.target.value)}
  />

  <input
    placeholder = "image link"
    onChange = {(e) => setImage(e.target.value)}
  />

  <button type='submit' onClick={onCreatePost}> add post </button>

</form>
 )
}

function myFunction() {
  let element = document.getElementById("myDropdown");
  element.classList.toggle("show");
}