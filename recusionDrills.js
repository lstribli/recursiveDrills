


function countSheep(sheep) {
  if (sheep === 0) {
    return;
  }
  console.log('Countsheep: Sheep =', sheep);
  countSheep(sheep - 1);
}
countSheep(3);



//iterative
function powerCalculator(base, exponent) {
  let integer = Math.pow(base, exponent);
  if (integer < 0) {
    return console.log('powerCalculator:', 'exponent should be be >= 0');
  }
  if (exponent === 0) {
    return base;
  }
  console.log('powerCalculator: integer =', integer);
  return integer;
}
powerCalculator(10, 2);



//acutally recursive?
function powerCalculator2(base, exponent) {
  if (exponent < 0) {
    console.log('exponent should be >= 0');
  }
  // base case 
  if (exponent === 0) {
    return 1;
  }
  // recursive case 
  exponent--;
  return base * powerCalculator2(base, exponent);
}
const answer = powerCalculator2(10, 4);
console.log('powerCalculator2:', answer);




function reverseString(string) {
  if (string === '') {
    return '';
  }
  return reverseString(string.substr(1)) + string.charAt(0);
}
const stringYouWant = reverseString('codesfordays');
console.log('reverseString:', stringYouWant);




function trianglularNumber(nth) {
  if (nth <= 1) {
    return nth;
  }
  if (nth === 0) {
    return '';
  }
  return nth + trianglularNumber(nth - 1);
}
const triangle = trianglularNumber(7);
console.log('triangularNumber:', triangle);


// Exercise 5 - String Splitter

// Split a string based upon a separator (similar to String.prototype.split).

// Input: '1/21/2018'
// Output: 1212018 OR ["1", "21", "2018"]
// */
function splitConcat(str, sep) {
  var idx = str.indexOf(sep);
  if (idx === -1) {
    return [str];
    //you don't have to return an array, you can return a string as an array of 
    //character 
    //return str;
  }
  return [str.slice(0, idx)].concat(splitConcat(str.slice(idx + sep.length), sep));

  //****** all these are valid syntax as well
  //return (str.slice(0,idx) + (splitConcat(str.slice(idx + sep.length), sep)))
  //return str.slice(0,idx).concat(splitConcat(str.slice(idx + sep.length), sep))
}

function splitSpread(str, sep) {
  var idx = str.indexOf(sep);
  if (idx === -1) {
    return [str];
  }
  return [str.slice(0, idx), ...(splitSpread(str.slice(idx + sep.length), sep))];
}

console.log(splitConcat('1/21/2018', '/'));
console.log(splitSpread('1/21/2018', '/'));



function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}
const Fnum = fibonacci(9);
console.log('Fibonacci: number = ', Fnum);




function Factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * (Factorial(n - 1));
}
const FactNum = Factorial(5);
console.log('Factorial: Number=', FactNum);


// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it.There are more than one possible exit from the Maze.Write a recursive function that will help you find a possible exit though the maze
// You can use the following as your maze.
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// The Maze is represented as a NM matrix(in the above case, a 5X7 array).The starting point is the top left corner and the exit is indicated by e.For simplicity purpose, use the bottom right corner of the maze as the exit.You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them.These blocked passages are indicated by``.Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.
// For the above maze, a possible exit can be RRDDLLDDRRRRRR
//   * /
const mazeRunner = function (labyrinth, position = 0, row, col, direction = 'S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= labyrinth[0].length || row >= labyrinth.length) {
    return;
  }
  path[position] = direction;
  position++;
  if (labyrinth[row][col] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (labyrinth[row][col] === ' ') {
    // The current cell is free. Mark it as visited
    labyrinth[row][col] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunner(labyrinth, position, row, col - 1, 'L', path); // left
    mazeRunner(labyrinth, position, row - 1, col, 'U', path); // up
    mazeRunner(labyrinth, position, row, col + 1, 'R', path); // right
    mazeRunner(labyrinth, position, row + 1, col, 'D', path); // down
    // Mark back the current cell as free
    //lab[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;
};
const PrintPath = function (path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
};
/*/*=================================================================================
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exits through the Maze. To find all possible exit through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?
Notice that this maze has 3 exits. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:
Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/
const mazeAll = function (labyrinth, position = 0, row, col, direction = 'S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= labyrinth[0].length || row >= labyrinth.length) {
    return;
  }
  path[position] = direction;
  position++;
  if (labyrinth[row][col] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (labyrinth[row][col] === ' ') {
    // The current cell is free. Mark it as visited
    labyrinth[row][col] = 's';
    // Invoke recursion to explore all possible directions
    mazeAll(labyrinth, position, row, col - 1, 'L', path); // left
    mazeAll(labyrinth, position, row - 1, col, 'U', path); // up
    mazeAll(labyrinth, position, row, col + 1, 'R', path); // right
    mazeAll(labyrinth, position, row + 1, col, 'D', path); // down
    // Mark back the current cell as free
    labyrinth[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;
};

// function Anagrams(subject) {
//   //split string into an array
//   const subjectArray = subject.split('');
//   console.log('subjectarray:', subjectArray);

//   //map the array and assign each letter as a prefix
//   const prefixes = [];
//   subjectArray.map(char => prefixes.push(char));
//   console.log('prefixes:', prefixes);

//   //for each prefix, create an array taking the rest of the letters.

//   //doesnt work:
//   // const obj = {};
//   // prefixes.forEach(char => obj.keys.push(char));
//   // console.log(obj);

//   // separate the remaining indexes and randomize them


//   //concat each randomized array and convert back into a string

//   //log the anagrams for each prefix
// }

// const allAnagrams = Anagrams('east');
// console.log('Anagrams:', allAnagrams);

function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// Exercise 11: Organization Chart
// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the hierarchy.
let organization = {
  "Zuckerberg": {
    "Schroepfer": {
      "Bosworth": {
        "Steve": {},
        "Kyle": {},
        "Andra": {}
      },
      "Zhao": {
        "Richie": {},
        "Sofia": {},
        "Jen": {}
      },
      "Badros": {
        "John": {},
        "Mike": {},
        "Pat": {}
      },
      "Parikh": {
        "Zach": {},
        "Ryan": {},
        "Tes": {}
      }
    },
    "Schrage": {
      "VanDyck": {
        "Sabrina": {},
        "Michelle": {},
        "Josh": {}
      },
      "Swain": {
        "Blanch": {},
        "Tom": {},
        "Joe": {}
      },
      "Frankovsky": {
        "Jasee": {},
        "Brian": {},
        "Margaret": {}
      }
    },
    "Sandberg": {
      "Goler": {
        "Eddie": {},
        "Julie": {},
        "Annie": {}
      },
      "Hernandez": {
        "Rowi": {},
        "Inga": {},
        "Morgan": {}
      },
      "Moissinac": {
        "Amy": {},
        "Chuck": {},
        "Vinni": {}
      },
      "Kelley": {
        "Eric": {},
        "Ana": {},
        "Wes": {}
      }
    }
  }
};

function traverseA(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1)
  });
}
//another version of the solution
function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

//Write a recursive function that prints out the binary representation of a given number.
// input: 5
//output: 101

function binaryRep(input) {
  if (input <= 0) {
    return '';
  }
  let binary = Math.floor(input % 2);
  return binaryRep(Math.floor(input / 2)) + binary

}

function main() {
  let base = 10;
  let exponent = 2;
  let exponentNeg = -2;
  let str = 'tauhida'
  let triNum = 5;
  let myString = '03/14/2019';
  let seperator = '/';

  let myMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  let path = [];
  let word = 'east'

  let organization = {
    "Zuckerberg": {
      "Schroepfer": {
        "Bosworth": {
          "Steve": {},
          "Kyle": {},
          "Andra": {}
        },
        "Zhao": {
          "Richie": {},
          "Sofia": {},
          "Jen": {}
        },
        "Badros": {
          "John": {},
          "Mike": {},
          "Pat": {}
        },
        "Parikh": {
          "Zach": {},
          "Ryan": {},
          "Tes": {}
        }
      },
      "Schrage": {
        "VanDyck": {
          "Sabrina": {},
          "Michelle": {},
          "Josh": {}
        },
        "Swain": {
          "Blanch": {},
          "Tom": {},
          "Joe": {}
        },
        "Frankovsky": {
          "Jasee": {},
          "Brian": {},
          "Margaret": {}
        }
      },
      "Sandberg": {
        "Goler": {
          "Eddie": {},
          "Julie": {},
          "Annie": {}
        },
        "Hernandez": {
          "Rowi": {},
          "Inga": {},
          "Morgan": {}
        },
        "Moissinac": {
          "Amy": {},
          "Chuck": {},
          "Vinni": {}
        },
        "Kelley": {
          "Eric": {},
          "Ana": {},
          "Wes": {}
        }
      }
    }
  };
  let num = 25;

  let fibSeq = 7;
  let arr = [];

  let factNum = 4;

  // countSheep(3);
  // console.log(powerCalculatorRec(base, exponent));
  // console.log(powerCalculatorRec(base, exponentNeg));
  // console.log(reverseString(str));
  // console.log(triangle(triNum))

  // console.log(split(myString, seperator))

  // for (let i = 1; i <= fibSeq; i++) {
  //   arr.push(fibonacci(i))
  // }
  // console.log(arr);


  // console.log(factorial(factNum))

  mazeRunner(myMaze, 0, 0, 0, 'S', path);
  mazeAll(myMaze, 0, 0, 0, 'S', path);

  printAnagram(word);

  traverseA(organization);

  console.log(binaryRep(num))

}

main();
