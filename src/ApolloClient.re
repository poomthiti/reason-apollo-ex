/* Create an InMemoryCache */
let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();

/* Create an HTTP Link */
let httpLink =
  ApolloLinks.createHttpLink(
    ~uri="https://graphql-lt4.bandchain.org/v1/graphql",
    (),
  );

let client =
  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());

[@react.component]
let make = (~children) => {
  <ApolloHooks.Provider client> children </ApolloHooks.Provider>;
};
