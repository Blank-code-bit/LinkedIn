import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://portocesareo.stepzen.net/api/nordic-armadillo/__graphql",
  headers: {
    Authorization:
      "apikey portocesareo::stepzen.io+1000::d28e335aca5579ff10d7ea36c4c7f4e9cb09e959017edf43f337bb7d9e2340b7",
  },
  cache: new InMemoryCache(),
});

export default client;
