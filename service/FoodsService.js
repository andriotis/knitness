"use strict";

/**
 * Get all the food recipes stored in the system.
 *
 * returns List
 **/
exports.foodsGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        execution:
          "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
        name: "Chicken curry",
        ingredients: [
          {
            amount: 600,
            name: "Chicken breast",
            type: "gr",
          },
          {
            amount: 600,
            name: "Chicken breast",
            type: "gr",
          },
        ],
        id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      },
      {
        execution:
          "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
        name: "Chicken curry",
        ingredients: [
          {
            amount: 600,
            name: "Chicken breast",
            type: "gr",
          },
          {
            amount: 600,
            name: "Chicken breast",
            type: "gr",
          },
        ],
        id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Delete a food recipe based on its id.
 *
 * id String The id of the food to be deleted.
 * returns food
 **/
exports.foodsIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      execution:
        "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
      name: "Chicken curry",
      ingredients: [
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
      ],
      id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get a food recipe using its id in the system.
 *
 * id String The id of the food to be received.
 * returns food
 **/
exports.foodsIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      execution:
        "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
      name: "Chicken curry",
      ingredients: [
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
      ],
      id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update a food recipe based on its id.
 *
 * body Food Food model
 * id String The id of the food to be updated.
 * returns user
 **/
exports.foodsIdPUT = function (body, id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      gender: "male",
      level: "intermediate",
      weight: 83,
      equipment: ["dumbell", "barbel"],
      id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      email: "johndoe@gmail.com",
      age: 23,
      height: 185,
      measurements: {
        chest: 120.3,
        hips: 101.2,
        thigh: 60,
        abdomen: 89.6,
        biceps: 40.3,
      },
      statistics: {
        bmr: 1900,
        fat: 14.5,
        bmi: 24,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Add a new food recipe in the system.
 *
 * body Food New food recipe's information.
 * returns food
 **/
exports.foodsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      execution:
        "Heat the oil in a flameproof casserole dish or large frying pan over a medium...",
      name: "Chicken curry",
      ingredients: [
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
        {
          amount: 600,
          name: "Chicken breast",
          type: "gr",
        },
      ],
      id: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
