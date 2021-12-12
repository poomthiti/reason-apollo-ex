type t('a) = ApolloHooks.Query.variant('a);

let map = (result, f) =>
  switch (result) {
  | ApolloHooks.Query.Data(data) => ApolloHooks.Query.Data(data |> f)
  | Loading => Loading
  | Error(e) => Error(e)
  | NoData => NoData
  };

let resolve = data => ApolloHooks.Query.Data(data);

let default = (result, value) =>
  switch (result) {
  | ApolloHooks.Query.Data(data) => data
  | _ => value
  };

let let_ = (result, f) =>
  switch (result) {
  | ApolloHooks.Query.Data(data) => f(data)
  | Loading => ApolloHooks.Query.Loading
  | Error(e) => Error(e)
  | NoData => NoData
  };
