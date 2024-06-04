//Prerequisites for React.js:

//Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



//Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.
function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

console.log(getGrade(85)); // Output: B



//Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
const car = {
    companyName: 'Toyota',
    model: 'Corolla',
    year: 2019
};

function changeCarYear(car, newYear) {
    car.year = newYear;
}

changeCarYear(car, 2022);
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Corolla, Year: 2022




//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numberss.filter(isPrime);
console.log(primeNumbers); // Output: [2, 3, 5, 7]




//Q5 - State different use cases of map, filter and reduce functions.
//solution :
//map: Used to transform each element of an array into a new array based on a provided function.
//filter: Used to create a new array containing only elements that pass a certain condition.
//reduce: Used to accumulate the elements of an array into a single value based on a provided function.





//Q6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();





//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

console.log(person.contact?.phone); // Output: undefined (no error thrown)
