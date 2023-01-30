import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';
import { generateToken } from './utils/jwtSessionToken';
import { comparePasswords, generateHash } from './utils/passwordHash';
import { verifyToken } from './middlewares/verifyToken';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post(`/signup`, async (req, res) => {
  const { name, username, password } = req.body;
  const passwordHash = await generateHash(password);

  if (!name || !username || !password) {
    return res.status(401).json({ message: 'Missing fields.' });
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userAlreadyExists) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  const result = await prisma.user.create({
    data: {
      name,
      username,
      password: passwordHash,
    },
  });
  const token = generateToken(
    { id: result.id, username: result.username },
    '' + process.env.JWT_SECRET
  );
  res.json({
    token,
    username: result.username,
    name: result.name,
    id: result.id,
  });
});

app.post(`/signin`, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'Missing fields.' });
  }
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  const passwordMatch = await comparePasswords(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Incorrect password.' });
  }
  const token = generateToken(
    { id: user.id, username: user.username },
    '' + process.env.JWT_SECRET
  );
  res.json({ token, username: user.username, name: user.name, id: user.id });
});

app.get(`/posts`, async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      comments: true,
    },
  });

  res.json(posts);
});

app.get(`/posts/users/:userId`, async (req, res) => {
  const { userId }: { userId?: string } = req.params;
  const posts = await prisma.post.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      user: true,
      comments: true,
    },
  });

  res.json(posts);
});

app.get(`/posts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      comments: {
        include: {
          likes: true,
          user: true,
        },
      },
      likes: true,
      user: true,
    },
  });
  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }
  res.json(post);
});

app.post(`/posts`, verifyToken, async (req, res) => {
  const { title, content } = req.body;
  const { username } = req.body.user;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (!title || !content) {
    return res.status(401).json({ message: 'Missing fields.' });
  }
  const result = await prisma.post.create({
    data: {
      title,
      content,
      user: { connect: { username } },
    },
  });
  res.json(result);
});

app.patch(`/posts/:postId`, verifyToken, async (req, res) => {
  const { postId }: { postId?: string } = req.params;
  const { title, content } = req.body;
  const { id: userId, username } = req.body.user;

  if (!content && !title) {
    return res.status(400).json({ message: 'Missing field to update.' });
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }

  if (post.userId === userId) {
    const result = await prisma.post.update({
      where: {
        id: Number(postId),
      },
      data: {
        title: title || post.title,
        content: content || post.content,
      },
    });

    return res.json(result);
  }
  return res.status(403).json({ message: 'Forbidden.' });
});

app.post(`/comments/:postId`, verifyToken, async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const { username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (!content) {
    return res.status(401).json({ message: 'Missing content.' });
  }

  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }

  const result = await prisma.comment.create({
    data: {
      content,
      post: { connect: { id: post.id } },
      user: { connect: { username } },
    },
  });
  res.json(result);
});

app.post(`/posts/:id/likePost`, verifyToken, async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId, username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }

  const postLike = await prisma.postLike.findFirst({
    where: {
      postId: Number(postId),
      userId,
    },
  });

  if (postLike?.userId === userId) {
    return res.status(409).json({ message: 'User already liked this post.' });
  }

  const result = await prisma.postLike.create({
    data: {
      userId,
      post: { connect: { id: Number(postId) } },
    },
  });
  res.json(result);
});

app.delete(`/posts/:id/dislikePost`, verifyToken, async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId, username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const postLike = await prisma.postLike.findFirst({
    where: {
      postId: Number(postId),
      userId,
    },
  });

  if (!postLike) {
    return res.status(404).json({ message: 'Post like not found.' });
  }

  if (postLike.userId === userId) {
    await prisma.postLike.deleteMany({
      where: {
        postId: postLike.postId,
        userId: postLike.userId,
      },
    });
    return res.status(200).json({ message: 'Post disliked.' });
  }
  return res.status(403).json({ message: 'Forbidden.' });
});

app.delete(`/posts/:id`, verifyToken, async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.body.user;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
      userId,
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }

  await prisma.post.delete({
    where: {
      id: Number(post.id),
    },
  });
  return res.status(200).json({ message: 'Deleted post.' });
});

app.post(`/comments/:id/likeComment`, verifyToken, async (req, res) => {
  const { id: commentId } = req.params;
  const { id: userId, username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(commentId),
    },
  });

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found.' });
  }

  const commentLike = await prisma.commentLike.findFirst({
    where: {
      commentId: Number(commentId),
      userId,
    },
  });

  if (commentLike?.userId === userId) {
    return res
      .status(409)
      .json({ message: 'User already liked this comment.' });
  }

  const result = await prisma.commentLike.create({
    data: {
      userId,
      comment: { connect: { id: Number(commentId) } },
    },
  });
  res.json(result);
});

app.delete(`/comments/:id/dislikeComment`, verifyToken, async (req, res) => {
  const { id: commentId } = req.params;
  const { id: userId, username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const commentLike = await prisma.commentLike.findFirst({
    where: {
      commentId: Number(commentId),
      userId,
    },
  });

  if (!commentLike) {
    return res.status(404).json({ message: 'Comment like not found.' });
  }

  if (commentLike.userId === userId) {
    await prisma.commentLike.deleteMany({
      where: {
        commentId: commentLike.commentId,
        userId: commentLike.userId,
      },
    });
    return res.status(200).json({ message: 'Comment disliked.' });
  }
  return res.status(403).json({ message: 'Forbidden.' });
});

app.delete(`/comments/:id`, verifyToken, async (req, res) => {
  const { id: commentId } = req.params;
  const { id: userId, username } = req.body.user;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(commentId),
    },
  });

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found.' });
  }

  if (comment?.userId === userId) {
    await prisma.comment.delete({
      where: {
        id: Number(commentId),
      },
    });
    return res.status(200).json({ message: 'Deleted comment.' });
  }
  return res.status(403).json({ message: 'Forbidden.' });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
