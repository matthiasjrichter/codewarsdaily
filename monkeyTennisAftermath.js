// https://www.codewars.com/kata/5a0c5b3206d5b696940000b8
//
// You are Chief Commissioning Editor at a broadcaster who recently approved the production of a televisual sports extravaganza, ‘Monkey Tennis’.
//
// Broadcasting from Wimbledon has just finished and it did not go well. Adherence to the rules of the game was minimal and, in essence, you just spent 45 minutes watching a band of chimps running amuck on a tennis court in front of a live studio audience. Now you are left with a detritus; there are tennis balls and banana peels everywhere!
//
// You will receive an array of tennis balls and banana peels, which will each be represented by their weight. Tennis balls weigh exactly 58 grams, and banana peels weigh 60 grams upwards.
//
// Your job is to gather up just the tennis balls and return them in a sack. The sack will be represented by an object that has a 'weight' property, the value of which should be equal to the combined weight of all tennis balls in the array. If the array contains no tennis balls, then the weight value of the returned sack object should be 0.
//
// function ballCollector(detritus) {
//
// }


//map() and create object variable
function ballCollector(detritus) {
  let balls = { weight: 0 };
  detritus.map((e) => {
    if (e === 58) balls.weight += e;
  });
  return balls;
}

//return object without declaring
function ballCollector(detritus) {
  let ballsweight = 0;
  detritus.map((e) => {
    if (e === 58) ballsweight += e;
  });
  return { weight: ballsweight };
}

//reduce()
function ballCollector(detritus) {
  let ballsweight = detritus.reduce((a, c) => a + (c === 58 ? c : 0), 0);
  return { weight: ballsweight };
}

//one line reduce() for fun
const ballCollector = (detritus) => ({ weight: detritus.reduce((a, c) => a + (c === 58 ? c : 0), 0) });

//test
ballCollector([58, 68, 62, 69, 58]); // { weight: 116 }
