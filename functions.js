console.log('****************** JS Functions *********************');

function calaculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var fooAge = calaculateAge(1985);
var barAge = calaculateAge(1980);
var markAge = calaculateAge(1965);


console.log(fooAge);
console.log(barAge);
console.log(markAge);


function yearsUntilRetirement(name, year) {
    var age = calaculateAge(year);
    var retirement = 65 - age;
    
    if( retirement >=0 ) {
        console.log(name + ' retires in '+ retirement + ' years');
    } else {
        console.log(name + ' is already retired');
    }
    
}

yearsUntilRetirement('Foo',1985);
yearsUntilRetirement('Bar',1980);
yearsUntilRetirement('Mark',1900);
