// Description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//My solution

function abbrevName(name){
    
    //split string into two strings
    //get first letter of each string
    //log them with template literals to add periods
    return(`${name.split(" ")[0][0]}.${name.split(" ")[1][0]}`.toUpperCase())
}