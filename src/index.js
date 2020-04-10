import fs from 'fs';
import path from 'path';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import bodyParser from 'body-parser';

import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import Post from './resolvers/Post';
import User from './resolvers/User';
import Date from './resolvers/Date';

const typeDefs = fs.readFileSync(path.join(__dirname, './schema.graphql'), 'utf8');
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    User,
    Date,
  },
  context: {
    db,
    pubsub,
  },
});

const app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('no u');
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(`Server ready as http://localhost:3000${server.graphqlPath}`);
});
