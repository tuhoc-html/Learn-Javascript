console.log("This is lesson 13 of series 13 from chapter 4");

const sum = (a, b, c) => {
  if (typeof a !== "number") {
    console.log("Empty");
    return 0;
  }
  return a + b + c;
  console.log("This line will never be executed");
};

console.log(sum("zoe", 10, 15));
