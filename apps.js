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

//Rain, Boat & Umbrella

const manWithBoat = new Set(["Tahia", "Kaushik", "Shamim", "Ariful"]);
const manWithUmbrella = new Set([
  "Tahia",
  "Mamun",
  "Sharmin",
  "Ariful",
  "Apurba",
]);

// find man with both boat & umbrella

function findmanWithBoth(boat, umbrella) {
  const manWithBothBU = new Set();

  //   for (const person of boat) {
  //     if (umbrella.has(person)) {
  //       manWithBothBU.add(person);
  //     }
  //   }
  //   return manWithBothBU;
  // }

  for (const person of umbrella) {
    if (boat.has(person)) {
      manWithBothBU.add(person);
    }
  }
  return manWithBothBU;
}

console.log(findmanWithBoth(manWithBoat, manWithUmbrella));

//find man with only umbrella
function findManWithOnlyUmrella(boat, umbrella) {
  const manWithOnlyUmbrella = new Set();
}

console.log(findManWithOnlyUmrella(manWithBoat, manWithUmbrella));
