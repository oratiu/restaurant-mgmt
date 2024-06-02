import { Sequelize } from 'sequelize-typescript';
import Restaurant from './restaurant';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 8889,
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'database_development',
  models: [Restaurant], // Add all your models here
});

export { sequelize, Restaurant };
