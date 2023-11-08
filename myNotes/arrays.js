`Arrays in JavaScript allow you to store multiple elements in the same variable. 
You can store numbers, strings, booleans, arrays, objects & more. 
These can be mixed within the same array. Here are some examples:`

const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed


         // .length property
// You can get the number of elements in an array by using the .length property. For example:
[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4



        // Get Element by Index
const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"        


const users = ["Sam", "Alex", "Charley"];
users.at(1); //"Alex"
users.at(-2); //"Alex"




        // Adding an Element
const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];



        // Arrays & const
```Even though the variable numbers was defined with const, we were able to push new data into it.
That's because const means you can only assign the variable once when it's defined. But it doesn't mean 
the variable is immutable. Its content can change.

What's the benefit of declaring it as a const you ask? The benefit is that once you define it as an array, 
it will always stay as an array which means you can safely call array methods on it. 
However, the array content can change.```

const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)



// You can pass an array in a function. For example:
function getNumberOfElements(elements) {
    return elements.length;
}

console.log(getNumberOfElements(['Ivan', 'Lucas', 'Isabel']))




function useApp(apps, app) {
    apps.push(app)
    return apps
}

console.log(useApp(["Clock", "Twitter"], "Firefox"))




        // For Each
const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});

// Result:
```
10
8
3
```


// For Each within a function:
function loopThroughElements(elements) {
    elements.forEach(function(element) {
        console.log(element)
    })
}

loopThroughElements(["Sam", "Charlie", "Alex"]);




```A more practical example of forEach. Note: whatever you are looping inside
the forEach method(), the result should be passed on to a variable that it's
declared outside of the forEach block
```

// Correct way of doing it:
function sumGrades(grades) {
    let totalSumGrades = 0;

    grades.forEach(function(grade) {
        totalSumGrades += grade;
    });
    return totalSumGrades;
}

console.log(sumGrades([1,2,3]))




// Incorrect way of doing it:
function sumGrades(grades) {
    grades.forEach(function(grade) {
        let totalSumGrades = 0;
        totalSumGrades += grade;
    });
    return totalSumGrades;  // this variable is no where to be found given that it's scope is local inside the above function!
}

console.log(sumGrades([1,2,3]))



// Sum only positive values
function sumPositiveNumbers(numbers) {
    let counter = 0;
    
    numbers.forEach(function(number) {
        if (number > 0) {
            counter += number;
        }
    });
    return counter;
}

console.log(sumPositiveNumbers([1,3,-4,-5]))



// Sum only odd numbers; should work for negative numbers.
function sumOddNumbers(numbers) {
    let counter = 0;

    numbers.forEach(function(number) {
        if (Math.abs(number % 2) == 1) {
            counter += number;
        }
    });
    return counter;
}

console.log(sumOddNumbers([-2,-3,4,5,6]))



function getDropDown(countries) {
    let htmlTag;
    
    countries.forEach(function(country) {
        htmlTag += `<option value="${country.toLowerCase()}">${country}</option>`;
    });

    return htmlTag;
}

console.log(getDropDown(["Netherlands","Estonia"]))



function renderTableRows(rows) {
    let html;

    rows.forEach(function(row, index){
        html =  `<tr>
                    <td>${rows[index][0]}</td>
                    <td>${rows[index][1]}</td>
                </tr>`;

    });
    return html;
}


console.log(renderTableRows([["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]))





        // Array Filter
`
    * The .filter() method returns a new array that contains some of the items from
      the original array, based on the condition you specify.
    * JavaScript will take your callback function and call it for every single item in the array.
    * For the .filter() method, the result of the callback function matters.
      When it's true, the item will be included in the resulting array. Otherwise, it won't.
    * JavaScript cannot make a smart guess that the numbers array becomes the number
      parameter in your callback function. What it does is that it calls your callback
      function while giving a value for the first parameter that you specified.
    * Use the plural -> singular naming convention when using the .filter() method.`

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});

console.log(numbersAboveTen); // [14, 11]




function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(degrees) {
        return degrees > 0;
    })
}

console.log(getPositiveTemperatures([-5, 12, 3]))




function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature < 0;
    })
}
