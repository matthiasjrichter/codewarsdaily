// https://www.codewars.com/kata/57f75cc397d62fc93d000059
//
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:
//
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
// function calc(x){
//
// }

function calc(x) {
  let total1 = [...x].map((char) => char.charCodeAt(0)).join("");
  let total2 = total1.replace(/7/g, "1");
  let sumTotal1 = [...total1].reduce((a, c) => a + +c, 0);
  let sumTotal2 = [...total2].reduce((a, c) => a + +c, 0);
  return sumTotal1 - sumTotal2;
}

//test
calc("ABC"); //6
