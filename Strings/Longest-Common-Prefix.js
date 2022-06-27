/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let prefix =''
for(let letter =0;letter<strs.sort()[0].length;letter++){
    if(strs.sort()[0][letter]===strs.sort()[strs.length-1][letter]){
        prefix+=strs.sort()[0][letter]
    }else{
        return prefix
    }
}
return prefix
};

/*
----Takeaways----
This solution has a time complexity of O(n) due to the singular for loop
I originally solved this with O(n)^2 time complexity using a nested for loop. The first loop looped through each letter of one element in the array. 
This letter would then be compared on every other element. 

While it is a reasonable solution, a time complexity of O(n)^2 should be avoided when possible.

The sort method solved this issue. The sort method will sort the array in place in ascending order using UTF-8 values. 
This will be useful as we no longer need to loop through each element of the array.
All elements with the same prefex will be aligned and will get sorted based off the charachters after the similar prefixes

We can now just compare the first and the last arrays.
*/
