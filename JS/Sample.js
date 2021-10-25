//let age=16;
//if ((age >= 14) && (age<19)) 
//console.log("Eligible.");
//else 
//console.log("Not Eligible.");

//Use of prompt method to take user input
//const promt=require('prompt-sync')();
//const name=promt ('What is your name?');
//const number=promt('What is your phn number?');
//console.log("Hey "+name);
//console.log("Your number is "+number);

//For loop sample program
let dogs=["Bulldog","Beagle","Labrador"];

//Old way
var allDogs=" ";
for (var i=0; i< dogs.length; i++)
{
    allDogs +=dogs[i]+ " ";
}
console.log("OLD: "+allDogs)

//New Way
allDogs=" ";
for (let dog of dogs)
{
    allDogs+=dog + " ";
}
console.log("NEW: "+allDogs);

//While loop Sample
let dogs=["Bulldog","Beagle","Labrador"];
let i=0;
let allDogs=" ";
while (i<dogs.length)
{
    allDogs +=dogs[i++] + " ";
}
console.log("while:" +allDogs);

//Do while loop
i=0;
allDogs=" ";
do 
{
    allDogs+=dogs[i++] + " ";
}
while(i< dogs.length)