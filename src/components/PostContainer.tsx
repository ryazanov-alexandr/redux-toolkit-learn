import { useState } from "react";
import { useCreatePostMutation, useUpdatePostMutation, useFetchAllPostsQuery, useDeletePostMutation } from "../services/PostService";
import { PostItem } from "./PostItem";
import { IPost } from "../models/IPost";

export const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts, error, isLoading } = useFetchAllPostsQuery(limit);
  const [createPost, {}] = useCreatePostMutation()  
  const [updatePost, {}] = useUpdatePostMutation()
  const [deletePost, {}] = useDeletePostMutation()
  

  const handleCreate = async () => {
    const title = prompt()

    await createPost({title, body: title} as IPost)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  const handleDelete = (post: IPost) => {
    deletePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {posts && posts.map((post) => 
            <PostItem remove={handleDelete} update={handleUpdate} key={post.id} post={post} />
        )}
      </div>
    </div>
  );
};
