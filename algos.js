// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    // js set is a collection of unique values
    // use the Set to store array element 
     let found = new Set(nums);
     // check if the size of the set is the same as the original array
     // if array has duplicate they won't be the same
     return found.size !== nums.length;
 };

