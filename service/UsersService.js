'use strict';


/**
 * Delete a user based on his/her id.
 *
 * id String The id of the user to be deleted.
 * no response value expected for this operation
 **/
exports.usersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user's equipment based on his/her id.
 *
 * id String The id of the user whose equipment is to be received.
 * returns List
 **/
exports.usersIdEquipmentGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "dumbell", "barbel" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user's equipment based on his/her id.
 *
 * body List Equipment model
 * id String The id of the user whose equipment is to be updated.
 * returns user
 **/
exports.usersIdEquipmentPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gender" : "male",
  "level" : "intermediate",
  "weight" : 83,
  "equipment" : [ "dumbell", "barbel" ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "johndoe@gmail.com",
  "age" : 23,
  "height" : 185,
  "measurements" : {
    "chest" : 120.3,
    "hips" : 101.2,
    "thigh" : 60,
    "abdomen" : 89.6,
    "biceps" : 40.3
  },
  "statistics" : {
    "bmr" : 1900,
    "fat" : 14.5,
    "bmi" : 24
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a user's info using its id.
 * FR*.
 *
 * id String The id of the user whose information are to be received.
 * returns user
 **/
exports.usersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gender" : "male",
  "level" : "intermediate",
  "weight" : 83,
  "equipment" : [ "dumbell", "barbel" ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "johndoe@gmail.com",
  "age" : 23,
  "height" : 185,
  "measurements" : {
    "chest" : 120.3,
    "hips" : 101.2,
    "thigh" : 60,
    "abdomen" : 89.6,
    "biceps" : 40.3
  },
  "statistics" : {
    "bmr" : 1900,
    "fat" : 14.5,
    "bmi" : 24
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user based on his/her id.
 *
 * body User User model
 * id String The id of the user whose information are to be updated.
 * returns user
 **/
exports.usersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gender" : "male",
  "level" : "intermediate",
  "weight" : 83,
  "equipment" : [ "dumbell", "barbel" ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "johndoe@gmail.com",
  "age" : 23,
  "height" : 185,
  "measurements" : {
    "chest" : 120.3,
    "hips" : 101.2,
    "thigh" : 60,
    "abdomen" : 89.6,
    "biceps" : 40.3
  },
  "statistics" : {
    "bmr" : 1900,
    "fat" : 14.5,
    "bmi" : 24
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Receive user's statistics based on his/her id.
 *
 * id String The id of the user whose statistics are to be received.
 * returns statistics
 **/
exports.usersIdStatsGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bmr" : 1900,
  "fat" : 14.5,
  "bmi" : 24
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new user to the system.
 * FR*.
 *
 * body NewUser New user's email and password.
 * returns user
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gender" : "male",
  "level" : "intermediate",
  "weight" : 83,
  "equipment" : [ "dumbell", "barbel" ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "johndoe@gmail.com",
  "age" : 23,
  "height" : 185,
  "measurements" : {
    "chest" : 120.3,
    "hips" : 101.2,
    "thigh" : 60,
    "abdomen" : 89.6,
    "biceps" : 40.3
  },
  "statistics" : {
    "bmr" : 1900,
    "fat" : 14.5,
    "bmi" : 24
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

