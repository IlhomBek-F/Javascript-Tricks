const users = [
  "Ed",
  "traversy daddy",
  "the unemployed tech lead",
  "Anna",
  "John dough",
  "Anna",
];

const unique = Array.from(new Set(users));

console.log(unique);
/* result -->
[
  "Ed",
  "traversy daddy",
  "the unemployed tech lead",
  "Anna",
  "John dough",
  
];

*/
