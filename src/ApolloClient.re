let gqlEndpoint = "graphql-lt4.bandchain.org/v1/graphql";

/* Create an InMemoryCache */
let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();

/* Create an HTTP Link */
let httpLink = ApolloLinks.createHttpLink(~uri="https://" ++ gqlEndpoint, ());

/* Create a WS Link */
// let webSocketLink =
//   ApolloLinks.webSocketLink({
//     uri: "wss://" ++ gqlEndpoint,
//     options: {
//       reconnect: true,
//       connectionParams: None,
//     },
//   });
// /* Using the ability to split links, you can send data to each link
//    depending on what kind of operation is being sent */
// let link =
//   ApolloLinks.split(
//     operation => {
//       let operationDefition =
//         ApolloUtilities.getMainDefinition(operation.query);
//       operationDefition.kind == "OperationDefinition"
//       && operationDefition.operation == "subscription";
//     },
//     webSocketLink,
//     httpLink,
//   );

let client =
  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());

[@react.component]
let make = (~children) => {
  <ApolloHooks.Provider client> children </ApolloHooks.Provider>;
};
