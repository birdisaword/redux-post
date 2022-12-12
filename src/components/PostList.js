import { useSelector } from "react-redux"
import CreatePost from './CreatePost'
import  PostItem from './PostItem'
import './styles.css'



export default function PostList() {
  const posts = useSelector((state) => state.posts)
console.log(posts);
  return (
    <div className="posts-wrapper">
      <CreatePost />
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem key={post.text} {...post} />
        ))}
      </div>
    </div>
  )
  
}
