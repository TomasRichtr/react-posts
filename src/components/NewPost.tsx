import {Form, Link, redirect} from 'react-router-dom';

import Modal from './Modal.tsx';
import classes from './NewPost.module.css';

export const NewPost = () => {
  return (
    <Modal>
      <Form
        method='POST'
        className={classes.form}
      >
        <p>
          <label
            htmlFor="body"
          >
            Text
          </label>
          <textarea
            id="body"
            required
            rows={3}
            name="text"
          />
        </p>
        <p>
          <label
            htmlFor="name"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
        </p>
        <p
          className={classes.actions}
        >
          <Link
            to=".."
          >
            Cancel
          </Link>
          <button
            type="submit"
          >
            Submit
          </button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: request.method,
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
};
