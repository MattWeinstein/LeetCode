/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    for(let i = 0;i<Math.floor(s.length/2);i++){
        let first =s[i]
        let next = s[s.length-(i+1)]
        s[i]=next
        s[s.length-(i+1)]=first
    }
};
/*

----Takeaways----

This solution has a time complexity of O(n) due to the singular for loop

This solution has O(1) extra memory because the variables first and next can not be called after function close so they only take up space in stack memory.
The input string s requires O(n) heap memory but is not counted due to it being a parameter in the function
    - The input string takes up O(n) memory but is not counted because it is a parameter in the function
    - Variables first and next are LOCAL to the function and take up STACK memory allocation
        - Because the variables are not accessible after function close, they do not have HEAP memory allocation
*/