let keyString='a string';
let keyObj={};
let keyFunc=function() {}

//Setting the values
let myMap=new Map(); //creating new map 
myMap.set(keyString,"Values associated with 'a string'");
myMap.set(keyObj,'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

//Getting the values
let size=myMap.size;
let valStr=myMap.get(keyString);
let isKeyExist=myMap.has('a string');

//Displaying elements present in the map
for(let [key,val] of myMap)
{
    console.log("Loop1:" +key+ '=' +val);
}
for(let [key,val] of myMap.entries()) console.log("Loop2:" +key+ '=' +val);
for(let key of myMap.keys()) console.log("Keys Available:" +key);
for(let val of myMap.values()) console.log("Values Available:" +val);

//merge two maps
//Spread operator essentially converts a map to an array
let first=new Map([ [1,'One'],[2,'two'],[3,'three'] ]);
let second=new Map([ [1,'uno'],[2,'dos'] ]);
let merged =new Map([...first,...second,[1,'eins']]); //overwrites 1 key by value eins

//has(),delete operation
let hasKey=merged.has(1);
let delKey=merged.delete(1);
if (merged.has(1))
    console.log(merged.get(1));
    console.log("pos2: " +merged.get(2));
//clearing the map
merged.clear();
console.log(merged.size);
 
