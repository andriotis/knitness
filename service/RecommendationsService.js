'use strict';


/**
 * Using the user's id, get a food recommendation based on his statistics.
 *
 * userId String The id of the user getting a recommendation.
 * returns List
 **/
exports.food_recommendationsUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Using the user's id, get a workout recommendation based on his statistics.
 *
 * userId String The id of the user getting a recommendation.
 * returns List
 **/
exports.workout_recommendationsUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "exercises" : [ {
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
  } ],
  "name" : "Intermediate pull workout"
}, {
  "exercises" : [ {
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
  } ],
  "name" : "Intermediate pull workout"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

