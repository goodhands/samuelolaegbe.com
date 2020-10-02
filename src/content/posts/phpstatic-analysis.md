---
title: Static analysis with Phpstan
date: 2020-10-01
category: PHP
tags: ["tooling"]
author: Samuel Olaegbe
cover: ./media/phpstan-cover.png
excerpt: Static analysis is the method of testing your code for basic logical, runtime or typographical exceptions without actually executing the code.
---

# Static analysis with Phpstan

Testing your code is one way to ensure that you have a high quality codebase, which is one way to ensure the maintainability of your projects and also a way to ensure you don't ship broken features in your product. CI tools like [Travis CI](https://travis-ci.org/) help you to test your code each time you push to source control.

Static analysis is the method of testing your code for basic logical, runtime or typographical exceptions without actually executing the code. 

As you must have guessed, static analysis of your codebase happens fast since the code doesn't actually get executed but scanned for common errors like having a method that doesn't return the expected date type.

## How static analysis works

Static analysis as the name implies, actually doesn't need to execute your code before catching bugs in them. Statically typed languages like Dart or Java already have this functionality built into their compilers. Since they always define the `types` of their constructs the compiler won't run when there is a typo or an incorrect type for a method or variable. Before the advent of static analysis and tools like PHPStan, developers spend a lot of time debugging their PHP code looking for errors because PHP's execution is line by line and so it only throws an error when it gets to the line containing the error. And may sometimes continue execution after encountering the error, depending on the type of error encountered.


PHPStan checks for a couple of language constructs such as use of `instanceof`, `try-catch` blocks, `typehints`, number of arguments passed to a function, accessibility of called methods and variables, [and many more](https://phpstan.org/blog/find-bugs-in-your-code-without-writing-tests#what-it-currently-checks-for%3F).

## PHPStan: Static analysis in your favourite language

Recently, [PHPStan Pro](https://phpstan.org/blog/introducing-phpstan-pro) was announced by the creators of PHPStan and that is already looking very promising with continuous watch mode (hot-reloading in PHP?), a Web UI and an interactive fixer! The good news is you get to save a ton of time and keystrokes by finding errors sooner and PHPStan can suggest a fix for you and everyone is happier.

### Using PHPStan in your projects

Below we will go over steps to use PHPStan in our projects.

### Setting up your environment

You can use PHPStan in any PHP project of your choice, for the purpose of this tutorial I have created a skeleton PHP library that I will be using. My `composer.json` file looks like this before installing `phpstan`

![My composer.json](./media/phpstan.png)

A screenshot of my composer.json setup

Installing PHPStan as a dev dependency

```php
composer require --dev phpstan/phpstan
```

*We are installing `phpstan` as a dev dependency with composer.*

Now you are ready to run your first analysis, copy and paste the code below in your terminal:

```php
phpstan analyse src
```

Depending on the content of your `src` directory you may get some errors after running this command and that is totally fine as we will look at how to configure PHPStan to our taste soon.

### phpstan Command

The `analyse` keyword is what tells `phpstan` to analyse your codebase, and the 3rd argument in the command is the path to the code you want to analyse. Here I have used `src` as that is where the code I have written lives, I do not need to analyse my vendor folder or other temporary folders. However if you are writing tests then it's a good idea to analyse your `tests` directory as well. PHPStan has some [extensions](https://phpstan.org/user-guide/extension-library) for popular testing libraries like PHPUnit, Behat and mock frameworks like Mockery.

### Configuration

PHPStan makes use of the [`neon`](https://ne-on.org/) file format for its configuration, ideally you will have a `phpstan.neon` at the root of your project folder. Whenever you run the `phpstan analyse` command, it will look for `phpstan.neon` at the root and use it as configuration to analyse your code. If it doesn't find the configuration file at the root of your project, PHPStan will also check for `phpstan.neon.dist` and if that doesn't exist as well, it will run with the default configs. Below is a basic configuration options to get you started. Read more [here](https://phpstan.org/config-reference).

```yaml
parameters:
    level: max
    paths:
        - src
				- test
```

Using the configuration setting above, we can now omit the 3rd argument when running the `phpstan` command which is the `path` to our source code. This is now a valid command once you have `phpstan.neon` on your root directory:

```php
phpstan analyse
```

With the `level` set to max, we have more stricter analysis and things like incorrect typehints, incorrect return types, will now throw an error:

```php
$ phpstan analyse
Note: Using configuration file Code\demo\photo-library\phpstan.neon.
 1/1 [============================] 100%

 ------ ----------------------------------------------------------------------------------------
  Line   Photo.php
 ------ ----------------------------------------------------------------------------------------
  7      Property Photo::$http has no typehint specified.
  9      Method Photo::__construct() has parameter $token with no typehint specified.
  25     Method Photo::photos() return type has no value type specified in iterable type array.
         💡 Consider adding something like array<Foo> to the PHPDoc.
         You can turn off this check by setting checkMissingIterableValueType: false in your
         Code\demo\photo-library\phpstan.neon.
  27     Method Photo::photos() should return array but returns string.
 ------ ----------------------------------------------------------------------------------------
```

Take note of this line which now tells us that our configuration file is being used to analyse our code:

> Note: Using configuration file Code\demo\photo-library\phpstan.neon.

The code which produced the errors above looks like this:

```php
<?php

declare(strict_types=1);

use GuzzleHttp\Client;

class Photo{

    private $http;

    public function __construct(string $token)
    {
        $this->http = new GuzzleHttp\Client([
            'base_uri' => 'https://photo.google.com',
            'headers' => [
                'Authorization' => 'Bearer ' . $token
            ]
        ]);
    }

    /**
     * Returns an array of photos in the 
     * library
     * 
     * @return array
     */
    public function photos(): array
    {
        return 'Photos in the library';
    }
}
```

Since my codebase above is relatively new and I am using PHP 7.4 with strict types enabled, I may have better luck resolving these errors in a few minutes. That may not be the case when you have a large codebase, and you don't have to feel bad for having these errors since you wrote the code without static analysis in mind.

Editing our `phpstan.neon` file and setting the `level` to anywhere between 0 and 8 will allow us to make a loose or strict analysis based on the level we settle for.  The `max` level will use the strictest value available depending on the version of PHPStan you have. Learn more about the levels [here](https://phpstan.org/user-guide/rule-levels)

### Nip it in the bug :)

Catch your bugs before they get bigger and cause problems. One way I love to do this is by adding phpstan to the scripts section of my `composer.json` and running a command to analyse my codebase before pushing to source control. You can also add `phpstan` to your travis ci builds and we will see how to do that in a bit.

Add the following to the scripts section of your composer.json:

```json
"scripts": {
        "analyse": [
            "phpstan analyse src -c phpstan.neon --level max --no-progress",
            "phpstan analyse tests -c phpstan.neon --level 4 --no-progress"
        ],
}
```

This adds a script called `analyse` to composer which you can run by executing `composer run analyse`. That will execute the 2 commands we have specified here:

```json
"phpstan analyse src -c phpstan.neon --level 5 --no-progress"
"phpstan analyse tests -c phpstan.neon --level 5 --no-progress"
```

The first command analyses our `src` directory and the second analyses the `tests` directory. We are passing a couple of arguments which you can almost already tell what they do:

- -c phpstan.neon: Tells phpstan to run with the configurations defined in phpstan.neon
- —level: Tells phpstan what level to run the analysis at (5 in this case)
- —no-progress is a special flag to tell phpstan not to report analysis progress as it traverses our codebase.

### Adding phpstan to your Travis builds

This can be achieved by adding the composer script to analyse our codebase in the script section of `.travis.yml`:

```yaml
script:
  - composer run analyse
```

This is only for demonstration purpose, ideally you will want to run other checks which you can group into a composer script in your composer.json file and run that script in your travis build but this is meant to give you an overview of how that is done. 

You can find a sample `.travis.yaml` which I use here for my builds [here](https://github.com/goodhands/comments-sdk/blob/master/.travis.yml) and a sample composer.json file [here](https://github.com/goodhands/comments-sdk/blob/master/composer.json)

### Final notes

Static analysis is something I learned recently and I must say that it gives a unique developer experience. As I am able to write efficient and clean code and catch my errors before they make it to source control. I hope that this article has given you an insight on how static analysis can help you write better code and improve your development process. Please leave your thoughts and comments on [Twitter](https://twitter.com/devloader).