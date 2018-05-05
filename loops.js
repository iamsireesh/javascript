console.log("********************** Loops and Iteration ***************************");



console.log("*********** For Loops ***********");

for( var i = 0; i < 10; i++ ) {
    console.log(i);
}


var names = ["Foo","Bar","Mark","Virat","Rahul"];


for( var i = 0; i < names.length ; i++ ) {
    console.log(names[i]);
} 


for( var i = names.length-1; i >= 0 ; i-- ) {
    console.log(names[i]);
} 

console.log("*********** While Loop ***********");

var i = 0;
while( i < names.length) {
    console.log(names[i]);
    i++;
}


console.log("*********** Break Statement ***********");

for( var i = 1; i <= 5; i++ ) {
    console.log(i);
    
    if( i === 3 ) {
        break;
    }
}


console.log("*********** Continue Statement ***********");

for( var i = 1; i <= 5; i++ ) {
    
    if( i === 3 ) {
        continue;
    }
    console.log(i);
}