---
title: 'Use Google Lighthouse to Set and Enforce Performance Budgets for Your Web Page'
status: 'draft'
author:
  name: 'Daine Mawer'
  picture: 'https://avatars.githubusercontent.com/u/48082535?v=4'
slug: 'use-google-lighthouse-to-set-and-enforce-performance-budgets-for-your-web-page'
description: 'Improve the speed and responsiveness of your web page by using Google Lighthouse to set and enforce performance budgets. Lighthouse is a powerful open-source tool that helps you audit the performance of your page and identify areas for optimization. With Lighthouse and performance budgets, you can ensure that your web page delivers a consistently fast and smooth experience to your users.'
coverImage: ''
publishedAt: '2023-01-06T19:21:37.168Z'
---

Performance budgets are a crucial aspect of maintaining a high-quality user experience for your web application. Google Lighthouse is a valuable tool for creating and enforcing these budgets, and Lighthouse CI can be used to automatically check that your web page adheres to your defined budgets. Here's how to use Lighthouse CI to create performance budgets:

1. Install Lighthouse CI through npm by running `npm install -g lighthouse`.

2. Create a configuration file in your project's root directory called `lighthouserc.json`, and specify the performance budgets you want to set for your web page.

3. In your continuous integration (CI) pipeline, add a step to run Lighthouse CI against your web page. This can be done by running the `lighthouse` command and passing in the URL of your web page and the path to your configuration file.

4. Lighthouse CI will generate a report similar to the one produced by the standalone Lighthouse tool. This report will include information about your web page's performance and whether it meets the budgets specified in your configuration file.

5. If the report shows that your web page does not meet your performance budgets, you can use the recommendations provided by Lighthouse to identify and address the issues causing poor performance.

By using Lighthouse CI, you can automate the process of checking your web page's performance and ensure that it stays within your defined budgets. This helps you deliver a consistently fast and smooth experience to your users.

Performance budgets are a set of limits that you define for your web page, such as a maximum load time or a maximum number of requests. These budgets help ensure that your web page delivers a fast and smooth user experience by setting standards for performance that your page should meet.

Google Lighthouse is an open-source tool that can be used to audit the performance of your web page and identify opportunities for improvement. It generates a report that includes a variety of performance metrics, such as first contentful paint, first input delay, and time to interactive, as well as specific recommendations for optimizing your page.

Lighthouse CI is a command-line interface (CLI) version of Lighthouse that can be integrated into your continuous integration (CI) pipeline. This allows you to automate the process of checking your web page's performance and ensure that it stays within your defined budgets.

To use Lighthouse CI, you first need to install it using npm, a package manager for JavaScript. Once it is installed, you can create a configuration file in your project's root directory called `lighthouserc.json` that specifies the performance budgets you want to set for your web page. You can then add a step to your CI pipeline to run Lighthouse CI against your web page, using the `lighthouse` command and passing in the URL of your page and the path to your configuration file.

Lighthouse CI will generate a report similar to the one produced by the standalone Lighthouse tool. This report will include information about your web page's performance and whether it meets the budgets specified in your configuration file. If the report shows that your web page does not meet your performance budgets, you can use the recommendations provided by Lighthouse to identify and address the issues causing poor performance.

By using Lighthouse CI, you can automate the process of checking your web page's performance and ensure that it stays within your defined budgets. This helps you deliver a consistently fast and smooth experience to your users.

