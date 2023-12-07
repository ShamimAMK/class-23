"use strict";
// const number = [10,20,30,40,50]

// for (const numb of number){
//     console.log(number)
// }

const student = {
  name: "Mim",
  age: 20,
  roll: 100,
};
// for ( item of student){
//     console.log(item);
// }

// Object.key();
const keys = Object.keys(student);
// console.log(keys);

//Object.value()

const value = Object.values(student);
// console.log(value);

//Object.entries()

const entries = Object.entries(student);
// console.log(entries);

//keys
for (const key of keys) {
  console.log(key);
}

//values
for (const val of value) {
  console.log(val);
}

//entries
for (const entr of entries) {
  console.log(entr);
}

// Data structure (array), (Object), (set), (Map) etc.
// set is update version of array.
// map is update version of object.

// //Set
// const mySet = new Set([
//   10, 20, 3, 0, 15, 12, 12, 15, 15, 12, 4, 5, 4, 52, 5, 1,
// ]); // constructor function is a major function which create another function

// // mySet.add(10);
// // mySet.add(20);
// // mySet.add(30);
// // mySet.add(50);
// // mySet.add(60);

// // console.log(mySet);

// const myNumbers = [1, 10, 11, 2, 2, 3, 12, 5, 4, 5, , 8, 7, 4, 5, 6, 9, 8, 5];
// const myUniqueNumbers = new Set(myNumbers);
// console.log(myUniqueNumbers);

// const mySet = new Set([
//   10, 20, 3, 0, 15, 12, 12, 15, 15, 12, 4, 5, 4, 52, 5, 1,
// ]);

// mySet.delete(10);

// console.log(mySet);

// //Rain, Boat & Umbrella

// const manWithBoat = new Set(["Tahia", "Kaushik", "Shamim", "Ariful"]);
// const manWithUmbrella = new Set([
//   "Tahia",
//   "Mamun",
//   "Sharmin",
//   "Ariful",
//   "Apurba",
// ]);

// // find man with both boat & umbrella

// function findmanWithBoth(boat, umbrella) {
//   const manWithBothBU = new Set();

//   //   for (const person of boat) {
//   //     if (umbrella.has(person)) {
//   //       manWithBothBU.add(person);
//   //     }
//   //   }
//   //   return manWithBothBU;
//   // }

//   for (const person of umbrella) {
//     if (boat.has(person)) {
//       manWithBothBU.add(person);
//     }
//   }
//   return manWithBothBU;
// }

// console.log(findmanWithBoth(manWithBoat, manWithUmbrella));

// //find man with only umbrella
// function findManWithOnlyUmbrella(boat, umbrella) {
//   const manWithOnlyUmbrella = new Set();

//   for (const person of umbrella) {
//     if (!boat.has(person)) {
//       manWithOnlyUmbrella.add(person);
//     }
//   }
//   return manWithOnlyUmbrella;
// }
// console.log(findManWithOnlyUmbrella(manWithBoat, manWithUmbrella));

//map
const myMap = new Map([
  ["name", "Mim"],
  ["age", 20],
  ["roll", 100],
  [24, "temp"],
  [true, "isRaining"],
]);

myMap.set("subject", "math");
// console.log(myMap.get(true));

// myMap.delete("age");

// console.log(myMap);

// myMap.clear();
// console.log(myMap);

// for (const entry of myMap) {
//   console.log(entry);
// }

for (const [key, value] of myMap) {
  console.log(key, value);
}
// console.log(myMap);

//Problem2: zoo

const animals = new Map();
// [[tiger]];

const addAnimal = (species) => {
  if (animals.has(species)) {
    const count = animals.get(species);
    animals.set(species, count + 1);
  } else {
    animals.set(species, 1);
  }
};

const removeAnimal = (species) => {
  if (animals.has(species)) {
    let count = animals.get(species);
    animals.set(species, count - 1);
  } else {
    console.log(`"${species}" not available`);
  }
};

addAnimal("tiger");
addAnimal("tiger");
addAnimal("tiger");
addAnimal("lion");
addAnimal("lion");
addAnimal("zebra");
addAnimal("zebra");
addAnimal("monkey");
addAnimal("monkey");
addAnimal("monkey");
removeAnimal("tiger");
removeAnimal("monkey");
removeAnimal("Elephant");

console.log(animals);

//strings
const str = "Hello World";

// console.log(str.length);
// console.log(str[1]);
// console.log(str.charAt(1));
// console.log(str.at(-1));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.replace("World", "Universe"));
// const splittedStr = str.split(" ");
// console.log(splittedStr);

// const splittedStr = str.split("");
// console.log(splittedStr);

//str2
const str2 = "     Hello I'm an empty space           ";
console.log(str2.trim());
// trim is working only beginning and end of the line only
