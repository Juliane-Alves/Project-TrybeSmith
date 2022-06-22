import userModel from '../models/userModel';
import generateJWT from '../utils/jtw';

const createUser = async (username: string, classe: string, level: number, password: string) => {
  const createUser2 = await userModel.createUser(username, classe, level, password);

  const token = generateJWT({
    username: createUser2.username,
    classe: '',
    level: 0,
  });

  return token;
};

export default {
  createUser,
}; 