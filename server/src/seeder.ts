import { Sequelize } from 'sequelize-typescript';
import { Restaurant } from './models';
var Chance = require('chance');


const chance = new Chance();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'admin',
  password: 'admin',
  database: 'database_development',
  models: [Restaurant],
});

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const restaurants = Array.from({ length: 50 }).map(() => ({
    name: chance.company(),
    address: chance.address(),
    email: chance.email(),
    phone: chance.phone(),
  }));

  await Restaurant.bulkCreate(restaurants);

  console.log('Database seeded!');
};

seedDatabase()
  .then(() => {
    console.log('Seeding successful');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
