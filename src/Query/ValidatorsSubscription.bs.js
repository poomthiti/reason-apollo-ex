'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ApolloHooks = require("reason-apollo-hooks/src/ApolloHooks.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Query$ApolloExample = require("./Query.bs.js");

var ppx_printed_query = "query GetValidators  {\nvalidators  {\nid  \nmoniker  \nstatus  \ntokens  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var value$2 = Js_dict.get(value$1, "validators");
  return {
          validators: value$2 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(value$2))).map(function (value) {
                  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                  var value$2 = Js_dict.get(value$1, "id");
                  var tmp;
                  if (value$2 !== undefined) {
                    var value$3 = Caml_option.valFromOption(value$2);
                    var value$4 = Js_json.decodeNumber(value$3);
                    tmp = value$4 !== undefined ? value$4 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$3));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type validators is missing");
                  }
                  var value$5 = Js_dict.get(value$1, "moniker");
                  var tmp$1;
                  if (value$5 !== undefined) {
                    var value$6 = Caml_option.valFromOption(value$5);
                    var value$7 = Js_json.decodeString(value$6);
                    tmp$1 = value$7 !== undefined ? value$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field moniker on type validators is missing");
                  }
                  var value$8 = Js_dict.get(value$1, "status");
                  var tmp$2;
                  if (value$8 !== undefined) {
                    var value$9 = Caml_option.valFromOption(value$8);
                    var value$10 = Js_json.decodeBoolean(value$9);
                    tmp$2 = value$10 !== undefined ? value$10 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$9));
                  } else {
                    tmp$2 = Js_exn.raiseError("graphql_ppx: Field status on type validators is missing");
                  }
                  var value$11 = Js_dict.get(value$1, "tokens");
                  return {
                          id: tmp,
                          moniker: tmp$1,
                          status: tmp$2,
                          tokens: value$11 !== undefined ? Caml_option.valFromOption(value$11) : Js_exn.raiseError("graphql_ppx: Field tokens on type validators is missing")
                        };
                }) : Js_exn.raiseError("graphql_ppx: Field validators on type query_root is missing")
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function definition_2(graphql_ppx_use_json_variables_fn) {
  return 0;
}

var definition = [
  parse,
  ppx_printed_query,
  definition_2
];

function ret_type(f) {
  return {};
}

var MT_Ret = {};

var Validators = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function get(param) {
  var match = ApolloHooks.useQuery(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, definition);
  return Query$ApolloExample.let_(match[0], (function (result) {
                return {
                        TAG: /* Data */0,
                        _0: result
                      };
              }));
}

exports.Validators = Validators;
exports.get = get;
/* ApolloHooks Not a pure module */
