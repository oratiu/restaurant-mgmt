import express, { Application } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { verifyToken } from './middleware/auth';

const app: Application = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    verifyToken,
    expressMiddleware(server),
  );
});

app.use(cors({
  origin: '*',
  credentials: true,
}));


export default app;
