---
title: '5 Tips for Properly Using the Return Statement in Your Code'
status: 'draft'
author:
  name: 'Daine Mawer'
  picture: 'https://avatars.githubusercontent.com/u/48082535?v=4'
slug: 'five-tips-for-properly-using-the-return-statement-in-your-code'
description: 'Learn how to use the return statement effectively in your code with these 5 tips. Proper use of the return statement is crucial for ensuring the correct functioning of your programs and can save you from bugs and errors. Follow these best practices to make the most of the return statement in your code.'
coverImage: ''
publishedAt: '2023-01-06T18:47:43.425Z'
---

The `return` statement is an often overlooked programming paradigm. It allows you to specify a value to be returned by a function and signals the end of its execution. Using this statement properly can ensure your code runs smoothly and may prevent unexpected bugs. Here are five tips for using the `return` statement effectively:

### 1\. Use the return statement to end a function or method

The `return` statement signals the end of a function or method. When the `return` statement is encountered, the function immediately terminates:

```javascript
function sayMyName(name) {
  console.log(name);
  return;  // end the function
}
```

Its worthwhile noting that the `return` statement is affected by ASI ([Automatic Semicolon Insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)). This means that you cannot create a new line after the `return` statement is called:

```javascript
/* Incorrect - would return nothing and flag an error. */
return;
name;

/* Correct - would return the value of name. */
return (
 name;
);
```

### 2\. Return a value of the correct data type:

When using the `return` statement, make sure to return the correct data-type of the intended value. If you fail to return the correct data type, your program will behave in unexpected ways and may result in errors. This is due to a feature of JavaScript known as [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion).

You can read my articles on "[Using TypeScript](https://www.dainemawer.com/outstatic/articles/why-use-typescript-the-benefits-of-static-type-checking-in-javascript)" and "Getting Started with JavaScript Unit Testing" to find out more about how to confidently work around this pitfall.

```javascript
function add(a, b) {
  return a + b;  // correct - returns a number
}

function subtract(a, b) {
  return a - b;  // correct - returns a number
}

function multiply(a, b) {
  return `${a} times ${b} is equal to: ${a * b}`;  // incorrect - returns a string
}
```

### 3\. Return a value that is appropriate for the purpose of the function

When writing functions, it is important to consider what information you need from your data and how it can affect your code. For example, if your function needs to calculate the average of a list of numbers, returning the sum of those numbers would not be correct.

Make sure that you carefully consider what information you need when writing functions and how it can affect your code.

```javascript
function average(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;  // incorrect - returns the sum of the numbers, not the average
}

function average(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total / numbers.length;  // correct - returns the average of the numbers
}
```

When writing a function its important to be intentional about:

1. What the `function` is intended to do

2. What data the `function` is intended to return

3. Is the data returned immutable?

### 4\. Use multiple return statements if necessary

In some cases, you may want to return a value immediately if certain conditions are met. This would apply to using `if` statements as well as `switch` statements.

```javascript
function options(option) {
  switch(option) {
    case 'DnD':
     return 'do-not-disturb';
   case 'Silent':
     return 'silent-mode';
   default: 
     return 'no-option-selected';
  }
}

function getOptions(option) {
 if (option === 'DnD') {
   return 'do-not-disturb';
 }
 
 return option;
}

function
```

In the `options` function above, we can omit the `break` keyword along with a temporary `variable` to store the value if we explicitly return within a `case` \- this makes code more readable and saves memory.

In the `getOptions` function, we can also always ensure that we return a value regardless of whether a condition is met. If the condition is `true`, it will execute the `return` statement within the `if` \- if not, it simply ignores that statement and returns the value of `option`

### 5\. Don't forget the return statement:

Considering JavaScript is a very forgiving language, make sure to always include a return statement. Not doing so could lead to JavaScript or other languages interpreting logic in a less than ideal way. In the below example, the `sumSquares` function would not `return` any useful value when logged to the console.

```javascript
function sumSquares(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number ** 2;
  }
  // forgot to include a return statement here
}

console.log(sumSquares([1, 2, 3]));  // prints undefined instead of the expected result
```

By following these tips, you can use the return statement effectively and ensure that your code runs smoothly and correctly. Proper use of the return statement is an essential part of good programming practice, and taking the time to get it right can save you a lot of headaches in the long run.

You can [read more about the return statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) on MDN.

