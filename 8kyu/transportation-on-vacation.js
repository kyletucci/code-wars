// Description:

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


//My solution
function rentalCarCost(d) {
    // rental base price $40/day
    // 7 or more days -> $50 off
    // 3 or more days -> $20 off
    let totalPrice = 40 * d
    if(d >= 7){
      totalPrice -= 50
    }
    else if(d >=3){
      totalPrice -= 20
    }
    return totalPrice
  }