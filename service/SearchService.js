'use strict';


/**
 * Find an exercise by name.
 *
 * name String The name of the exercise to be found.
 * returns List
 **/
exports.searchExercisesGET = function(name) {
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
 * Find a food recipes with the desired ingredients.
 *
 * ingredient String The ingredient of a food recipe.
 * returns List
 **/
exports.searchFoodGET = function(ingredient) {
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

