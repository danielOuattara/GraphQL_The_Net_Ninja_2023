import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _database from "./_database.js";
//----------------------------------------------------------

// Resolvers define how to fetch the types defined in your schema.

// This resolver retrieves books from the "books" array above.

export const resolvers = {
  Query: {
    reviews() {
      return _database.reviews;
    },
    games() {
      return _database.games;
    },
    authors() {
      return _database.authors;
    },
    review(parents, args, context) {
      return _database.reviews.find((item) => item.id == args.id);
    },
    game(parents, args, context) {
      return _database.games.find((item) => item.id == args.id);
    },
    author(parents, args, context) {
      return _database.authors.find((item) => item.id == args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs, // -> description of data type and relations,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
