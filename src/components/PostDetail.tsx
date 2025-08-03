import {Link, type Params, useLoaderData} from 'react-router-dom';

import Modal from './Modal.tsx';
import classes from './PostDetail.module.css';


export const PostDetail = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main
          className={classes.details}
        >
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link
              to=".."
              className={classes.btn}
            >
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main
        className={classes.details}
      >
        <p
          className={classes.author}
        >
          {post.author}
        </p>
        <p
          className={classes.text}
        >
          {post.text}
        </p>
      </main>
    </Modal>
  );
};

export default PostDetail;

export const loader = async ({
  params,
}: {
  params: Params;
}) => {
  const response = await fetch(`http://localhost:8080/posts/${params.postId!}`);
  const resData = await response.json();
  return resData.post;
};
