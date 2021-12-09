'use strict';

var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, undefined);

exports.inMemoryCache = inMemoryCache;
/* inMemoryCache Not a pure module */
