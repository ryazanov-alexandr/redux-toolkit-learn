import React from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void,
}

export const PostItem: React.FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)

  }

  const handleUpdate = () => {
    const text = prompt() || ''
    const newPost = {...post, title: text}
    console.log(newPost);

    update(newPost)
  }
  
  return (
    <div className="post" onClick={handleUpdate}>
        <div className="post__title">
            {post.title}
        </div>
        <div className="post__body">
            {post.body}
        </div>
        <button onClick={handleRemove}>Delete</button>
    </div>
  )
}
