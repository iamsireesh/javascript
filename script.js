console.log("Hello World! Welcome to JavaScript Language Basics")

//Data Types
console.log("**********Data Types**********");
var firstName = 'Sireesh';
console.log(firstName);

var lastName = "Vattikuti"
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

var hello;
console.log(hello);


//Variable Mutation and Type Coercion
console.log();
console.log("**********Variable Mutation and Type Coercion**********")

var firstName1 = 'Sireesh';
var age1 = 28;

console.log(firstName1 + age1);  //type Coercion
console.log(age1 + age1);


var job, isMarried;

console.log(job);

job = "SDE";
isMarried = true;

console.log(firstName1 + " Is a "+ age1 + " Years old "+ job + ". Is he Married "+ isMarried + ". ");


//Mutation
age1 = "thirty"
job = "PA Senior"
isMarried = true;

console.log(firstName1 + " Is a "+ age1 + " Years old "+ job + ". Is he Married "+ isMarried + ". ");

var lastName1 = prompt("What is the last Name?");
console.log(lastName1);

alert(firstName1 + " Is a "+ age1 + " Years old "+ job + ". Is he Married "+ isMarried + ". ");