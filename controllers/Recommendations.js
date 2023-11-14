'use strict';

var utils = require('../utils/writer.js');
var Recommendations = require('../service/RecommendationsService');

module.exports.food_recommendationsUserIdGET = function food_recommendationsUserIdGET (req, res, next, userId) {
  Recommendations.food_recommendationsUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workout_recommendationsUserIdGET = function workout_recommendationsUserIdGET (req, res, next, userId) {
  Recommendations.workout_recommendationsUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
