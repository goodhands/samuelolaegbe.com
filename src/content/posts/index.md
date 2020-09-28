---
slug: "check-variable-number"
date: "2019-05-04"
title: "How to Check if a Variable is a Number"
category: "business"
excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut amet delectus odit voluptatem quo repudiandae explicabo perspiciatis, velit sunt, nesciunt dolor veritatis beatae ea rerum excepturi laborum itaque totam?"
cover: "./media/vision-app.png"
author: "Samuel Olaegbe"
tags: ['development', 'tech']
---

We can check by calling `isNaN` with the variable as the argument. It also detects if a string’s content is a number. For example:
```
isNaN(1) // false
isNaN('1') // false
isNaN('abc') // true
```
**Note:** `isNaN(null)` is `true` .
### typeof Operator
We can use the `typeof` operator before a variable to check if it’s a number, like so:
```
typeof 1 == 'number' // true
typeof '1' == 'number' // false
```
![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)