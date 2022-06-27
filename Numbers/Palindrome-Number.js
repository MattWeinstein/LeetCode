/*8Given an integer x, return true if x is palindrome integer.*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
return x.toString() === x.toString().split('').reverse().join('')
};

/*
----Takeaways----
Solution has time complexity of O(1) and does not require to loop through the string
Solution has O(1) extra memory because it does not create any variables
    - Solution just runs methods on the parameter x, then compares the two values
    
I originally solved this creating two variables. The final solution used far less memory allocation, making it a more usable solution.
*/
