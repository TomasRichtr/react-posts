import {Link} from 'react-router-dom';

import type {PostData} from '../types/post.js';

import classes from './Post.module.css';

export const Post = ({
  id, author, text,
}: PostData) => {
  return (
    <li
      className={classes.post}
    >
      <Link
        to={id}
      >
        <p
          className={classes.author}
        >
          {author}
        </p>
        <p
          className={classes.text}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default Post;
