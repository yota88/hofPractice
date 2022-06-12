// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
// I: An array of numbers.
// O: A number count of the total numbers that are multiples of five.
// C:
// E: None.

var multiplesOfFive = function(numbers) {
  // Function should keep a count variable.
  var fiveMultiples = 0;
  // For each value in input array, check if % 5 === 0.
  // If value % 5 === 0, increase count by 1.
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      fiveMultiples += 1;
    }
  });

  return fiveMultiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
// I: An array of fruits.
// O: String of the one targetFruit.
// E: No new array is created.
var onlyOneFruit = function(fruits, targetFruit) {

  // Set output of filter function to variable targetFound.
  // Filter takes in array and a test function.
  // Test function tests whether each element = targetFruit.
  // Return true if found, false if not found.
  var targetFound = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

  return targetFound;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

var startsWith = function(fruits, letter) {

  var firstLetterFruits = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

  return firstLetterFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  var cookieType = _.filter(desserts, function(cookie) {
    return cookie === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  var sum = _.reduce(products, function(memo, item) {
    return memo + parseFloat((item.price).substring(1));
  }, 0);

  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  // I: An array of objects, each with a type property.
  // O: An object, with key = type, value = total of type.

  // Pseudocode
  // Create output object;
  var dessertTypes = {};
  // For each type, push 1 into array as the value in key = type on object.
  _.each(desserts, function(dessertObj) {
    _.each(dessertObj, function(type, typeKey) {
      if (dessertTypes[type] === undefined) {
        dessertTypes[type] = [1];
      } else {
        dessertTypes[type].push(1);
      }
    });
  });
  // With dessertType object now containing each dessert type,
  // sum up the array of 1's representing each individual type found.
  _.each(dessertTypes, function(value, key) {
    dessertTypes[key] = _.reduce(dessertTypes[key], function(memo, item) {
      return memo + item;
    });
  });

  return dessertTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  // I: An array of objects. releaseYear property. 'title' property/
  // O: An array -
  // New array to push movie titles to.
  var ninetiesMovies = [];
  // Iterate over array.
  // For each object element, if move between 1990 and 2000,
  // Use _.reduce to add movie to array
  _.reduce(movies, function(memo, item) {
    if (item['releaseYear'] >= 1990 & item['releaseYear'] <= 2000) {
      ninetiesMovies.push(item['title']);
    }
  });

  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var short = false;

  _.reduce(movies, function(memo, item) {
    if (item['runtime'] < timeLimit) {
      short = true;
    }
  });

  return short;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

  var upperCase = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

  return upperCase;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  var glutenProperty = _.map(desserts, function(gluten) {

    var hasGluten = false;
    _.each(gluten['ingredients'], function(flour) {
      if (flour === 'flour') {
        hasGluten = true;
      }
    });

    gluten['glutenFree'] = hasGluten;

    return gluten;
  });

  return glutenProperty;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {


  // I: An array of objects, price property containing $ and product 'ID'.
  // O: An array of objects, containing original object properties and additional 'salePrice.'
  // E: Decimals rounded to two places/

  return _.map(groceries, function(grocery) {

    var priceNum = parseFloat(grocery['price'].substring(1));
    grocery['salePrice'] = '$' + (priceNum * (1 - coupon)).toFixed(2).toString();
    return grocery;
  });
};
