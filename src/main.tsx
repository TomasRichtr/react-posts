import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import NewPost, {action as newPostAction} from './components/NewPost.tsx';
import PostDetail, {loader as postLoader} from './components/PostDetail.tsx';
import Posts, {loader as postsLoader} from './routes/Posts.tsx';
import './index.css';
import RootLayout from './routes/RootLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Posts/>,
        loader: postsLoader,
        children: [
          {
            path: '/new-post',
            element: <NewPost/>,
            action: newPostAction,
          },
          {
            path: '/:postId',
            element: <PostDetail/>,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
);
