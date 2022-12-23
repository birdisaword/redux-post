import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions'
import './styles.css'
import './drop-down_styles.css'
import Photo1 from '../assets/photo1.png';
import Photo2 from '../assets/photo2.png';
import Photo3 from '../assets/photo3.png';

const AUTHORS = [
  {
name: 'Charlie',
nickname: '@char',
photo: Photo1
  },
  {
name: 'Jim',
nickname: '@jim_help',
photo: Photo2
  },
  {
name: 'Deandra',
nickname: '@dee',
photo: Photo3
      },
]

export default function CreatePost(props) {
  const { onCreate } = props;
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState('')
  const dispatch = useDispatch();

  const onCreatePost = (e) => {
  e.preventDefault();
  dispatch(addPost({ text, image, author, nickname, photo }));
  onCreate({ text, image, author, nickname, photo })
  setText('');
  setImage('');
  setAuthor('');
  setNickname('')
}

function onChooseAuthor() {
  let name = document.getElementById('authors').value
  setAuthor(name);

  const ourUser = AUTHORS.find((user) => user.name === name);
  setNickname(ourUser.nickname);
  setPhoto(ourUser.photo)
  }

return (
<form className="new-post" onSubmit={onCreatePost}>

  <input list="chooseAuthors" 
        id="authors" 
        className="authors_input" 
        onChange = {onChooseAuthor} 
        placeholder = 'choose author'
  />

  <datalist id="chooseAuthors" >
    <option value = {AUTHORS[0].name}> Charlie </option>
    <option value={AUTHORS[1].name}> Jim </option>
    <option value={AUTHORS[2].name}> Deandra </option>
  </datalist>

  <textarea placeholder = "what's on your mind?"
            className="text_input" 
            value = {text}
            onChange = {(e) => setText(e.target.value)}
  />

  <input placeholder = "add image link"
         className="image_input" 
         value = {image}
         onChange = {(e) => setImage(e.target.value)}
  />

  <button type='submit'  
          className="button_input"  
          onClick={onCreatePost}> 
          add post 
  </button>

</form> 

 )
}