import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//----------------------------------------------------------

const server = new ApolloServer({
  // typeDefs -> description of data type and relations,
  // resolvers
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
