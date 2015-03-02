Angular Socialshare
==================


Angular Socialshare is an angularjs directive for sharing urls and content on social networks such as (facebook, google+, twitter, pinterest and so on).


The angular socialshare is developed by [720kb](http://720kb.net).

##Requirements


AngularJS v1.2+

##Screen
![Angular socialshare](http://i.imgur.com/WL03mNH.png)

###Browser support


Chrome  ![ok](http://i.imgur.com/CK8qxk1.png)

Firefox ![ok](http://i.imgur.com/CK8qxk1.png)

Safari ![ok](http://i.imgur.com/CK8qxk1.png)

Opera ![ok](http://i.imgur.com/CK8qxk1.png)

IE    ![mmm](http://i.imgur.com/iAIwqCL.png)


## Load

To use the directive, include the angular socialshare's javascript file in your web page:

```html
<!DOCTYPE HTML>
<html>
<body ng-app="app">
  //.....
  <script src="src/js/angular-socialshare.js"></script>
</body>
</html>
```

##Install

###Bower installation

```
$ bower install angularjs-socialshare --save
```

_then load the js files in your html_

###Add module dependency
Add the 720kb.socialshare module dependency

```js
angular.module('app', [
  '720kb.socialshare'
 ]);
```


Call the directive wherever you want in your html page

```html

<a href="#"
socialshare
socialshare-provider="facebook"
socialshare-text="720kb angular-socialshare"
socialshare-url="http://720kb.net">
Share me
</a>

```
##Options
Angular socialshare allows you to use some options via `attribute` data

####Sharing Provider
You can set the social platform you want to share on using the `socialshare-provider=""` attribute.

###Providers:

- facebook
- twitter
- vk
- stumbleupon
- google+
- digg
- delicious
- tumblr
- pinterest
- reddit

* use them all in lowercase (`socialshare-proivder="delicious"`)

```html
<a href="#"
socialshare
socialshare-provider="reddit"
socialshare-text="720kb is enough!" >
Share me
</a>
```

####Sharing url
You can set the url to share using the `socialshare-url=""` attribute
```html
<a href="#"
socialshare
socialshare-provider="google+"
socialshare-url="http://my_page_url">
Share me
</a>
```
####Sharing content
You can set the text to share using the `socialshare-text=""` attribute

```html
<a href="#"
socialshare
socialshare-provider="facebook"
socialshare-text="720kb is enough!">
Share me
</a>
```
####Sharing media
You can set the media source to share using the `socialshare-media=""` attribute (for example, you will use it for pinterest)

```html
<a href="#"
socialshare
socialshare-provider="pinterest"
socialshare-media="http://720kb.net/assets/img/logo.png">
Share me
</a>
```

####Sharing hashtags
You can set the hashtags to share using the `socialshare-hashtags=""` attribute (for example, you will use it for twitter)

```html
<a href="#"
socialshare
socialshare-provider="twitter"
socialshare-url="http://720kb.net"
socialshare-hashtags="woa, wonderful, interesting">
Share me
</a>
```

####Sharing "via"
You can set the twitter via (actually no other social is allowing this tag) to share using the `socialshare-via=""` attribute

```html
<a href="#"
socialshare
socialshare-provider="twitter"
socialshare-via="@720kb"
socialshare-url="http://720kb.net"
socialshare-hashtags="woa, wonderful, interesting">
Share me
</a>
```

####Sharing Event Trigger
You can choose to bind a different event trigger for showing up the sharer popup using the `socialshare-trigger=""` attribute (you can use any angular `element.bind()` event you want)

```html
<a href="#"
socialshare
socialshare-provider="reddit"
socialshare-text="Sharing on mouseover"
socialshare-trigger="mouseover">
Share me when mouse is over
</a>
```
or a set of

```html
<a href="#"
socialshare
socialshare-provider="reddit"
socialshare-text="Sharing on mouseover"
socialshare-trigger="focusout mouseleave">
Share me when focusout or mouseleave
</a>
```

####Sharing Popup Size
you can set a specific Height or Width for the sharing popup using the `socialshare-popup-height=""` and `socialshare-popup-width=""` attributes

```html
<a href="#"
socialshare
socialshare-provider="reddit"
socialshare-url="http://720kb.net"
socialshare-text="Sharing it!"
socialshare-popup-height="800"
socialshare-popup-width="800">
Share with a bigger popup
</a>
```

## Example

###[Live demo](https://720kb.github.io/angular-socialshare)


##Contributing

We will be much grateful if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
