// https://www.codewars.com/kata/57e8f757085f7c7d6300009a
//
// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.
//
// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.
//
// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.
//
// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.
//
// Given a seat number, your task is to return the seat location in the following format:
//
// '2B' would return 'Front-Left'.
//
// If the number is over 60, or the letter is not valid, return 'No Seat!!'.
//
// function planeSeat(a){
//
// }

function planeSeat(a) {
  let num = a.match(/[0-9]/g).join("");
  let char = a.match(/[a-z]/gi).join("");
  let x = "";
  let y = "";

  if (num > 60) return "No Seat!!";
  if (num < 21) y = "Front-";
  if (num > 20 && num < 41) y = "Middle-";
  if (num > 40) y = "Back-";

  if (!/[abcdefghk]/i.test(char)) return "No Seat!!";
  if (/[abc]/i.test(char)) x = "Left";
  if (/[def]/i.test(char)) x = "Middle";
  if (/[ghk]/i.test(char)) x = "Right";
  
  return y + x;
}

//test
planeSeat("20B"); // 'Front-Left'
