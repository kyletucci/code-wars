// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//My solution
function findAverage(array) {
    let total = 0
    array.forEach((x,i) => {
      total += x
    })
    return array.length > 0 ? total / array.length : 0
  }