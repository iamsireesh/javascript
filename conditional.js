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


//Boolean Logic and Switch Statements

console.log("**************Boolean Logic and Switch Statements**************")

var age = 30;

if( age < 20 ) {
    console.log("Mark is a teenager..")
} else {
    console.log("Mark is a man..")
}


var age = 25;

if( age < 20 ) {
    console.log("Mark is a teenager..")
} else if( age > 20 && age < 30 ) {
    console.log("Mark is young man..")
} else {
    console.log("Mark is a man..")
}


var job = prompt("What does mark do?");

switch(job) {
    case 'teacher':
        console.log("Mark teaches kids");
        break;
    case 'cop':
        console.log("Mark helps to reduce crime");
        break;
    case 'driver':
        console.log("Mark drives the car");
        break;
    default:
        console.log('Mark does the following job:- '+job);
    
}


