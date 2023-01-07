---
title: 'Async and Await: A Beginner''s Guide to JavaScript''s Async Features'
status: 'draft'
author:
  name: 'Daine Mawer'
  picture: 'https://avatars.githubusercontent.com/u/48082535?v=4'
slug: 'async-and-await-a-beginners-guide-to-javascripts-async-features'
description: 'Async and Await are essential language features in JavaScript that make it easier to write and read async code. Built on top of Promises, Async and Await provide a higher-level syntax for handling async operations in a synchronous manner. Learn how to use Async and Await to improve the readability and maintainability of your async code and avoid callback hell.'
coverImage: ''
publishedAt: '2023-01-06T19:17:00.124Z'
---

`async` and `await` are two useful keywords in JavaScript that make it easier to write and read asynchronous operations. `async` and `await` are built on top of the [Promises API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### 1\. What is Async/Await?

The `async` and `await` keywords provide a way to write asynchronous code that looks and behaves like synchronous code. What this means is that you can write code that looks like its executing in a linear fashion, without the need to deal with the complexity of the Promises API.

If you want to get technical, what actually happens when code is flagged as `async` is that the task is added to a micro-task queue. Meaning it does not run on the main thread itself. Tasks on the main-thread are considered "blocking". Asynchronous code can then be executed, without being blocked by the main thread. Watch this [great talk by Jake Archibald at JSConf](https://www.youtube.com/watch?v=cCOL7MC4Pl0) to understand more about the nature of Promises.

Below is an example of how you can use `async` and `await` to perform an asynchronous operation in JavaScript:

```javascript
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, the `getData` function is an async function that uses `await` to wait for the Promise returned by the `fetch` function to `resolve`. The `await` keyword can only be used inside of an `async` function and pauses execution until that Promise `resolves`.

Once the Promise has been resolved, the `async` function continues executing and returns the resolved value. In this case, the returned value.

Heres the same function, without using `async` and `await`:

```javascript
const getData = () => {
 return new Promise((resolve, reject) => {
   fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
     resolve(data);
    })
    .catch(error => {
     reject(error)
    });
 });
};
```

As you can see, the code is far more verbose and difficult to read.

More importantly, take note that `async` and `await` are not a replacement for Promises; they are keywords that make it easier to work with Promises. Under the hood, `async` and `await` still use Promises to perform their asynchronous operations, and you can use Promises and Async/Await together in your code.

### 2\. Promises, Explained

A JavaScript Promise is an object that represents the result of an asynchronous operation. It's a language feature that makes handling async code easier and cleaner. A Promise is not necessarily equal to an `async` / `await` operation. However, `async` / `await` is built on top of Promises.

Promises have three states: `pending`, `fulfilled`, and `rejected`. A promise starts in the pending state, and then either becomes fulfilled if the operation was successful, or rejected if the operation failed.

One particular trait to note about Promises is that they must wait for all synchronous code to finish before they execute. This is because JavaScript is a single-threaded language. However, it does have multiple task-queues, this means that once code is flagged as asynchronous, JavaScript has the power to determine the priority of a task that needs to be executed within a queue.

### 3\. Benefits of Using Async/Await

Some benefits of using the `async` and `await` keywords are:

1. Cleaner more readable code.

2. Easier and more concise debugging.

3. Easier to learn and understand

4. Better error handling

### 4\. When to Use a Promise?

As Promises are asynchronous, there use cases are limited and should not be over-used. Some prime examples of using promises are:

1. Making HTTP requests using `fetch`

2. Loading data from an API

3. Reading or writing to a file on the disk

4. Asynchronous processing: making sure what you've processed is finished before moving onto the next task.

### 5\. Best Practices for Using Async/Await

1. The `async` keyword can only be used in a top-level `function` declaration.

2. The `await` keyword is generally prepended to a `function` that returns a `Promise`, e.g `fetch`

3. If an `async` function is declared, it will *always* return a `Promise`

4. Don't use an `async` function on click events if they do not fetch data.

5. Remember that `async` and `await` are just syntax updates to the JavaScript language, meaning they do not provide any inherent performance improvements to your application.

### 6\. Conclusion

Async and Await are two language features in JavaScript that make it easier to write and read asynchronous code. They are built on top of Promises and provide a higher-level syntax that makes dealing with async operations more readable and maintainable. If you are working with async code in JavaScript, it is worth learning how to use these new language features to make your code more readable and maintainable.

