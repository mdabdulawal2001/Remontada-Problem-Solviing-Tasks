// 01. ‍Solve Me First

function solveMeFirst(a, b) {
  return a + b;
}

// 02. Multiply
var multiply = function (a, b) {
  return a * b;
};

// 03. Even or Odd
var evenOrOdd = function (number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative

// var makeNegative = function(number) {
//     return number <= 0 ? number : -number;
// };

var makeNegative = function (number) {
  return -Math.abs(number);
};

// 05. Opposite Number
var opposite = function (number) {
  return -number;
};

// 06. Simple Array Sum

var simpleArraySum = function (ar) {
  return ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
};

// 07. sleepIn

var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

// 08. monkeyTrouble

var monkeyTrouble = function (aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile) ? true : false;
};

// 09. sumDouble

var sumDouble = function (a, b) {
  return a === b ? (a + b) * 2 : a + b;
};

//  10. diff21

var diff21 = function (n) {
  return n <= 21 ? 21 - n : (n - 21) * 2;
};

// 11. parrotTrouble

var parrotTrouble = function (talking, hour) {
  // if(talking && hour < 7 || talking && hour > 20){
  //   return true
  // }
  // return false;

  return talking && (hour < 7 || hour > 20);
};

//  12. makes10

var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred
// Return true if n is within 10 of 100 or within 10 of 200.

var nearHundred = function (n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
};

//  14. posNeg
// Return true when one number is positive and the other is negative. If negative is true, both must be negative.

var posNeg = function (a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

// 15. notString
// Add "not " to the beginning of a string unless it already starts with "not".

var notString = function (str) {
  const words = str.trim().split(/\s+/);
  console.log(words);

  if (words[0] === "not") {
    return str;
  }

  return "not " + str;
};

// 16. Compare the Triplets
// Compare two three-element score arrays and return how many points each person earns.

var compareTriplets = function (a, b) {
  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (a[i] < b[i]) {
      bPoints++;
    }
  }

  return [aPoints, bPoints];
};

// 17. A Very Big Sum
// Return the sum of all values in an integer array.

var aVeryBigSum = function (ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};

// 18. Staircase
// Create a right-aligned staircase of height n using # characters.

var staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

// 19. Grading Students
// Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.

var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    const nextMultiple = Math.ceil(grade / 5) * 5;

    if (nextMultiple - grade < 3) {
      return nextMultiple;
    }

    return grade;
  });
};

// 20. Time Conversion
// Convert a 12-hour AM/PM time string into 24-hour format.

var timeConversion = function (s) {
  const period = s.slice(-2);
  let hour = Number(s.slice(0, 2));
  const rest = s.slice(2, 8);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  return String(hour).padStart(2, "0") + rest;
};


var repeatStr = function (n, s) {
  return s.repeat(n);
};


// 22. Reversed Strings


var solution = function (str) {
  return str.split("").reverse().join("");
};


// 23. Sum of Positive

var positiveSum = function (arr) {
  return arr.reduce((sum, number) => {
    if (number > 0) {
      return sum + number;
    }
    return sum;
  }, 0);
};


// 24. Grasshopper - Summation

var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};


// 25. Convert a Boolean to a String

var booleanToString = function (b) {
  const booleanToStr = b.toString();
  return `"${booleanToStr}"`;
};
