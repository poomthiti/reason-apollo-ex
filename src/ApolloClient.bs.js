'use strict';

var React = require("react");
var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var ReactHooks = require("@apollo/react-hooks");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");

var gqlEndpoint = "graphql-lt4.bandchain.org/v1/graphql";

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, undefined);

var httpLink = ApolloLinks.createHttpLink("https://graphql-lt4.bandchain.org/v1/graphql", undefined, undefined, undefined, undefined, undefined, undefined);

var client = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, undefined);

function ApolloClient(Props) {
  var children = Props.children;
  return React.createElement(ReactHooks.ApolloProvider, {
              client: client,
              children: children
            });
}

var make = ApolloClient;

exports.gqlEndpoint = gqlEndpoint;
exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.client = client;
exports.make = make;
/* inMemoryCache Not a pure module */
