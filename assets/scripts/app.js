//  import apiKey from "./util";
//  import {apiKey} from "./util";
//  import { apiKey, abc } from "./util";
//  import { apiKey, abc as content } from "./util";
//  import * as util from "./util";

// console.log(util);
// console.log(apiKey, content);

// const userMessage = "Hello World";

// console.log(userMessage);
// console.log(userMessage);

// function creatingGreetings(userName, message = "Hello") {
// console.log(userName);
// console.log(message);
//  return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = creatingGreetings("Max");
// console.log(greeting1);

//  const greeting2 = creatingGreetings("Manuel", "Hello, what`s up?");
// console.log(greeting2);

// export default (userName, message) => {
//    console.log(userName, message);
//    };

//  export default function (userName, message) {
//    console.log(userName, message);
//  }

//  const user = {
//    name: "Carlos",
//    age: "21",
//    greet() {
//      console.log("And his age is");
//      console.log(this.age);
//    }
//  };

//  console.log(user.name);
//  user.greet();

//  class User {
//    constructor(name, age) {
//      this.name = name;
//      this.age = age;
//    }
//    greet() {
//      console.log("hi");
//    }
//  }

//  const user1 = new User("Manuel", 35);
//  console.log(user1);
//   user.greet();

// const hobbies = ["Videogames", "Programming", "Working"];
// console.log(hobbies);

// hobbies.push("Reading");
// console.log(hobbies);

// const index = hobbies.findIndex((index) => index === "Programming");

// console.log(index);

// const editedHobbies = hobbies.map((index) => ({ Object: index }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Lucas", "Vinicius"];
// console.log(firstName, lastName);

// const {name, age} = {
//   name: "Lucas",
//   age: 20
// }
// console.log(name, age + " y/o");

// const hobbies1 = ["Reading"];
// const hobbies2 = ["Sleeping", "Programming"];

// const editedHobbies = [...hobbies1, ...hobbies2];
// console.log(editedHobbies);

// console.log(hobbies1, hobbies2);

// const password = prompt();

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Acess not granted");
// }

// for (const hobby of editedHobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();
// function handleTimeout() {
//   console.log("Time out!");
// }

// const handleTimeout2 = () => {
//   console.log("Time out...again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => {
//   console.log("Hi");
// });

function init() {
  function greet() {
    console.log("Hi");
  }
  greet();
}

init();
