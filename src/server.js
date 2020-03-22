const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./services/resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dba:250312Jl!@labapidb-4ejww.gcp.mongodb.net/graphql2?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers
});

server.start();


