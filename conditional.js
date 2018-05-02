// if/else conditional statements

console.log("**************if/else conditional statements**************")

var name = 'Mark'
var age = 25
var isMarried = 'no';


if (isMarried === 'yes') {
    console.log(name + ' is Married')
} else {
    console.log(name + ' will hopfully marry soon...')
}


isMarried = true;

if (isMarried) {
    console.log(name+ ' is Married')
}


if ( 23 == "23" ) {
    console.log('type Coercion will happen here - integer 23 will be converted to string 23 and returns true')
}

//'type Coercion will not happen here - integer 23 will not be converted to string 23.
if (23 === '23' ) {  //false
    console.log('is Equal')
} else {
    console.log('Not Equal')
}