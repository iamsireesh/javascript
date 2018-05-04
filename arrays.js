console.log("**************** Java Script Arrays *******************");

var names = ['Foo','Bar','Mark'];
var years = new Array(1990,1920.1960);

console.log(names);
console.log(names[0]);
console.log(names[2]);
console.log(names[10]);


names[1] = 'Mary';

console.log(names);

//Array with different datatypes
var mark = ['Mark','Sean',55,'teacher',true]

console.log(mark);

mark.push('white');

console.log(mark);

mark.unshift('Mr.');

console.log(mark);

mark.pop()

console.log(mark);

mark.shift();

console.log(mark);

console.log(mark.indexOf('teacher'));

if(mark.indexOf('designer') === -1 ) {
    console.log('Mark is not a designer');
}