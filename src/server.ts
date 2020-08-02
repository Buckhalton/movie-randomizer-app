const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express');

const app = express();

const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    },
}

const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;

app.listen({port: PORT}, () =>   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
