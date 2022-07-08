/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // Given an array of numbers, will be integer
    // Return an array, each element will be the sum all previous
    
    // Create an asnwer array
    // Loop through the nums array
    // Pushing a number onto the end of the asnwerarray
        // Handle i === 0, conditional to set it equal to nums[i]
        // number will be nums[i]+asnwerarray[i-1]
    // Return the answer array
    let answerArr = [];
    
    for(let index = 0;index<nums.length;index++){
        if(index===0){
            answerArr.push(nums[index]) //Edge case on first pass

        }else{
            answerArr.push(nums[index]+answerArr[index-1])
        }
    }
    return answerArr
};

/*
----Takeaways----
Even though the majority of my code was correct for the first submission, a minor detail created an array of NaN values. 

When reviewing code, take it step by step in order you would expect it to work. If something is out of order, this is how the computer will tell you it is surprised.

Check your variables. Closely.

*/
