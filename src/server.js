var express = require('express');
var _a = require('apollo-server-express'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var app = express();
var typeDefs = "\n    type Query {\n        hello: String\n    }\n";
var resolvers = {
    Query: {
        hello: function () { return 'Hello World!'; }
    }
};
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.applyMiddleware({ app: app });
var PORT = process.env.PORT || 3000;
app.listen({ port: PORT }, function () { return console.log("\uD83D\uDE80 Server ready at http://localhost:4000" + server.graphqlPath); });
