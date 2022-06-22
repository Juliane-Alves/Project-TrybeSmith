import connection from './connection';
import IUser from '../interface/interfaceUser';

const createUser = async (username: string, classe: string, level: number, password: string) => {
  const query = `INSERT INTO Trybesmith.Users
      (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  
  const [userData] = await connection.execute(query, [username, classe, level, password]);
  
  const { insertId } = JSON.parse(JSON.stringify(userData));
  
  const newUser = {
    id: insertId,
    username,
    classe,
    level,
    password,
  };
  
  return newUser as IUser;
};
  
export default {
  createUser,
}; 
