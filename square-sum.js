// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.


//My solution
function squareSum(numbers){
    return numbers.map(number => Math.pow(number,2)).reduce((a,c) => a + c, 0)
  }
  
  //take in number
  //map array of numbers returning number squared
  //add sum of numbers