import bcrypt from 'bcrypt';

export const generateHash = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export const comparePasswords = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};
