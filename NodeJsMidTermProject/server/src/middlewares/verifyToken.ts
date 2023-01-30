import { User } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
  jwt.verify(token, '' + process.env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    }
    if (!decoded.username) {
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    }
    req.body.user = decoded;
    next();
  });
};
