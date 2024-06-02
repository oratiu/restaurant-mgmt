import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string);

const db: any = {
  sequelize,
  Sequelize,
};

export default db;