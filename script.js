// JavaSript Object
// Array Example
const userArray = ["Anindita", "Mondol", 2012, "Four"]; //NB: We use [] brackets in Array. Show data using "Index Number"
console.log(userArray);
console.log(userArray[3]);

//Object Example : //NB: We use {} brackets in Object. Show data using "Key" like - firstName.
const userObject = {
  firstName: "Anindita",
  lastName: "Mondol",
  birthYear: 2012,
  className: "Four",
};
console.log(userObject);

// Show data using bracket notetion.
console.log(userObject["firstName"]);

// Show data using dot notetion.
console.log(userObject.className); //we use this method.
console.log(userObject.birthYear);

// Add new item in a Object.
//Example 1
userObject.hobby = "Eating";
console.log(userObject);
console.log(userObject.hobby);

//Example 2
userObject["birthPlace"] = "Bogura";
console.log(userObject["birthPlace"]); //Retrive newly added data.

// Another object example  NB: Retrive Boolean data and creat a function
// const userObjectTwo = {
//   firstName: "Ponkoj",
//   lastName: "Mondol",
//   isJob: true, // Boolean type data.
//   calculateAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// console.log(userObjectTwo.isJob); //retrive boolean
// console.log(userObjectTwo.calculateAge(1984)); //retrive function under object
// console.log(userObjectTwo["calculateAge"](1985)); //using bracket method

// this keyword
const userObjectTwo = {
  firstName: "Ponkoj",
  lastName: "Mondol",
  birthYear: 1984,
  isJob: true, // Boolean type data.
  calculateAge: function () {
    return 2022 - this.birthYear; // we can use "this", replace of  variable name "userObjectTwo".
  },

  // Make a user details function

  userDetail: function () {
    return `This is user ${this.firstName} ${this.lastName} born in the year ${this.birthYear}.`;
  },
};
console.log(userObjectTwo.calculateAge());
console.log(userObjectTwo.userDetail());

// JavaScript Loop
// For Loop (Nomally always go forword position)

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

//Example 1
for (let task = 1; task <= 8; task++) {
  console.log(`Task ${task}`);
}
/* for loop has 3 part. 
1)  start (let task = 1)
2) Condition (task <= 8)
3) Work (task++)
*/

// Example 2
for (let i = 1; i <= 7; i++) {
  console.log(`Day ${i}`);
}

// While loop  (NB)- Almost Same work as for loop
// Example 1
let work = 1;
while (work <= 3) {
  console.log(`Working Day ${work}`);
  work++;
}
/*
While loop also has 3 paet
1) Variable first (let work = 1)
2) While Condition "while (work <= 3)"
3) Incriment (work++)
*/

//Example 2
let j = 1;
while (j <= 3) {
  console.log(`Good Morning ${j}`);
  j++;
}

// Reallife example of for loop.
// Array
const newArray = [
  "Data 1",
  "Data 2",
  "Data 3",
  "Data 4",
  "Data 5",
  "Data 6",
  "Data 7",
  "Data 8",
];
console.log(newArray);

for (k = 0; k <= 4; k++) {
  console.log(newArray[k]);
} // Here show 5 data

for (l = 0; l < newArray.length; l++) {
  console.log(newArray[l]);
} // Here show all Array data.

// For Loop (Retrive data in Reverse position)
for (let m = newArray.length - 1; m >= 0; m--) {
  console.log(newArray[m]);
}

// loop break
for (let n = 0; n < newArray.length; n++) {
  if (n == 4) break;
  console.log(newArray[n]);
}

// loop continue
for (let p = 0; p < newArray.length; p++) {
  if (p == 4) continue;
  console.log(newArray[p]);
}

// Array
const newArrayTwo = [
  "Data 1",
  "Data 2",
  "Data 3",
  "Data 4",
  "Data 5",
  "Data 6",
  "Data 7",
  "Data 8",
];
console.log(newArrayTwo);

// indexOf  (Nb- Use  To know a patricular  Array data index
console.log(newArrayTwo.indexOf("Data 7")); //return 6
console.log(newArrayTwo.indexOf("Data 1")); //return 0
console.log(newArrayTwo.indexOf("Data 9")); //return -1 because the absence of the index.

// includes (Nb- use to return boolean data into an Array if data presune or not)

console.log(newArrayTwo.includes("Data 3")); //return true because data present

console.log(newArrayTwo.includes("Data 9")); //return false because of data absent.
