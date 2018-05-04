console.log("****************** Coding Challenge 1 *********************")


// CODING CHALLENGE 1

/*
Foo and a friend invented a simple game where the player with the highest value of his height (in feets) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var fooHeight = 6;
var barHeight = 6;

var fooAge = 20;
var barAge = prompt("What is the age of Bar?")

var times = 5;

var fooScore = fooHeight + ( times * fooAge );
var barScore = barHeight + ( times * barAge );

if( fooScore > barScore ) {
    console.log("Foo wins the game with high score:- " +fooScore);
} else if( fooScore < barScore  ) {
    console.log("Bar wins the game with high score:- " +barScore);
} else {
    console.log("Scores of Foo and Bar is Equal:- " +fooScore );
}

var markHeight = 6;
var markAge = 30;

var markScore = markHeight + times * markAge;

if(fooScore > barScore && fooScore > markScore ) {
    console.log("Foo wins the game with high score:- " +fooScore);
} else if(barScore > markScore && barScore > markScore ) {
    console.log("Bar wins the game with high score:- " +barScore);
} else if(markScore > fooScore && markScore > barScore) {
    console.log("Mark wins the game with high score:- " +markScore);
} else {
    console.log("Scores of Foo, Bar and Mark is Equal:- " +fooScore );
}