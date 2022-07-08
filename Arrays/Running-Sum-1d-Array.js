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
