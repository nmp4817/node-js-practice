var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array.';
};
// module.exports.counter = function(arr) {
//   return 'There are ' + arr.length + ' elements in this array.';
// };

var adder = function(a,b) {
  return `The sum of two numbers is ${a+b}`;
};
// module.exports.adder = function(a,b) {
//   return `The sum of two numbers is ${a+b}`;
// };

var pi = 3.142;
//Third Way
// module.exports.pi = 3.142;

//Second way
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};

//One way
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// console.log(counter(['A','B','C']));
