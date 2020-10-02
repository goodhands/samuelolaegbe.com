---
title: Static analysis with Phpstan
date: 2020-01-20
category: PHP
tags: ["tooling"]
author: Samuel Olaegbe
cover: ./media/phpstan-cover.png
excerpt: Common native apps like Twitter or any app that allows you to share content outside of them provide support for a dialog that allows you to share their content into other apps that are installed on your phone. In this tutorial, we will take a look at how this is done.
---

Testing your code is one way to ensure that you have a high quality codebase, which is one way to ensure the maintainability of your projects and also a way to ensure you don't ship broken features in your product. CI tools like [Travis CI](https://travis-ci.org/) help you to test your code each time you push to source control.

While we can all agree that what makes a codebase maintainable ranges from several things such as adhering to certain conventions, avoiding duplication, .......

Static analysis is the method of testing your code for basic logical, runtime or typographical exceptions without actually executing the code. 

As you must have guessed, static analysis of your codebase happens fast since the code doesn't actually get executed but scanned for common errors like having a method that doesn't return the expected date type.

## How static analysis works

Todo:

- [x]  Research whether static analysis actually executes your PHP code

Static analysis as the name implies, actually doesn't need to execute your code before catching bugs in them. Statically typed languages like Dart or Java already have this functionality built into their compilers. Since they always define the `types` of their constructs the compiler won't run when there is a typo or an incorrect type for a method or variable. Before the advent of static analysis and tools like PHPStan, developers spend a lot of time debugging their PHP code looking for errors because PHP's execution is line by line and so it only throws an error when it gets to the line containing the error. And may sometimes continue execution after encountering the error, depending on the type of error encountered.

- [x]  Research the common things it checks for

PHPStan checks for a couple of language constructs such as use of `instanceof`, `try-catch` blocks, `typehints`, number of arguments passed to a function, accessibility of called methods and variables, [and many more](https://phpstan.org/blog/find-bugs-in-your-code-without-writing-tests#what-it-currently-checks-for%3F).

## Should you bother about static analysis?

- Benefits of static analysis

## PHPStan: Static analysis in your favourite language

- Reference PHPStan website and give an introduction

    Recently, [PHPStan Pro](https://phpstan.org/blog/introducing-phpstan-pro) was announced by the creators of PHPStan and that is already looking very promising with continuous watch mode (hot-reloading in PHP?), a Web UI and an interactive fixer! The good news is you get to save a ton of time and keystrokes by finding errors sooner and PHPStan can suggest a fix for you and everyone is happier.

### Using PHPStan in your projects

Below we will go over steps to use PHPStan in our projects

### Setting up your environment

- Installing globally

    ```php
    composer gloabl require --dev phpstan/phpstan
    ```

    We are installing `phpstan` as a dev dependency with composer.

- Configurations

    As soon as that is done, then we can start coding

### Nip it in the bug :)

Catch your bugs before they get bigger and cause problems.

- Running the command analysis