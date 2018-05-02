console.log("**********Operators***********")
var birthYear = 2017 - 30;
console.log("Birth Year is:"+birthYear);

var now = 2017;

birthYear = now - 26 * 2;
console.log("Birth Year is:"+birthYear);

var ageFoo = 30;
var ageBar = 30;

ageFoo = ageBar = (3 + 4) * 5 - 6 ;
//ageFoo = ageBar = 29
//ageFoo = 29

ageFoo++;
ageBar *=2;

console.log(ageFoo);
console.log(ageBar);