import jwt from 'jsonwebtoken';

export const generateToken = (userData: object, secret: string): string => {
  const token = jwt.sign(userData, secret);
  return token;
};
