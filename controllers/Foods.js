'use strict';

var utils = require('../utils/writer.js');
var Foods = require('../service/FoodsService');

module.exports.foodsGET = function foodsGET (req, res, next) {
  Foods.foodsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodsIdDELETE = function foodsIdDELETE (req, res, next, id) {
  Foods.foodsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodsIdGET = function foodsIdGET (req, res, next, id) {
  Foods.foodsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodsIdPUT = function foodsIdPUT (req, res, next, body, id) {
  Foods.foodsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.foodsPOST = function foodsPOST (req, res, next, body) {
  Foods.foodsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
