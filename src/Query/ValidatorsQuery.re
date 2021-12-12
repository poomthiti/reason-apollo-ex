type reportCount = {count: int};

type t = {
  id: int,
  moniker: string,
  status: bool,
  tokens: string,
  validator_report_count: reportCount,
};

module Validators = [%graphql
  {|
  query GetValidators {
    validators {
      id
      moniker
      status
      tokens
      validator_report_count {
        count
      }
    }
  }
|}
];

let get = () => {
  let (result, _) = ApolloHooks.useQuery(Validators.definition);
  switch (result) {
  | Loading => ApolloHooks.Query.Loading
  | Data(data) => ApolloHooks.Query.Data(data)
  | NoData => NoData
  | Error(e) => Error(e)
  };
};
