console.log("**************** Java Script Objects and Properties *******************");

var virat = {
    firstName: "Virat",
    lastName: "Kohli",
    yearOfBirth: 1987,
    isMarried: false,
    job: 'Singer'
}

console.log(virat);

//Accessing the object properties (2 ways)
console.log(virat.firstName);
console.log(virat['firstName']);

var someVar = 'job';
console.log(virat[someVar]);


//Data Mutation
virat.isMarried = true;
virat['job'] = 'Cricketer';


console.log(virat.job);


console.log(virat);


//Another way of creating object
var rahul = new Object();
rahul.firstName = "Rahul";
rahul.lastName = "KL";
rahul.yearOfBirth = 1990;
rahul.isMarried = false;
rahul.job = 'Cricketer';


console.log(rahul)


console.log("**************** Java Script Objects and Methods *******************");

//v1.0

var kohliv1 = {
    firstName: "Virat",
    lastName: "Kohli",
    yearOfBirth: 1987,
    isMarried: false,
    job: 'Cricketer',
    family: ['anushka','ramesh','suresh'],
    /*calculateAge: function(year) {
        return 2018 - year;
    },*/
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
}

//var age = calaculateAge(1990);
console.log(kohliv1);
var age = kohliv1.calculateAge();
console.log(age);

console.log(kohliv1);

var kohliv2 = {
    firstName: "Virat",
    lastName: "Kohli",
    yearOfBirth: 1995,
    isMarried: false,
    job: 'Cricketer',
    family: ['anushka','ramesh','suresh'],
    calculateAge: function() {
        this.age =  2018 - this.yearOfBirth;
    }
}

console.log(kohliv2);