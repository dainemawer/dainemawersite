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

Performance budgets are a crucial aspect of maintaining a high-quality user experience for your web application. Google Lighthouse is a valuable tool for creating and enforcing these budgets, and Lighthouse CI can be used to automatically check that your web page adheres to your defined budgets.

## What is a Performance Budget?

A performance budget is a set of guidelines that helps developers ensure that their web projects are optimised for performance. A performance budget usually includes limits on the size and number of resources that can be used, as well as guidelines for the overall performance of the web project.

For example, a performance budget might specify that the total size of all resources (HTML, CSS, JavaScript, images, etc.) should not exceed 1 MB, or that the webpage itself should load within 3 seconds on a 3G connection.

These limits help developers make strategic decisions when designing and building their websites.

## How to Setup Lighthouse

Google Lighthouse is an open-source tool that can be used to audit the performance of a web page and identify opportunities for improvement.

The steps below outline how to setup Lighthouse CI in Github.

### 1\. Install Lighthouse CI

Install Lighthouse CI in your project through NPM by running:

```javascript
npm install lighthouse -g
```

### 2\. Create a Configuration File

Create a configuration file in your project called: `lighthouserc.json` and specify the budgets you want to set up. An example of this could be:

```javascript
{
  "ci": {
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

You can find all the [available configuration properties in Googles overview of the configuration file on Github](https://github.com/GoogleChrome/lighthouse/blob/main/docs/configuration.md)

### 3\. Configure Your CI Pipeline

In your CI Pipeline add a step that will run Lighthouse on a given URL. This can be done in Github using Github Actions:

1. First, make sure you have a GitHub account and a repository for your project.

2. Next, create a new GitHub Actions workflow by going to the "Actions" tab in your repository and clicking on "Set up a workflow yourself".

3. In the workflow editor, copy and paste the following code:

    ```
    name: Lighthouse CI

    on:
      push:
        branches: [ trunk ]
      pull_request:
        branches: [ trunk ]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v2
        - name: Run Lighthouse CI
          uses: treosh/lighthouse-ci-action@v1
          with:
            chrome-flags: '--no-sandbox'
            config-path: '.lighthouserc.json'
            output-path: './lighthouse-ci-report.html'
    ```

    This code will instruct GitHub to run Lighthouse CI whenever you push to or open a pull request to the `trunk` branch of your repository. *Note that you can pass a number of settings through to this file using the *`with`* property. The *`chrome-flags`* is also particularly helpful.*

### 4\. Review Generated Report

Lighthouse CI will generate a report similar to the report generated in the browser version of Lighthouse. This report will include performance information about the URL provided as well as whether or not the site met the set performance budgets.

## Benefits of Automated Lighthouse Testing

By using Lighthouse CI, you can automate the process of checking your web page's performance and ensure that it stays within your defined budgets. This helps you deliver a consistently fast and smooth experience to your users - some of the benefits of integrating this functionality into a pipeline include:

1. Save time on manual processes by automating Lighthouse tests at your convenience.

2. Save time by automating repetitive tasks.

3. Ensure that performance issues are surfaced early allowing proactive decision making.

4. Understand when and how performance degrades before issues appear on production.

