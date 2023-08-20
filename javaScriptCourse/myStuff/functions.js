// basics of a function
function subtract(num1, num2) {

    // please note the logic exits out after the return line! writing anything below will have no effect!
    return num1 - num2;
}

const result = subtract(10, 2)
console.log(result)

// Default parameters: if for some reason, when you call a function and you do not provide an argument, you
// can set up a function to always have a default value!
function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser('Ivan'));

console.log(registerUser());






// Rest Params: allows a function to accept an indefinite number of arguments as
// an array.
function sum(...numbers) {
    return numbers;
}

console.log(sum(1,2,3));        // this produces an array with [1, 2, 3]



// Example of Params with a for loop. Takes the square root of each number 
// and adds them together
function sumSquare(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += (num*num);
    }

    return total; 
}

console.log(sumSquare(1,2,3))



// Objects as Params:
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
} 

const user = {id: 1, name: 'John'};

console.log(loginUser(user));


// Arrays as Params:
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3])
