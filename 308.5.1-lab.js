console.group("Pt 1")
// /* With that in mind, write functions that accomplish the following:
// Take an array of numbers and return the sum.
let numArray = [1,1,2,3,5,8]
function sumIt(numArray){
    let sum = 0
    numArray.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumIt(numArray))
// Take an array of numbers and return the average.
function mean(numArray){
    if (numArray===0) return 0;
    let sum = sumIt(numArray)
    return sum / numArray.length
}
console.log(mean(numArray))

// Take an array of strings and return the longest string.
function longestString(stringArray){
    let newLongestString = ''
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > newLongestString.length){
            newLongestString = stringArray[i]
        }
    }   return newLongestString
}
stringArray = ['a', 'ab', 'abc']
console.log(longestString(stringArray))
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(string, num){
    return string.filter((word) => word.length > num);
}
console.log(stringsLongerThan(stringArray,2))
// Take a number, n, and print every number between 1 and n without using loops. Use recursion. */
function numberBrr(n){
    if (n<1){
        return;
    }
    console.log(n)
    numberBrr(--n)
}
numberBrr(5)

console.groupEnd()
console.group("Pt 2")
/* Part 2: Thinking Methodically
When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work: */
let csvData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : -1); // Source: MDN

const sortByAge=(inputArray) => {
    return sortBy(inputArray, 'age')
}
console.log( sortByAge(csvData) )
 
// Filter the array to remove entries with an age greater than 50.
let ageFiltered =(inputArray)=> inputArray.filter(person => person.age < 50 )
console.log( ageFiltered(csvData) )
    
// Map the array to change the “occupation” key to “job” and increment every age by 1.

/// need ...rest to skip the rest of the key pairs in the mapping. Why??
let mapped = (inputArray) => inputArray.map(({ occupation, age, ...rest }) => ({
    ...rest, 
    job: occupation,
    age: parseInt(age) + 1
}));
console.log(mapped(csvData))

// Use the reduce method to calculate the sum of the ages.

let sumAge = (inputArray) => inputArray.reduce((sum, person) => sum + parseInt(person.age), 0 )
console.log(`The sum of the agee is ` + sumAge(csvData))


// Then use the result to calculate the average age. 

let averageAge = (inputArray) =>  sumAge(inputArray) / inputArray.length
console.log(`The average age is ` + averageAge (csvData))

console.groupEnd()
console.group("Pt 3")
/* 
Part 3: Thinking Critically
It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
*/
let Simba = {
    color : 'tabby', 
    age : 1 ,
}

function incrementAge(kitten){
    if (typeof kitten.age !=="number"){
        kitten.age = 0;
    }
    kitten.age += 1;
    kitten.updated_at = new Date();
    return kitten
}

console.log(incrementAge(Simba))

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function fasterAging(kitten){
    let cheetahKitten = { ...kitten };
    if (typeof cheetahKitten.age !== "number"){
        cheetahKitten.age = 0;
    }
    cheetahKitten.age += 2
    cheetahKitten.updated_at = new Date();
    return cheetahKitten
}

console.log(fasterAging(Simba) )



// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior? */

console.groupEnd()
console.group("Pt 4")
// If we change the date object, it till change the age of the original object. By making a copy of the date object, we will keep the original date object

/* 
Part 4: Thinking Practically
Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.

The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below. */
console.groupEnd()
console.group("Pt 5")
/* 
Part 5: Thinking Back
Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
How many of the scripts could be turned into functions?
What would the parameters look like? What kind of returns should they have?
Could you package your code into even smaller blocks, creating helper functions?
What else could be changed to optimize the code, knowing what you now know?
Explore, experiment, and experience the magic of reusable code! */

console.groupEnd()
