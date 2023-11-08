import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  TypePolicies,
} from "@apollo/client";

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming];
        },
      },
    },
  },
};

const client = new ApolloClient({
  uri: "https://portocesareo.stepzen.net/api/nordic-armadillo/__graphql",
  headers: {
    Authorization:
      "apikey portocesareo::stepzen.io+1000::d28e335aca5579ff10d7ea36c4c7f4e9cb09e959017edf43f337bb7d9e2340b7",
  },
  cache: new InMemoryCache({ typePolicies }),
});

export default client;
