function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) where n is the length of the input array

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    create an empty set called seenNumbers
    for each number in array:
      complement = target - number
      if complement is in seenNumbers:
        return true
      add number to seenNumbers
    return false
*/

/*
- The `hasTargetSum` function takes an array of numbers and a target number as inputs.
- It uses a set to store the numbers encountered so far.
- For each number in the array:
  - It calculates the complement (the number needed to reach the target when added to the current number).
  - If the complement is in the set, it means a pair of numbers that add up to the target has been found, and the function returns true.
  - If the complement is not in the set, the current number is added to the set.
- If the function iterates through all numbers without finding a pair, it returns false.
- This approach is efficient because checking for membership in a set is O(1) on average.
- The overall time complexity is O(n), where n is the length of the input array.
- The space complexity is O(n) in the worst case, where all numbers are stored in the set.
- The solution is efficient and works well for large arrays.
- The function is designed to handle edge cases, such as empty arrays or arrays with negative numbers..
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
