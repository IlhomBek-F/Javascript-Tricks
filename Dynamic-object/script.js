const dynamic = "hobbies";

const user = {
  name: "Ed",
  email: "example@gmail.com",
  [dynamic]: "coding",
};

console.log(user);

/*
{ name: 'Ed', email: 'example@gmail.com', hobbies: 'coding' }

*/
