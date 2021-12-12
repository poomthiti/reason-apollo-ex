'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ApolloClient$ApolloExample = require("./ApolloClient.bs.js");
var ApolloExample$ApolloExample = require("./ApolloExample/ApolloExample.bs.js");
var ExampleStyles$ApolloExample = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ApolloExample.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(ApolloClient$ApolloExample.make, {
          children: React.createElement(ApolloExample$ApolloExample.make, {})
        }), makeContainer("Apollo Example"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
