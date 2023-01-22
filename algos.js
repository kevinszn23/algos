// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    // js set is a collection of unique values
    // use the Set to store array element 
     let found = new Set(nums);
     // check if the size of the set is the same as the original array
     // if array has duplicate they won't be the same
     return found.size !== nums.length;
 };

// -----
//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
//  You can return the answer in any order.

