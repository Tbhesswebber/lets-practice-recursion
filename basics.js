/* *
 * The most basic concept of a recursive function is a function that calls itself until it doesn't.  
 * This may sound confusing, but it tells us two important things: 
 *    1) Our function should make a call to itself.
 *    2) We need to establish a condition in which our function no longer calls to itself (referred to as the "base case").
 * 
 * A basic recursive function in JavaScript would look similar to this:
 *  function recursiveFunction(value) {
 *    if (baseCase) {
 *      return value;
 *    } else {
 *      recursiveFunction(transformedValue)
 *    }
 *  }
 * 
 * Let's practice!
 */


// TODO: Write a recursive function that takes in a number 'n' and counts down to zero (not including zero), logging every value to the console along the way.
function countDownToZero(n) {
  // Your code here
}


/* *
 * The function you just wrote should follow that basic pattern from above.  Take a moment and think about what your base case is.
 * The above is one of the most simplistic recursive methods because, for each value passed to the function (n, n-1, ..., 2, 1), there is only a side effect.
 * Having side effects is not useful on it's own in most cases because we typically want our function to return a result - this is where helper functions come in.
 * 
 * An intermediate version of the above recursive function might look similar to this:
 *  function someFunc(value) {
 *    var result = [];
 *    function recursiveHelper(val) {
 *      if (!baseCase) {
 *        result.push(val);
 *        recursiveHelper(transformedVal)
 *      }
 *    }
 *    recursiveHelper(value);
 *    return result;
 *  }
 * 
 * The above function takes advantage of side effects and closures to assemble a result and is similar to using Array.prototype.forEach.
 * This leads us to another recursive concept:
 *      
 *        "Anything that can be done iteratively can be done recursively."
 * 
 * Let's check it out!
 */

// TODO: Write the following iterative function as a recursive function.
function iterativeCountDownArray(n) {
  var result = [];
  while (n > 0) {
    result.push(n);
    n--;
  }
  return result;
}

function recursiveCountDownArray(n) {
  // Your code here
}