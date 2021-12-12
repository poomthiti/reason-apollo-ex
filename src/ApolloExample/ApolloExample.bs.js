'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ValidatorsSubscription$ApolloExample = require("../Query/ValidatorsSubscription.bs.js");

var thStyle = {
  backgroundColor: "#89CFF0",
  minWidth: "40px",
  padding: "14px",
  borderRadius: "4px"
};

var rowStyle = {
  textAlign: "center"
};

var tdStyle = {
  padding: "8px"
};

function ApolloExample(Props) {
  var validatorsData = ValidatorsSubscription$ApolloExample.get(undefined);
  var tmp;
  tmp = typeof validatorsData === "number" || validatorsData.TAG !== /* Data */0 ? null : Belt_Array.map(validatorsData._0.validators, (function (item) {
            return React.createElement("tr", {
                        key: String(item.id),
                        style: rowStyle
                      }, React.createElement("td", {
                            style: tdStyle
                          }, String(item.id)), React.createElement("td", {
                            style: tdStyle
                          }, item.moniker), React.createElement("td", {
                            style: tdStyle
                          }, Pervasives.string_of_bool(item.status)), React.createElement("td", {
                            style: tdStyle
                          }, JSON.stringify(item.tokens)));
          }));
  return React.createElement("div", {
              style: {
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
              }
            }, React.createElement("table", undefined, React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", {
                              style: thStyle
                            }, "Id"), React.createElement("th", {
                              style: thStyle
                            }, "Moniker"), React.createElement("th", {
                              style: thStyle
                            }, "Status"), React.createElement("th", {
                              style: thStyle
                            }, "Tokens"))), React.createElement("tbody", undefined, tmp)));
}

var make = ApolloExample;

exports.thStyle = thStyle;
exports.rowStyle = rowStyle;
exports.tdStyle = tdStyle;
exports.make = make;
/* react Not a pure module */
