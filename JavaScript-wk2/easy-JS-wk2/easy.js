//easy

// let students = [];
// students [0]="Hello, my name is Judith Espinoza and I'm 21 years old.";
// students [1]="Hi, my name is Bobby Bob and I'm 20 years old.";
// students [2]="Sup, my name is James Bond and I'm 18 years old.";
// console.log(students);
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[0]);



let firstName, lastName, age;
firstName = ['Judith', 'Bobby', 'James'];
lastName = ['Espinoza', 'Bob', 'Bond'];
age = ['21','20','18'];
let answer = (firstName, lastName, age) => `Hi, my name is ${firstName} ${lastName} and I'm ${age} years old.`;
console.log(answer(firstName[1],lastName[1],age[1]));