import {useLoaderData} from 'react-router-dom';

import classes from './PostsList.module.css';
import Post from "./Post.tsx";
import {PostData} from "../types/post.ts";


export const PostsList = () => {
  const posts = useLoaderData();

  const renderPost = (post: PostData, i: number) => {
    return (
      <Post
        author={post.author}
        text={post.text}
        id={post.id}
        key={i}
      />
    )
  }

  return (
    <>
      {
        !!posts.length && (
          <ul
            className={classes.posts}
          >
            {posts.map(renderPost)}
          </ul>
        )
      }
      {
        !posts.length && (
          <div
            className={classes.noPosts}
          >
            <h2>No posts yet</h2>
          </div>
        )}
    </>
  );
};

export default PostsList;
