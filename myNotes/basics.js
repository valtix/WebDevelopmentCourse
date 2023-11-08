                                // Basic function
function sum(x, y) {
    return x + y;
}

// The return keyword will also quit/exit the function.
function sum(x, y) {
    return x + y;
    console.log("Hello World"); // this will NEVER run
}


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                                // STRINGS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// String Property                                
let text = "Hello World";   // notice that with properties you do not use closed parenthesis!
text.length; // 11


                // Basic String Methods

// Convert all to lowercase                
"BLUE".toLowerCase(); // "blue";


// Convert all to uppercase
"red".toUpperCase(); // "RED";


                // Character Access

const language = "JavaScript";
console.log(language[1]); // a


const language = "JavaScript";
language.at(0); // "J"
language.at(1); // "a"
language.at(-1); // "t"
language.at(-2); // "p"


                // Substrings
// A substring is a part or a portion of a string. For example, "rain" is 
// a substring of the string "brain" because you can get "rain" 
// by taking the last 4 characters.

const language = "JavaScript";
language.substring(1, 4); //"ava"


// Index end is optional. In this case we ommit it and
// the default was to grab all strings till the end.
language.substring(4); //"Script"   



                // Plus Operator
// It is used to concatenate 2 strings together, 
// which means merging them together into 1 string.

"Hello" + "World" //"HelloWorld"

let prefix = "Mrs.";
let name = "Sam";
let string = prefix + " " + name; // "Mrs. Sam"


let name = "Sam";

// the "+=" operator is the equivalent of 
// name = name + "Blue";
name += " Blue";    
console.log(name); // "Sam Blue"




                // Template Strings
// They start and end with a backtick character. They support
// interpolation and other nifty features.

    // Multiline Strings
let text = `This is a multiline
string that
just works!`


    // Interpolation
let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                                // NUMBERS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                            
// Integers and decimals are all considered to be numbers in JS.

// You can represent larger numbers clearer, if you wish, 
// with the numeric separator (_). For example:

let nb = 1_000; // equivalent to 1000;


    // Converting Number to String

let answer = 42;
answer.toString(); //"42"


    // Converting String to Number

// The first parameter is the string that you'd like to convert into a number. 
// The second argument is the radix (base number) that will be used in the conversion.
let str = "42";
Number.parseInt(str, 10); //42


// The Number.parseInt() method will try to convert the string it receives into a number. 
// As you can see below, it most often works when the string starts with a number and ends 
// with non-numeric values:

Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5


    // Division remainder
8 % 2; // Division remainder is 0
7 % 2; // Division remainder is 1 


    // Number Methods
Math.round(2.6); // 3
Math.floor(2.6); // 2
Math.ceil(2.6); // 3




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                                // VARIABLES
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// Variables defined with let, can be re-assigned later on:
let language = "C++";
language = "JavaScript";


// another example with numbers:
let sum = 0;
sum += 1;


// Variables defined with const cannot be re-assigned. 
// This means you can use the = sign only once when defining the variable. 
// Here's an example:
const language = "C++"; // Cannot be re-assigned anymore
console.log(language); // "C++"

language = "Python" // ❌ Type error: this will break your script 


// let vs const
// How do you decide if you're going to use let or const? The general rule is easy. 
// Always go with const, until you realize that you need to be able to re-assign 
// the variable later on, then switch it to let.

// Variables defined with let and const are "block scoped"; which are only accessible 
// within a specific block of code. 




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                                // CONDITIONS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
                

// Conditions in JavaScript have the following blueprint:
if (condition) {
    //do something
}

// Example:
const grade = 15;

if (grade >= 10) {
    console.log("Passing grade");
}


// you can also add an else block for all other cases:
const grade = 3;

if (grade >= 10) {
    console.log("Passing grade");
} else {
    console.log("Failing grade");
}

// Several conditions can be checked sequentially using else if. For example:
const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}


// Another example:
function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Alternative method
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}


```Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
Note that the age is provided by the user in a text box (which you can try in the browser tab).
However, when the text box is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.```
function getNextAge(age) {
    if (age == "") {
        return 0;
    } else {
        Number.parseInt(age, 10);
        return age += 1;
    }
}



```Complete the function getDescription such that it returns the first 10 characters of 
the text parameter it receives followed by an ellipsis. An ellipsis is the dot character 
written 3 times: ... However, whenever the text is 10 characters or less, the ellipsis 
should not be added because the text is not being trimmed! There are multiple ways to 
solve this challenge. Take your time and make as many mistakes as possible ;) And make 
sure to try it in the browser tab.```

function getDescription(text) {
    if (text.length <= 10) {
        return text;
    }
    else {
        let trimmedText;
        trimmedText = text.slice(0,10);
        return trimmedText + "..."
    }
}



// Whenever you're returning a boolean (true or false), it's quite redundant to use if and else. 
// Here's an example:
function isPassing(grade) {
    if (grade >= 10) {
        return true;
    } else {
        return false;
    }
}

// This is redundant because grade >= 10 on its own, evaluates to true or false depending on the grade. 
// This means you don't need to wrap it with an if/else statement. That's why you can refactor it like this:
function isPassing(grade) {
    return grade >= 10;
}

```Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is 
even and "odd" otherwise. Can you make it work with negative numbers too?```

function evenOrOdd(number) {
    let remainder;
    remainder = Math.abs(number % 2);

    if (remainder == 0) {
        return "even";
    } 
    return "odd";
}
