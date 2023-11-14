'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.searchExercisesGET = function searchExercisesGET (req, res, next, name) {
  Search.searchExercisesGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchFoodGET = function searchFoodGET (req, res, next, ingredient) {
  Search.searchFoodGET(ingredient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
