const storedQuestions = [
  {
    question: "MS-Word is an example of",
    answers: {
      1: "An operating system",
      2: "Application software",
      3: "A processing device",
      4: "An input device",
    },
    correctAnswer: 2,
  },
  {
    question: "Ctrl, Shift and Alt are called .......... keys.",
    answers: {
      1: "modifier",
      2: "function",
      3: "adjustment",
      4: "alphanumeric",
    },
    correctAnswer: 1,
  },
  {
    question: "What color does yellow and green make?",
    answers: {
      1: "Lime",
      2: "Maroon",
      3: "Ocean mist",
      4: "Tangerine",
    },
    correctAnswer: 1,
  },
  {
    question: "A computer cannot boot if it does not have the _____",
    answers: {
      1: "Compiler",
      2: "Loader",
      3: "Operating system",
      4: " Assembler",
    },
    correctAnswer: 3,
  },
  {
    question:
      "________ is the process of dividing the disk into tracks and sectors",
    answers: {
      1: "Tracking",
      2: "Formatting",
      3: "Crashing",
      4: "Allotting",
    },
    correctAnswer: 2,
  },
  {
    question: "Javascript is an _______ language?",
    answers: {
      1: "Object-Oriented",
      2: "Object-based",
      3: "Procedural",
      4: "None of the Above",
    },
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
      1: "var",
      2: "let",
      3: "Both of the above",
      4: "None",
    },
    correctAnswer: 3,
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do",
    answers: {
      1: "Throw error",
      2: "Ignore it ",
      3: "Gives a Warning",
      4: "None of the above",
    },
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript? ",
    answers: {
      1: "document.write()",
      2: "console.log()",
      3: "window.alert()",
      4: "All of the above",
    },
    correctAnswer: 4,
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: {
      1: "var",
      2: "const",
      3: "let",
      4: "constant",
    },
    correctAnswer: 2,
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done",
    answers: {
      1: "Both data type and results are compared",
      2: "Only the datatype is compared",
      3: "only the value of the experession is compared",
      4: "None of the above",
    },
    correctAnswer: 1,
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    answers: {
      1: "in",
      2: "is in",
      3: "exits",
      4: "lies",
    },
    correctAnswer: 1,
  },
  {
    question: "What is the use of the <noscript> tag in Javascript?",
    answers: {
      1: "The contents are displayed by non-JS based browers",
      2: "CLear all cache",
      3: "Both A and B",
      4: "NOne of the above",
    },
    correctAnswer: 1,
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is",
    answers: {
      1: "Boolean",
      2: "Object",
      3: "Undefined",
      4: "Integer",
    },
    correctAnswer: 2,
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    answers: {
      1: "It will debug all the errors",
      2: "it acts as breakpoint in ap rogram",
      3: "it will debug error in the current statment if any",
      4: "All of the above",
    },
    correctAnswer: 2,
  },
  {
    question: "What does the ‘toLocateString()’ method do in JS",
    answers: {
      1: "Returns a localised object representation",
      2: "Returns a parsed string",
      3: "Reutrns a localzied string represtation of an object",
      4: "None of the above",
    },
    correctAnswer: 3,
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: {
      1: "stringify()",
      2: "parse()",
      3: "covert()",
      4: "None of the above",
    },
    correctAnswer: 1,
  },
  {
    question: "Which of the following are closures in Javascript?",
    answers: {
      1: "Variables",
      2: "Functions",
      3: "Objects",
      4: "All of the above",
    },
    correctAnswer: 4,
  },
  {
    question:
      "What keyword is used to declare an asynchronous function in Javascript?",
    answers: {
      1: "async",
      2: "await",
      3: "setTimeOut",
      4: "None of the above",
    },
    correctAnswer: 1,
  },
  {
    question:
      "How are objects compared when they are checked with the strict equality operator?",
    answers: {
      1: "The content of the objects is compared",
      2: "Their refernces are compared",
      3: "Both A and B",
      4: "None of the above",
    },
    correctAnswer: 2,
  },
];
localStorage.setItem("questions", JSON.stringify(storedQuestions));
