const toObject = ["Susan", "Amanda", "Diego", "Jack,", "Elon"];

const objectArray = { ...toObject };

console.log(objectArray);
/*
result 
{
  0: "Susan",
  1: "Amanda",
  2: "Diego",
  3: "Jack",
  4: "Elon"
}




*/
