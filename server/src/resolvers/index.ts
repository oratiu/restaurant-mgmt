import { Restaurant } from '../models';
import { Op } from 'sequelize';

export const resolvers = {
  Query: {
    restaurants: async (_parent: any, args: any) => {
      const { limit = 5, offset = 0, searchTerm = '' } = args;

      const { rows: restaurants, count: totalCount } = await Restaurant.findAndCountAll({
        where: {
          name: {
            [Op.like]: `%${searchTerm}%`
          }
        },
        limit,
        offset,
      });

      return {
        totalCount,
        restaurants,
      };
    },
  },
  Mutation: {
    createRestaurant: async (_parent: any, args: any) => {
      const { name, address, email, phone } = args;
      return await Restaurant.create({ name, address, email, phone });
    },
    updateRestaurant: async (_parent: any, args: any) => {
      const { id, name, address, email, phone } = args;
      const restaurant = await Restaurant.findByPk(id);
      if (restaurant) {
        restaurant.name = name;
        restaurant.address = address;
        restaurant.email = email;
        restaurant.phone = phone;
        await restaurant.save();
        return restaurant;
      }
      return null;
    },
    deleteRestaurant: async (_parent: any, args: any) => {
      const { id } = args;
      const restaurant = await Restaurant.findByPk(id);
      if (restaurant) {
        await restaurant.destroy();
        return true;
      }
      return false;
    }
  }
};
