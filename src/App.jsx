import React from "react";
import "./App.css";
import {} from "module";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetBanks from "./components/GetBanks";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from({
  errorLink,
  new: HttpLink({ url: "https://carojon-de456b5b4e2c.herokuapp.com/graphql" }),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetBanks />
    </ApolloProvider>
  );
}

export default App;
