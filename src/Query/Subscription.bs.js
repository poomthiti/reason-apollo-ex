'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function map(result, f) {
  if (typeof result === "number") {
    if (result === /* Loading */0) {
      return /* Loading */0;
    } else {
      return /* NoData */1;
    }
  } else if (result.TAG === /* Data */0) {
    return {
            TAG: /* Data */0,
            _0: Curry._1(f, result._0)
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: result._0
          };
  }
}

function resolve(data) {
  return {
          TAG: /* Data */0,
          _0: data
        };
}

function $$default(result, value) {
  if (typeof result === "number" || result.TAG !== /* Data */0) {
    return value;
  } else {
    return result._0;
  }
}

function let_(result, f) {
  if (typeof result === "number") {
    if (result === /* Loading */0) {
      return /* Loading */0;
    } else {
      return /* NoData */1;
    }
  } else if (result.TAG === /* Data */0) {
    return Curry._1(f, result._0);
  } else {
    return {
            TAG: /* Error */1,
            _0: result._0
          };
  }
}

exports.map = map;
exports.resolve = resolve;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.let_ = let_;
/* No side effect */
