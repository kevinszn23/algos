// Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    // js set is a collection of unique values
    // use the Set to store array element 
     let found = new Set(nums);
     // check if the size of the set is the same as the original array
     // if array has duplicate they won't be the same
     return found.size !== nums.length;
 };

// Two Sum
//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
//  You can return the answer in any order.

var twoSum = function(nums, target) {
    let sum = [];
   for(let i = 0; i < nums.length; i++){
       for(let j = 0; j < i; j++){
           let adding = nums[i] + nums[j];
           if(adding == target){
            sum.push(j)
            sum.push(i)
           console.log(sum)
           }
  
       }
   }


   return sum;
   
};

// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function ana(s, t){
    let string1 = s.split('').sort().join('')
    let string2 = t.split('').sort().join('')
    const length = string1.length === string2.length;

    if(!length)
        return false;
    return string1 === string2
    


}
console.log(ana("doggo", "gggod"))

// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let low = Math.min(...prices)
   // let day = prices.indexOf(low)
   let newArray = [];
   
   for(let i = 0; i < prices.length; i++){
     
     let buyDay = prices[i] == low

    if(buyDay){
     let lowest = prices[i];
     let last = prices[prices.length -1]
     // console.log(last)
     if(lowest == last){
        console.log('no lower than this')
       return lowest = 0
     }
     else{
       console.log('can still profit')
     for(let j = lowest; j < prices.length; j++){
       newArray.push(prices[j])
     
      }
       // console.log(newArray)
       
     }
     for(let k =0; k < newArray.length; k++){
       let max = Math.max(...newArray)
       let sellDay = newArray[k] == max
       if(sellDay){
         let largest = newArray[k]
         // console.log(largest)
         let prof = largest - lowest
       return prof
         // console.log(newArray[k])
       }
 
     }
       
      }
     //  console.log(newArray)
   }
};

function fizzbuzz(num) {
    for(let num = 1; num < 20; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizzbuzz")
        }

        else if (num % 3 == 0) {
            console.log("fizz")
        }
        
        else if (num % 5 == 0) {
            console.log("buzz")
        }
        else {
            console.log(num)
        }
}
}
console.log(fizzbuzz(20))

var romanToInt = function(s) {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            result-=table[s[i]]
        } 
        //otherwise, add like normal. 
        else {
            result+=table[s[i]]
        }
    }
    return result
    
};

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.