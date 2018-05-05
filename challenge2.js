console.log("******************* Coding Challenge 2 *************************");

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

function printFullAge(years) {
    

    var ages = [];
    var output = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }

    for (var i = 0; i< ages.length; i++) {
        if(ages[i] >= 18) {
            console.log("Person " + i + " is of full age " + ages[i]);
            output[i] = true;
        } else {
            console.log("Person " + i + " is of partial age " + ages[i]);
            output[i] = false;
        }
    }
    return output;
}

var years = [1960,2010,1975];

var full_1 = printFullAge(years);
console.log(years);
console.log(full_1);

var years1 = [2010,1960,1975];

var full_2 = printFullAge(years1);
console.log(years1);
console.log(full_2);