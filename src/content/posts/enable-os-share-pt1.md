---
title: How to enable the OS supported share dialog from your website on mobile devices using Javascript Web Share API
date: 2020-01-03
category: Javascript
tags: ["tutorials", "code"]
author: Samuel Olaegbe
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1578042967363/VEz4gZODN.png
excerpt: Common native apps like Twitter or any app that allows you to share content outside of them provide support for a dialog that allows you to share their content into other apps that are installed on your phone. In this tutorial, we will take a look at how this is done.
canonical: https://devloader.hashnode.dev/how-to-enable-the-os-supported-share-dialog-from-your-website-on-mobile-devices-using-javascript-web-share-api-ck4xy25vi0056mus1nn2n9ck5
---

## Native Apps vs Web Apps

Common native apps like Twitter or any app that allows you to share content outside of them have a dialog like this one below where you can export whatever content (text, media, url) you selected into other apps and services installed on your mobile phone:

![Screenshot_20200103-083024_1578042501593.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1578042572830/hcjrcex2g.png)

If you're like me, you must have thought this feature was only available to native apps but I was wrong. With the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), Thanks to a newsletter I received from Codrops, I discovered this awe-spiring feature!

## Now, let's get coding!

This feature is quite new and still under active development, this comes with a bit of limitation:

+ It is only available on ```https``` supported websites
+ It can only share ```texts```, ```urls``` and ```media```
+ It must be invoked by a user action such as a ```onclick```, ```keydown```, etc.

#### Sharing a text

We will be using the `share` method which is a promise based method that requires an object property. It accepts any of the following four arguments: `text`, `title`, `url` or `files`. At least one of these must be passed in order to stop the browser from throwing a `TypeError`. You should pass at least 3 of these properties not only because it is regarded as best practice but also because you do not have complete control over which application your content will be share to. You want to make sure that no matter where it is shared to, it makes sense and also tracks back to your website.

```
const shareInfo = {
  'title' : 'My new year resolution',
  'text' : 'Join the #100DaysOfCode Challenge',
  'url' : 'https://twitter.com/devloader'
}

if(navigator.share){
  btn.addEventListener('click', () => {
    navigator.share(shareInfo)
    .then( () => console.log('Shared successfully'))
    .catch( (error) => console.log('An error occured ', error))
  })
}
```
 
Now, for instance if the user has a very good friend, let's call her Funmi. The user is excited about the #100DaysOfCode challenge and wishes to share with Funmi, they click on our little share button and they happen to have Funmi's email so they select their favourite mail application.

Our `title` up there could become the mail's subject, while the `text` could be the mail body. If we had an image or any of the supported `files`, it could be an attachment to the mail. 

And that, is how we set up the share dialog built into native apps on a website using Javascript.

In the part 2 of this tutorial, we will be looking at sharing files (pictures, audios, videos, etc).

Thanks for reading and I'll love to have your feedback.

PS: Please follow me on twitter [@devloader](https://twitter.com/devloader)