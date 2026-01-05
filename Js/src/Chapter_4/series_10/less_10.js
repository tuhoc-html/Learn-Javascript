console.log("This is lesson 10 of series 10 from chapter 4");

// break
for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

console.log("Loop ended.");

// continue
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

