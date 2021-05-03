let startAt = performance.now();

// Here you would execute your crazy good that might at looking long time

for (var i = 0; i < 200; i++) {
  console.log(i);
}

let endAt = performance.now();

console.log(`${endAt - startAt} took milliseconds to execute`);
// result ---> 256.2249999027699 took milliseconds to execute
