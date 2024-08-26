let questions = [
    {
        numb: 1,
        question: "What is the correct syntax for referring to an external script called script.js?",
        answer: "script src= script.js",
        options: [
            "script href=script.js",
            "script src= script.js",
            "script ref=script.js",
            "script link=script.js"
        ]
    },

    {
        numb: 2,
        question: "Which method is used to display a message in the console?",
        answer: "console.log()",
        options: [
            "alert()",
            "console.log()",
            "print()",
            "log.console()"
        ]
    },

    {
        numb: 3,
        question: "What is the correct way to declare a variable in JavaScript?",
        answer: "var x = 5;",
        options: [
            "var x = 5;",
            "variable x = 5;",
            "int x = 5;",
            "let x := 5"
        ]
    },

    {
        numb: 4,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction() {}",
        options: [
            "function myFunction() {}",
            "create function myFunction() {}",
            "def myFunction() {}",
            "function: myFunction() {}"
        ]
    },

    {
        numb: 5,
        question: "What is the output of typeof hello",
        answer: "string",
        options: [
            "string",
            "text",
            "object",
            "undefined"
        ]
    },

    {
        numb: 6,
        question: "How do you add a comment in JavaScript?",
        answer: "//",
        options: [
            "comment",
            "/*  */",
            "//",
            " # "
        ]
    },

    {
        numb: 7,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "=",
            "==",
            "===",
            ":="
        ]
    },
    {
        numb: 8,
        question: "What will `console.log(5 + '5')` display?",
        answer: "55",
        options: [
            "10",
            "55",
            "Error",
            "NaN"
        ]
    },

    {
        numb: 9,
        question: "Which of the following is a JavaScript data type?",
        answer: "String",
        options: [
            "String",
            "Interger",
            "Float",
            "Number"
        ]
    },

    {
        numb: 10,
        question: "How do you write an if statement in JavaScript?",
        answer: "if (condition) { // code }",
        options: [
            "if (condition) { // code }",
            "if condition { // code }",
            "if (condition) // code",
            "if (condition) then { // code }"
        ]
    },

    {
        numb: 11,
        question: "Which method removes the last element from an array?",
        answer: "pop()",
        options: [
            "pop()",
            "shift()",
            "slice()",
            "splice()"
        ]
    },

    {
        numb: 12,
        question: "What will `3 == '3'` return?",
        answer: "true",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },

    {
        numb: 13,
        question: "What is the result of `typeof NaN`?",
        answer: "number",
        options: [
            "number",
            "NaN",
            "undefined",
            "object"
        ]
    },

    {
        numb: 14,
        question: "Which of the following is not a valid variable name in JavaScript?",
        answer: "myVar",
        options: [
            "myVar",
            "_myVar`",
            "2myVar",
            "$myVar"
        ]
    },

    {
        numb: 15,
        question: "What does `console.log(!!false)` output?",
        answer: "true",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },

    {
        numb: 16,
        question: "How can you convert a string to a number in JavaScript?",
        answer: "parseInt()",
        options: [
            "parseInt()",
            "toNumber()",
            "convert()`",
            "Number()"
        ]
    },

    {
        numb: 17,
        question: "Which keyword is used to create a constant variable in JavaScript?",
        answer: "const",
        options: [
            "let",
            "var",
            "define",
            "const"
        ]
    },

    {
        numb: 18,
        question: "What does the `Array.isArray([])` method return?",
        answer: "true",
        options: [
            "NaN",
            "false",
            "true",
            "undefined"
        ]
    },

    {
        numb: 19,
        question: "How do you access the first element in an array named `arr`?",
        answer: "arr[0]",
        options: [
            "arr.first()",
            "arr.get(1)",
            "arr.firstElement()",
            "arr[0]"
        ]
    },

    {
        numb: 20,
        question: "What is the purpose of the `return` statement in a function?",
        answer: "To return a value from the function",
        options: [
            "To exit the function",
            "To return a value from the function",
            "To create a new function",
            "To call another function"
        ]
    },

    {
        numb: 21,
        question: "Which method adds one or more elements to the end of an array?",
        answer: "push()",
        options: [
            "unshift()",
            "push()",
            "shift()",
            "pop()"
        ]
    },

    {
        numb: 22,
        question: "What is the output of `5 == '5'`?",
        answer: "true",
        options: [
            "NaN",
            "false",
            "undefined",
            "true"
        ]
    },

    {
        numb: 23,
        question: "How do you declare a JavaScript object?",
        answer: "var obj = {};",
        options: [
            "var obj = () => {};",
            "var obj = [];",
            "var obj = {};",
            "var obj = `object`"
        ]
    },

    {
        numb: 24,
        question: "What will `console.log(2 + '2')` display?",
        answer: "22",
        options: [
            "4",
            "NaN",
            "Error",
            "22"
        ]
    },

    {
        numb: 25,
        question: "Which of the following will not create a new JavaScript object?",
        answer: "Object.new()",
        options: [
            "new Object()",
            "{}",
            "Object.create()",
            "Object.new()"
        ]
    },

    {
        numb: 26,
        question: "What is the result of `3 * '3'`?",
        answer: "script src= script.js",
        options: [
            "Error",
            "33",
            "9",
            "NaN"
        ]
    },

    {
        numb: 27,
        question: "How do you check if a variable `x` is an integer?",
        answer: "Number.isInteger(x)",
        options: [
            "Number.isInteger(x)",
            "isInteger(x)",
            "typeof x === 'integer",
            "x.isInteger()"
        ]
    },

    {
        numb: 28,
        question: "Which of the following is used to handle exceptions in JavaScript?",
        answer: "try...catch",
        options: [
            "error...catch",
            "throw...catch",
            "try...catch",
            "exception...handle"
        ]
    },

    {
        numb: 29,
        question: "How do you concatenate two strings in JavaScript?",
        answer: "str1 + str2",
        options: [
            "str1.append(str2)",
            "concat(str1, str2)",
            "str1.merge(str2)",
            "str1 + str2"
        ]
    },

    {
        numb: 30,
        question: "What is the purpose of the `typeof` operator?",
        answer: "To determine the data type of a variable",
        options: [
            "To determine the data type of a variables",
            "To convert a variable to a different type",
            "To create a new variable type",
            "To test if a variable is defined"
        ]
    },

    {
        numb: 31,
        question: "How do you access an object's property named `name`?",
        answer: "obj.name",
        options: [
            "obj[name]",
            "obj.name",
            "obj->name",
            "obj.get('name')"
        ]
    },

    {
        numb: 32,
        question: "Which of the following is used to loop through elements of an array?",
        answer: "for...of",
        options: [
            "for...of",
            "for...in",
            "while",
            "do...while"
        ]
    },

    {
        numb: 33,
        question: "What does `parseFloat('3.14')` return?",
        answer: "3.14",
        options: [
            "3",
            "3.14",
            "NaN",
            "`'3.14'`"
        ]
    },

    {
        numb: 34,
        question: "How do you convert a number to a string in JavaScript?",
        answer: "num.toString()",
        options: [
            "String(num)",
            "num.toStr()",
            "num.toString()",
            "convert(num)"
        ]
    },

    {
        numb: 35,
        question: "What will `console.log(10 / '2')` output?",
        answer: "5",
        options: [
            "5",
            "102",
            "NaN",
            "Error"
        ]
    },

    {
        numb: 36,
        question: "Which function can be used to get the length of an array?",
        answer: "arr.length",
        options: [
            "arr.length",
            "arr.size()",
            "arr.getLength()",
            "arr.count()"
        ]
    },

    {
        numb: 37,
        question: "How do you add a key-value pair to an object?",
        answer: "obj.key = value;",
        options: [
            "obj.key = value;",
            "obj.add(key, value);",
            "obj.set(key, value);",
            "obj.put(key, value);"
        ]
    },

    {
        numb: 38,
        question: "What is the default value of an uninitialized variable?",
        answer: "undefined",
        options: [
            "null",
            "NaN",
            "0",
            "undefined"
        ]
    },

    {
        numb: 39,
        question: "Which statement will stop a loop?",
        answer: "break",
        options: [
            "break",
            "stop",
            "exit",
            "end"
        ]
    },

    {
        numb: 40,
        question: "How do you compare two values for equality, including type?",
        answer: "===",
        options: [
            "===",
            "==",
            "equal",
            "!="
        ]
    },

    {
        numb: 41,
        question: "What does `Math.round(2.5)` return?",
        answer: "3",
        options: [
            "3",
            "2",
            "4",
            "2.5"
        ]
    },

    {
        numb: 42,
        question: "Which keyword is used to create a new object?",
        answer: "new",
        options: [
            "new",
            "create",
            "object",
            "make"
        ]
    },

    {
        numb: 43,
        question: "How do you handle asynchronous code in JavaScript?",
        answer: "async/await",
        options: [
            "async/await",
            "defer/await",
            "callback/await",
            "promise/async"
        ]
    },

    {
        numb: 44,
        question: "What is the output of `true + 1`?",
        answer: "2",
        options: [
            "2",
            "true1",
            "undefined",
            "NaN"
        ]
    },

    {
        numb: 45,
        question: "What will `console.log('' + 1 + 0)` display?",
        answer: "10",
        options: [
            "10",
            "01",
            "10",
            "NaN"
        ]
    },

    {
        numb: 46,
        question: "Which method converts a string into an array of characters?",
        answer: "spli('')",
        options: [
            "split('')",
            "toArray()",
            "charArray()",
            "convert()"
        ]
    },

    {
        numb: 47,
        question: "What is the result of `0 == false`?",
        answer: "true",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },

    {
        numb: 48,
        question: "Which function is used to remove whitespace from the beginning and end of a string?",
        answer: "trim()",
        options: [
            "trim()",
            "strip()",
            "clean()",
            "remove()"
        ]
    },

    {
        numb: 49,
        question: "How do you declare a constant variable in JavaScript?",
        answer: "const",
        options: [
            "const",
            "var",
            "let",
            "static"
        ]
    },

    {
        numb: 50,
        question: "What will `console.log(5 + 2 + '3')` output?",
        answer: "73",
        options: [
            "73",
            "53",
            "Error",
            "NaN"
        ]
    }
];