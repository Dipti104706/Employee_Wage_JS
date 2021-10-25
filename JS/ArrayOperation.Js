let origDogs=["Bulldog","Beagle","Labrador"];
let cats=new Array("Americal curl","Bengal");
let birds=new Array("Falcons","Ducks","Flamingoes");

//Array copy elements
let slicedDogs=origDogs.slice(1,2);
let copyDogs=[...origDogs]; 
let dogs=origDogs.slice(0);

//Stack Functions (LIFO) push and pop
let pushDog=dogs.push("Golden Retriever");
let popDog=dogs.pop();
dogs[dogs.length]="Poddle"; //dogs.length means at the last element will inserted

//Add and remove from first
let addFirst=dogs.unshift("Golden Retriever");
let shiftDog=dogs.shift();

//Atomic add and remove elements (where, how many to remove,element list)
dogs.splice(2,1,"pug","Boxer");

//Array Function concat,slice and sort
let animals=dogs.concat(cats,birds);
let newAnimal=[...dogs,...cats,...birds].toString();

//sorting operation
let sortDogs=dogs.slice(0).sort();

//Function
function scanArray([first,second])
{
    console.log("Scan:"+first+" "+second);
}
scanArray(animals);

//join () used to separate array element by space or - which is earlier separated by comma
let joinAnimals=animals.join(" ");
let allAnimals=" ";
for(let animal of animals)
    allAnimals+=animals + " ";
console.log("Animals :"+allAnimals);