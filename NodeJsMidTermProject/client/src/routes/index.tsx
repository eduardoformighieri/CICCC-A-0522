import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EditPost } from './EditPost';
import { Login } from './Login';
import { Post } from './Post';
import { Posts } from './Posts';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};
