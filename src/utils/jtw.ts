/* eslint-disable @typescript-eslint/naming-convention */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interface/interfaceUser';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'suaSenhaSecreta';
// função responsavel por gerar o token jwt 
const generateJWT = (payload: IUser) => {
  const token = jwt.sign({ data: payload }, secretKey);
  
  return token;
};
  
export default generateJWT;