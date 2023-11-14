'use strict';

var utils = require('../utils/writer.js');
var Exercises = require('../service/ExercisesService');

module.exports.exercisesGET = function exercisesGET (req, res, next) {
  Exercises.exercisesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exercisesIdDELETE = function exercisesIdDELETE (req, res, next, id) {
  Exercises.exercisesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exercisesIdGET = function exercisesIdGET (req, res, next, id) {
  Exercises.exercisesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exercisesIdPUT = function exercisesIdPUT (req, res, next, body, id) {
  Exercises.exercisesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exercisesPOST = function exercisesPOST (req, res, next, body) {
  Exercises.exercisesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
