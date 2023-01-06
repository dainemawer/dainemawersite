---
title: 'How to Make HTTP Requests with Fetch in JavaScript'
status: 'draft'
author:
  name: 'Daine Mawer'
  picture: 'https://avatars.githubusercontent.com/u/48082535?v=4'
slug: 'how-to-make-http-requests-with-fetch-in-javascript'
description: 'Learn how to use the Fetch API, a modern JavaScript tool for making HTTP requests and handling responses. Use fetch to make GET, POST, PUT, and DELETE requests and easily parse the response with built-in methods. Perfect for interacting with REST APIs in your web projects.'
coverImage: ''
publishedAt: '2023-01-06T19:49:26.080Z'
---

etch is a modern JavaScript API that allows you to send HTTP requests and handle responses using JavaScript Promises. It's an easy and convenient way to make API calls and is a popular alternative to using the XMLHttpRequest (XHR) API.

To use fetch, you need to pass in the URL of the API endpoint as the first argument and then call the `.then()` method on the returned promise. The `.then()` method takes two arguments: a callback function to execute when the request is successful, and another callback function to execute when the request fails.

Here's an example of how to use fetch to make a GET request to the JSONPlaceholder API:

```
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

In this example, we're making a GET request to the `/posts` endpoint of the JSONPlaceholder API, which returns an array of sample blog posts. The `response.json()` method parses the response body as JSON and returns a promise that resolves with the resulting object. The `data` variable in the second `.then()` callback function represents this object.

If the request fails, the promise returned by `fetch()` will be rejected and the error will be passed to the `catch()` callback function.

You can also make other types of requests using fetch, such as POST, PUT, and DELETE. To do this, you need to pass an additional options object as the second argument to `fetch()`. This options object can contain various properties such as the HTTP method, headers, and the request body.

Here's an example of how to make a POST request using fetch:

```
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is a new post.',
    userId: 1
  })
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

In this example, we're making a POST request to the `/posts` endpoint of the JSONPlaceholder API with a JSON object as the request body. The `Content-Type` header is set to `application/json` to indicate that the request body is in JSON format.

That's a brief overview of how to use fetch in JavaScript. Keep in mind that fetch is only supported in modern browsers, so you may need to include a polyfill if you need to support older browsers.

