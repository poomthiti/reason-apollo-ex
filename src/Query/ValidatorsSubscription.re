type t = {
  id: int,
  moniker: string,
  status: bool,
  tokens: string,
};

module Validators = [%graphql
  {|
  query GetValidators {
    validators {
      id
      moniker
      status
      tokens
    }
  }
|}
];

let get = () => {
  let (resultSubscription, _) = ApolloHooks.useQuery(Validators.definition);
  let%Query result = resultSubscription;
  ApolloHooks.Query.Data(result);
};
