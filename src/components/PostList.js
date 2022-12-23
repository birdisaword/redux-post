import { useState } from "react"
import CreatePost from './CreatePost'
import  PostItem from './PostItem'
import Photo1 from '../assets/photo1.png';
import Photo2 from '../assets/photo2.png';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import './styles.css'

const photo1 = Photo1;
const photo2 = Photo2;

export const POSTS = [
  {
    text: 'Nova Poshta, watching bavovna in Crimea',
    image: img2,
    author: {
      photo: photo2,
      name: 'Jim',
      nickname: "@jim"
     },
     date: new Date(),
    likes: 249,
    comments: 332,
    reposts: 24

  },
  {
    text: 'reading DTEK schedules be like ',
    image: img1,
    author: {
      photo: photo1,
      name: 'Charlie',
      nickname: "@char"
     },
     date: new Date(),
    likes: 19,
    comments: 72,
    reposts: 12
  }
]

// console.log(POSTS[0].author);

export default function PostList() {

const [posts, setPosts] = useState(POSTS);
const onAddPost = (postNew) => {
  setPosts((arr) =>
  [postNew, ...arr]
  );
};

  return (
    <div className="posts-wrapper">
      <CreatePost onCreate = {onAddPost}/>
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem key={post.text} {...post} />
        ))}
      </div>
    </div>
  )
}
