var exercise = {};

exercise.min = function(unordered) {
    var min;

    // Find the minimum value in an array
    return unordered.sort()[0];
};

var unordered = [11, 2, 15, 4, 5, 20, 7, 17, 13, 10, 1, 12, 9, 14, 3, 16, 8, 18, 19, 6];
exercise.min(unordered);

module.exports = exercise;
