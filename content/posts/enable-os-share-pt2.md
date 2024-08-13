---
title: Implement the OS supported share dialog on your website the using Javascript Web Share API 2
date: 2020-01-09
category: Javascript
tags: ["tutorials", "code"]
author: Samuel Olaegbe
cover: ./media/js-os-dialog.png
excerpt: Common native apps like Twitter or any app that allows you to share content outside of them provide support for a dialog that allows you to share their content into other apps that are installed on your phone. In this tutorial, we will take a look at how this is done.
canonical: https://devloader.hashnode.dev/how-to-enable-the-os-supported-share-dialog-from-your-website-on-mobile-devices-using-javascript-web-share-api-part-2-ck56bmc2p02y6mzs1u72pwmjn
---

A couple of days ago I wrote the [part 1](https://devloader.hashnode.dev/how-to-enable-the-os-supported-share-dialog-from-your-website-on-mobile-devices-using-javascript-web-share-api-ck4xy25vi0056mus1nn2n9ck5) of this post which outline everything involved in setting up the share dialog which is common to native apps on your mobile apps.

In this post, we will be looking at how to add support for sharing media files from your web app into apps installed on your users. 

### The code
Firstly, we will test for the availability of the ```share``` feature but a little bit different from what we did when we were sharing text in the part 1 of this post:

```
   if (navigator.canShare && navigator.canShare({ files: codePictures })) {
        //code here
   }
```

The ```canShare``` property is a helper method that helps to test for the availability of the share feature on the browser. See list of supported browsers [here](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#Browser_compatibility).

Now, we have replaced the ``url`` with the ``files`` option. The files option can accept an array or a single file. You may have saved these from a form or a URL on your website and simple store it in the ```codePictures``` array:

```
const shareInfo = {
   title : 'My new year resolution',
   text : 'Join the #100DaysOfCode Challenge',
   files: codePictures,
}

if(navigator.share){
  btn.addEventListener('click', () => {
    navigator.share(shareInfo)
    .then( () => console.log('Images shared successfully'))
    .catch( (error) => console.log('An error occured ', error))
  })
}
```

And that's it! You've just imitated the share behaviour of native apps on your website!

I'd love your feedback on this article. Did you try it out? Did it work for you? What problems did you have?, etc.

Remember to like, share and comment ✌