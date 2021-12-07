// function sum(...values) {
//   console.log(values);
// }
// sum(1);
// sum(1, 2);
// sum(1, 2, 3);
// sum(1, 2, 3, 4);


// function sum(...values) {
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
//       sum += values[i];
//   }

//   return sum;
// }
// console.log(sum(1)); //1
// console.log(sum(1, 2)); //3
// console.log(sum(1, 2, 3)); // 5
// console.log(sum(1, 2, 3, 4)); //10

// https://www.codegrepper.com/code-examples/javascript/higher-order+functions+javascript+w3schools

function circleLine(numline){ //คำนวณเส้นรอบวง เมื่อ num คือรัศมี
  return numline*6.28;
}
function circleArea(numarea){ //คำนวณพื้นที่ เมื่อ num คือเส้นรัศมี
  return numarea*numarea*3.14;
}
function circle(num,cfunction){ //ใช้งานสอง function ด้านบน
return cfunction(num)
}

export {circleLine, circleArea, circle}
