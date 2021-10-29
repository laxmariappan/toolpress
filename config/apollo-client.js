import { ApolloClient, InMemoryCache } from "@apollo/client";
import { APP_BASE_URL } from "config";

const client = new ApolloClient({
  uri: `${APP_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
