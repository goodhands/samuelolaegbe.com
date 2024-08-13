---
title: Using arrow functions in PHP 7.4
date: 2020-03-12
category: PHP
tags: ["php", "code", "release", "php7", "guide"]
author: Samuel Olaegbe
cover: ./media/arrow-fn-php7-4.png
canonical: 'https://devloader.hashnode.dev/using-arrow-functions-in-php-74-ck7oqwvor00jf64s1hdfr63ig'
excerpt: PHP 7.4 has just been released with a shorter way of writing functions using the same arrow convention in languages like Javascript 
---
Last November, PHP 7.4 was [released](https://www.php.net/releases/7_4_0.php) and the entire community was so excited with the new features that this release brings with it. You can now build faster apps with PHP and also be excited while you work on them with these new release! See the full list of features [here](https://www.php.net/releases/7_4_0.php).

Now let's dig into what the arrow function is and how to use them in your PHP based projects. If you're a JavaScript developer, the following code snippet should look familiar to you:

````js
users.forEach(user => console.log(user.name) )
````

This is a shorter version of what would have looked like this:

````php
for(var x = 0; x <= users.length; x++){
     console.log(users[x].name)
}
````

With the above code we were using multiple lines for something that could have been done using a single line and we also had to use a loop construct and indexes and when you begin to do this all over your codebase it could become  quite cumbersome and hard to read compared to a single line function.

A simple example in PHP would be:


~~~php
<?php
   //
   public function index(){

       Users::find(
           function(){
              return $post->author 
           }
       )

   }
~~~

Now, the code above could be simplified as follows (in PHP 7.4):

````php
<?php
   Users::find(
      fn() => $post->author
   )
````

## Syntax
It is important to note that the ``return`` keyword is not used in the arrow function, although it returns a value from the expression on the right hand side.

A simple way to think of it is this:
````php
    $output = fn() => expression
````

> The `fn` keyword is just a shorter way of writing `function`


## By-value variable binding
The RFC for arrow functions in PHP 7.4 explains the use of by-value variable which basically binds a variable used in the closure such that it cannot be modified and any attempt to modify it will be silently ignored:

````php
$x = "foo";

$output = fn() => $x . " bar"; // this is silently ignored

$output();

var_dump($x) //foo
````


#### Additional resources
* https://wiki.php.net/rfc/arrow_functions_v2
* https://stitcher.io/blog/short-closures-in-php


And that is all about the arrow function in PHP 7.4. Please feel free to drop your comments, suggestions and questions! 

Follow me on twitter [@devloader](https://twitter.com/devloader)
