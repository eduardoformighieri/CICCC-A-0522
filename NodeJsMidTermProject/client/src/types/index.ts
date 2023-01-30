export interface SignInDto {
  username: string;
  password: string;
}

export interface SignUpDto {
  username: string;
  password: string;
  name: string;
}

export interface User {
  id: number;
  username: string;
  name: string;
  password: string;
  posts: Post[];
}

export interface Post {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  user: User;
  userId: number;
  likes: PostLike[];
  comments: Comment[];
}

export interface Comment {
  id: number;
  createdAt: string;
  content: string;
  postId: number;
  userId: number;
  likes: CommentLike[];
  user: User;
}

export interface CommentLike {
  id: number;
  commentId: number;
  userId: number;
}

export interface PostLike {
  id: number;
  postId: number;
  userId: number;
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
}

export interface CreateCommentDto {
  content: string;
}
