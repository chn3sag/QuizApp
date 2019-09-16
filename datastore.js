const DATA = [
    {
        question: "What is the function of Array object that adds and/or removes elements from an array ?",
        options: ["slice", "replace", "splice", "split"],
        answer: "splice"
    },
    {
        question: "Which of the following methods removes the last element from an array and returns that element ? ",
        options: ["pop", "last", "end", "shift"],
        answer: "pop"
    },
    {
        question: "What is the output of \n\t []+\"bar\".split(\"\") ?",
        options: ["[,'b','a','r']", "b,a,r", "undefined", NaN],
        answer: "b,a,r"
    },
    {
        question: "What is the output of \n\t true+false+1 ?",
        options: ["undefined", "1", "2", "NaN"],
        answer: "2"
    },
    {
        question: "Which function is used to copy elements to a different index in an array ?",
        options: ["replace", "repeat", "copyWithin", "fill"],
        answer: "copyWithin"
    },
    {
        question: "What is the output of \n\t 1===true ?",
        options: ["true", "false"],
        answer: "false"
    },
    {
        question: "How should you declare a variable which is not expected to change ?",
        options: ["let", "var", "const", "no keyword"],
        answer: "const"
    },
    {
        question: "How do you remove leading and trailing whitespaces from a string ? ",
        options: ["remove", "trim", "replace", "split"],
        answer: "trim"
    },
    {
        question: "What function is used to check if any of the array values pass a test ?",
        options: ["some", "any", "every", "all"],
        answer: "some"
    },
    {
        question: " What is the output of NaN===NaN ?",
        options: ["true", "false"],
        answer: "false"
    }
];

let score = 0;
let numQuestion = 0;