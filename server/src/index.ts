import app from './app';
import { sequelize } from './models';
import { PORT } from './config';

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
    );
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
};

startServer();
