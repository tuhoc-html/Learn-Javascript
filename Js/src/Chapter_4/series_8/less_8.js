console.log("This is lesson 8 of series 8 from chapter 4");

// score: Giỏi, khá, trung bình, yếu

const score = 4;
switch (true) {
  case score >= 8 && score <= 10: // true === true
    console.log("Giỏi");
    break;
  case score >= 6 && score < 8:
    console.log("Khá");
    break;
  case score >= 4 && score < 6:
    console.log("Trung bình");
    break;

  default:
    console.log("Yếu");
}
