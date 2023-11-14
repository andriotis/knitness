'use strict';


/**
 * Get all the exercises stored in the system.
 *
 * returns List
 **/
exports.exercisesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "execution" : "Place your arms shoulder-width apart",
  "name" : "Pull ups",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "video" : "https://cdn.knitness/exercises/fkgkrkg459",
  "type" : "pull"
}, {
  "execution" : "Place your arms shoulder-width apart",
  "name" : "Pull ups",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "video" : "https://cdn.knitness/exercises/fkgkrkg459",
  "type" : "pull"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an exercise given its id in the system
 *
 * id String The id of the exercise to be deleted.
 * returns exercise
 **/
exports.exercisesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "execution" : "Place your arms shoulder-width apart",
  "name" : "Pull ups",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "video" : "https://cdn.knitness/exercises/fkgkrkg459",
  "type" : "pull"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the exercise using its id stored in the system.
 *
 * id String The id of the exercise to be received.
 * returns food
 **/
exports.exercisesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "execution" : "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
  "name" : "Chicken curry",
  "ingredients" : [ {
    "amount" : 600,
    "name" : "Chicken breast",
    "type" : "gr"
  }, {
    "amount" : 600,
    "name" : "Chicken breast",
    "type" : "gr"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an exercise given its id in the system
 *
 * body Exercise Exercise model
 * id String The id of the food to be updated.
 * returns exercise
 **/
exports.exercisesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "execution" : "Place your arms shoulder-width apart",
  "name" : "Pull ups",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "video" : "https://cdn.knitness/exercises/fkgkrkg459",
  "type" : "pull"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new exercise to the system.
 *
 * body Exercise New exercise's information.
 * returns exercise
 **/
exports.exercisesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "execution" : "Place your arms shoulder-width apart",
  "name" : "Pull ups",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "video" : "https://cdn.knitness/exercises/fkgkrkg459",
  "type" : "pull"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

