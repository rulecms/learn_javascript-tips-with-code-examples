export const tips = [
    {
        slug: 'hoisting',
        title: 'Understanding Hoisting',
        summary: 'Learn how JavaScript hoists variables and functions.',
        description: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of their scope. While the declarations are hoisted, initializations are not.',
        codeSnippet: `console.log(x); // undefined
var x = 5;

// What's actually happening:
var x;
console.log(x);
x = 5;`
    },
    {
        slug: 'closure',
        title: 'Closures Explained',
        summary: 'Master JavaScript closures for better code organization.',
        description: 'A closure is the combination of a function and the lexical environment within which that function was declared. This lets the function access variables in its outer scope.',
        codeSnippet: `function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1`
    },
    {
        slug: 'destructuring',
        title: 'Array and Object Destructuring',
        summary: 'Simplify your code with destructuring assignment.',
        description: 'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables with a concise syntax.',
        codeSnippet: `const person = { name: 'John', age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;`
    },
    {
        slug: 'arrow-functions',
        title: 'Arrow Function Syntax',
        summary: 'Write cleaner functions with arrow syntax.',
        description: 'Arrow functions provide a concise syntax for writing function expressions. They also lexically bind the this value, making them ideal for callbacks.',
        codeSnippet: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;`
    },
    {
        slug: 'spread-operator',
        title: 'Spread Operator Magic',
        summary: 'Learn to use the spread operator effectively.',
        description: 'The spread operator (...) allows an array or object to be expanded into individual elements, making it perfect for array manipulation and object merging.',
        codeSnippet: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { foo: 'bar' };
const obj2 = { ...obj1, baz: 'qux' };`
    },
    {
        slug: 'async-await',
        title: 'Async/Await Patterns',
        summary: 'Write cleaner asynchronous code.',
        description: 'Async/await is a modern way to handle Promises, making asynchronous code look and behave more like synchronous code.',
        codeSnippet: `async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`
    },
    {
        slug: 'optional-chaining',
        title: 'Optional Chaining',
        summary: 'Safely access nested object properties.',
        description: 'Optional chaining (?.) allows you to safely access deeply nested object properties without worrying about null or undefined values.',
        codeSnippet: `const user = {
  address: {
    street: 'Main St'
  }
};

const zipCode = user?.address?.zipCode;
// Returns undefined instead of throwing error`
    },
    {
        slug: 'nullish-coalescing',
        title: 'Nullish Coalescing Operator',
        summary: 'Handle null/undefined values elegantly.',
        description: 'The nullish coalescing operator (??) provides a way to specify a default value when dealing with null or undefined values.',
        codeSnippet: `const value = null;
const defaultValue = value ?? 'default';
// defaultValue = 'default'

const zero = 0;
const result = zero ?? 42;
// result = 0`
    },
    {
        slug: 'template-literals',
        title: 'Template Literals',
        summary: 'Create dynamic strings easily.',
        description: 'Template literals allow you to create multiline strings and use string interpolation with ${expression} syntax.',
        codeSnippet: `const name = 'World';
const greeting = \`Hello
  ${name}!
  Welcome to JavaScript\`;`
    },
    {
        slug: 'array-methods',
        title: 'Array Methods',
        summary: 'Master essential array operations.',
        description: 'Modern JavaScript provides powerful array methods like map, filter, and reduce for data transformation and manipulation.',
        codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);`
    },
    {
        slug: 'object-methods',
        title: 'Object Methods',
        summary: 'Explore useful object manipulation techniques.',
        description: 'JavaScript offers various methods to work with objects, including Object.keys(), Object.values(), and Object.entries().',
        codeSnippet: `const person = { name: 'John', age: 30 };
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);`
    },
    {
        slug: 'sets',
        title: 'Using Sets',
        summary: 'Work with unique value collections.',
        description: 'Sets are collections of unique values that provide an elegant way to remove duplicates and manage unique items.',
        codeSnippet: `const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(numbers)];
// [1, 2, 3, 4]`
    },
    {
        slug: 'maps',
        title: 'Map Data Structure',
        summary: 'Use Maps for key-value associations.',
        description: 'Maps provide a way to store key-value pairs where both keys and values can be of any type, unlike regular objects.',
        codeSnippet: `const userMap = new Map();
userMap.set('john', { age: 30 });
userMap.set('jane', { age: 25 });
console.log(userMap.get('john'));`
    },
    {
        slug: 'promises',
        title: 'Promise Patterns',
        summary: 'Handle asynchronous operations effectively.',
        description: 'Promises provide a cleaner way to handle asynchronous operations and avoid callback hell.',
        codeSnippet: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise.then(result => console.log(result));`
    },
    {
        slug: 'generators',
        title: 'Generator Functions',
        summary: 'Create iterative algorithms easily.',
        description: 'Generator functions provide a powerful way to define iterative algorithms by maintaining their own state.',
        codeSnippet: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1`
    },
    {
        slug: 'proxy',
        title: 'Proxy Objects',
        summary: 'Intercept and customize object operations.',
        description: 'Proxies enable you to create custom behaviors for basic object operations like property lookup, assignment, and enumeration.',
        codeSnippet: `const handler = {
  get: (target, prop) => \`Property \${prop}\`
};
const proxy = new Proxy({}, handler);
console.log(proxy.name); // "Property name"`
    },
    {
        slug: 'decorators',
        title: 'Class Decorators',
        summary: 'Enhance classes with decorators.',
        description: 'Decorators provide a way to add both annotations and meta-programming syntax to class declarations and members.',
        codeSnippet: `function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  pi() { return 3.14; }
}`
    },
    {
        slug: 'modules',
        title: 'ES Modules',
        summary: 'Organize code with modules.',
        description: 'ES Modules provide a standard way to organize and share code between JavaScript files.',
        codeSnippet: `// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`
    },
    {
        slug: 'regex',
        title: 'Regular Expressions',
        summary: 'Master pattern matching in strings.',
        description: 'Regular expressions provide a powerful way to perform pattern matching and text manipulation in strings.',
        codeSnippet: `const email = 'test@example.com';
const isValid = /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)*\\.[a-zA-Z]{2,}$/.test(email);
console.log(isValid); // true`
    },
    {
        slug: 'web-apis',
        title: 'Web APIs',
        summary: 'Interact with browser APIs.',
        description: 'Modern browsers provide powerful APIs for features like storage, geolocation, and real-time communications.',
        codeSnippet: `// Local Storage
localStorage.setItem('user', 'John');
const user = localStorage.getItem('user');

// Geolocation
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords)
);`
    }
]; 