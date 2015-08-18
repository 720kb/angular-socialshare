Angular Socialshare
==================

[![Join the chat at https://gitter.im/720kb/angular-socialshare](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/720kb/angular-socialshare?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Angular Socialshare is an angularjs directive for sharing urls and content on social networks such as (facebook, google+, twitter, pinterest and so on).


The angular socialshare is developed by [720kb](http://720kb.net).

##Requirements


AngularJS v1.2+

##Screen
![Angular socialshare](http://i.imgur.com/uRg6mO5.jpg)

###Browser support


![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
 ✔ | ✔ | IE9 + | ✔ | ✔ |


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

##Installation

####Bower

```
$ bower install angularjs-socialshare --save
```
####Npm

```
$ npm install angular-socialshare --save
```

_then [load](https://github.com/720kb/angular-socialshare#load) it in your html_

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

#####Providers:

- facebook
- twitter
- linkedin
- google+
- pinterest
- tumblr
- reddit
- stumbleupon
- buffer
- digg
- delicious
- vk

Please use them all in lowercase (`socialshare-proivder="delicious"`)

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
You can set the media source to share using the `socialshare-media=""` attribute

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

####Sharing via
You can set the twitter via to share using the `socialshare-via=""` attribute

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

####Sharing type
You can set the type of sharing window using the `socialshare-type=""` attribute

At the moment this option is only supported for Facebook feed dialog.

_Note: when you are using `socialshare-type="feed"` you must also supply your facebook app id using `socialshare-via`, and a redirect uri using `socialshare-redirect-uri`._

#####Facebook _Dialog_:

Available options:

```html
<a href="#"
socialshare
socialshare-provider="facebook"
socialshare-type="feed"
socialshare-via="145634995501895"
socialshare-to=""
socialshare-from=""
socialshare-ref=""
socialshare-display="popup"
socialshare-media="https://avatars0.githubusercontent.com/u/7762645?v=3&s=200"
socialshare-source=""
socialshare-description="Yes it's super awesome, seriously!"
socialshare-text="720kb"
socialshare-caption="720kb is awesome"
socialshare-url="http://720kb.net"
socialshare-redirect-uri="https://developers.facebook.com/tools/explorer">
Share with Fb Dialog
</a>
```
_For more details see https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4_

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
#### Sharing to a subreddit
You can set `socialshare-subreddit` to specify the subreddit you want to share to. Example:

```html
<a href='#'
socialshare
socialshare-provider="reddit"
socialshare-subreddit="technology"
socialshare-url="http://720kb.net"
socialshare-text="Sharing it!"
socialshare-popup-height="900"
socialshare-popup-width="650">
</a>
```

**Note**: Minimum popup resolution for reddit popups is 900 x 650 pixels since the reddit submission page is not responsive and is broken on lesser widths.

## Example

####[Live demo](https://720kb.github.io/angular-socialshare)


##Contributing

We will be much grateful if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
