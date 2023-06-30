// https://www.codewars.com/kata/55225023e1be1ec8bc000390
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

function greet(name){
    if(name === "Johnny") return "Hello, my love!";
    else return "Hello, " + name + "!";
  }

//alternative
function greet(name){
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"
  }  