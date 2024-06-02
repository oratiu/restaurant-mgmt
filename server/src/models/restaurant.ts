import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class Restaurant extends Model {}

Restaurant.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: sequelize.sequelize,
  modelName: 'Restaurant',
});

export default Restaurant;
